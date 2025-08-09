import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from '@/components/ContactForm'

// Mock dictionary for French language
const mockDictionary = {
  contactPage: {
    labels: {
      firstname: 'Prénom',
      lastname: 'Nom',
      email: 'Email',
      message: 'Votre message'
    },
    placeholders: {
      firstname: 'Nathalie',
      lastname: 'JEAN', 
      email: 'nathalie.jean@email.com',
      message: 'Bonjour, je souhaiterais prendre rendez-vous...'
    },
    button: 'Envoyer →',
    form: {
      submitting: 'Envoi en cours...',
      success: {
        title: 'Message envoyé avec succès !',
        description: 'Merci pour votre message. Nous vous répondrons dans les plus brefs délais.',
        sendAnother: 'Envoyer un autre message'
      },
      error: {
        title: 'Erreur d\'envoi',
        description: 'Une erreur est survenue lors de l\'envoi de votre message.',
        tryAgain: 'Réessayer'
      }
    }
  }
}

// Mock fetch for API calls
global.fetch = jest.fn()

describe('ContactForm Component', () => {
  beforeEach(() => {
    fetch.mockClear()
  })

  test('renders all form fields correctly', () => {
    render(<ContactForm dictionary={mockDictionary} />)
    
    // Check that all form fields are rendered
    expect(screen.getByLabelText(/prénom/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/nom/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/votre message/i)).toBeInTheDocument()
    
    // Check submit button
    expect(screen.getByRole('button', { name: /envoyer/i })).toBeInTheDocument()
  })

  test('displays correct placeholders', () => {
    render(<ContactForm dictionary={mockDictionary} />)
    
    expect(screen.getByPlaceholderText('Nathalie')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('JEAN')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('nathalie.jean@email.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/bonjour, je souhaiterais/i)).toBeInTheDocument()
  })

  test('validates required fields before submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm dictionary={mockDictionary} />)
    
    const submitButton = screen.getByRole('button', { name: /envoyer/i })
    
    // Try to submit empty form
    await user.click(submitButton)
    
    // Form should not be submitted with empty required fields
    expect(fetch).not.toHaveBeenCalled()
  })

  test('validates email format', async () => {
    const user = userEvent.setup()
    render(<ContactForm dictionary={mockDictionary} />)
    
    const emailInput = screen.getByLabelText(/email/i)
    const submitButton = screen.getByRole('button', { name: /envoyer/i })
    
    // Enter invalid email
    await user.type(emailInput, 'invalid-email')
    await user.click(submitButton)
    
    // Should show validation error or prevent submission
    expect(fetch).not.toHaveBeenCalled()
  })

  test('submits form with valid data', async () => {
    const user = userEvent.setup()
    
    // Mock successful API response
    fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ success: true, message: 'Email sent successfully' })
    })

    render(<ContactForm dictionary={mockDictionary} />)
    
    // Fill in all required fields
    await user.type(screen.getByLabelText(/prénom/i), 'Marie')
    await user.type(screen.getByLabelText(/nom/i), 'Dupont')
    await user.type(screen.getByLabelText(/email/i), 'marie.dupont@test.fr')
    await user.type(screen.getByLabelText(/votre message/i), 'Bonjour, je souhaiterais prendre rendez-vous.')
    
    const submitButton = screen.getByRole('button', { name: /envoyer/i })
    await user.click(submitButton)
    
    // Verify API was called
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('/api/contact', expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: 'Marie',
          lastname: 'Dupont',
          email: 'marie.dupont@test.fr',
          message: 'Bonjour, je souhaiterais prendre rendez-vous.',
          language: 'fr'
        })
      }))
    })
  })

  test('displays loading state during submission', async () => {
    const user = userEvent.setup()
    
    // Mock delayed API response
    fetch.mockImplementationOnce(() => 
      new Promise(resolve => 
        setTimeout(() => resolve({
          ok: true,
          status: 200,
          json: async () => ({ success: true })
        }), 1000)
      )
    )

    render(<ContactForm dictionary={mockDictionary} />)
    
    // Fill form
    await user.type(screen.getByLabelText(/prénom/i), 'Marie')
    await user.type(screen.getByLabelText(/nom/i), 'Dupont')
    await user.type(screen.getByLabelText(/email/i), 'marie.dupont@test.fr')
    await user.type(screen.getByLabelText(/votre message/i), 'Test message')
    
    // Submit form
    await user.click(screen.getByRole('button', { name: /envoyer/i }))
    
    // Check loading state
    expect(screen.getByText(/envoi en cours/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeDisabled()
  })

  test('displays success message after successful submission', async () => {
    const user = userEvent.setup()
    
    // Mock successful API response
    fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ success: true })
    })

    render(<ContactForm dictionary={mockDictionary} />)
    
    // Fill and submit form
    await user.type(screen.getByLabelText(/prénom/i), 'Marie')
    await user.type(screen.getByLabelText(/nom/i), 'Dupont')
    await user.type(screen.getByLabelText(/email/i), 'marie.dupont@test.fr')
    await user.type(screen.getByLabelText(/votre message/i), 'Test message')
    
    await user.click(screen.getByRole('button', { name: /envoyer/i }))
    
    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/message envoyé avec succès/i)).toBeInTheDocument()
    })
    
    expect(screen.getByText(/merci pour votre message/i)).toBeInTheDocument()
  })

  test('displays error message on submission failure', async () => {
    const user = userEvent.setup()
    
    // Mock API error response
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => ({ error: 'Server error' })
    })

    render(<ContactForm dictionary={mockDictionary} />)
    
    // Fill and submit form
    await user.type(screen.getByLabelText(/prénom/i), 'Marie')
    await user.type(screen.getByLabelText(/nom/i), 'Dupont')
    await user.type(screen.getByLabelText(/email/i), 'marie.dupont@test.fr')
    await user.type(screen.getByLabelText(/votre message/i), 'Test message')
    
    await user.click(screen.getByRole('button', { name: /envoyer/i }))
    
    // Wait for error message
    await waitFor(() => {
      expect(screen.getByText(/erreur d'envoi/i)).toBeInTheDocument()
    })
    
    expect(screen.getByText(/une erreur est survenue/i)).toBeInTheDocument()
  })

  test('allows sending another message after success', async () => {
    const user = userEvent.setup()
    
    // Mock successful API response
    fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ success: true })
    })

    render(<ContactForm dictionary={mockDictionary} />)
    
    // Fill and submit form
    await user.type(screen.getByLabelText(/prénom/i), 'Marie')
    await user.type(screen.getByLabelText(/nom/i), 'Dupont')
    await user.type(screen.getByLabelText(/email/i), 'marie.dupont@test.fr')
    await user.type(screen.getByLabelText(/votre message/i), 'Test message')
    
    await user.click(screen.getByRole('button', { name: /envoyer/i }))
    
    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/message envoyé avec succès/i)).toBeInTheDocument()
    })
    
    // Click "Send another message" button
    const sendAnotherButton = screen.getByText(/envoyer un autre message/i)
    await user.click(sendAnotherButton)
    
    // Form should be reset and visible again
    expect(screen.getByLabelText(/prénom/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/prénom/i)).toHaveValue('')
  })

  test('handles network errors gracefully', async () => {
    const user = userEvent.setup()
    
    // Mock network error
    fetch.mockRejectedValueOnce(new Error('Network error'))

    render(<ContactForm dictionary={mockDictionary} />)
    
    // Fill and submit form
    await user.type(screen.getByLabelText(/prénom/i), 'Marie')
    await user.type(screen.getByLabelText(/nom/i), 'Dupont')
    await user.type(screen.getByLabelText(/email/i), 'marie.dupont@test.fr')
    await user.type(screen.getByLabelText(/votre message/i), 'Test message')
    
    await user.click(screen.getByRole('button', { name: /envoyer/i }))
    
    // Should show error message
    await waitFor(() => {
      expect(screen.getByText(/erreur d'envoi/i)).toBeInTheDocument()
    })
  })
})