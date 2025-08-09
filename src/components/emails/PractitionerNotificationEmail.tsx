import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Link,
} from '@react-email/components';
import * as React from 'react';

interface PractitionerNotificationEmailProps {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
  timestamp: string;
  language: string;
}

const getLanguageName = (lang: string) => {
  const languages: { [key: string]: string } = {
    'fr': 'Français 🇫🇷',
    'en': 'English 🇺🇸',
    'es': 'Español 🇪🇸',
    'pt-BR': 'Português 🇧🇷',
    'zh-cn': '中文 🇨🇳',
    'hmn': 'Hmoob 🏔️'
  };
  return languages[lang] || lang;
};

export const PractitionerNotificationEmail = ({
  firstname,
  lastname,
  email,
  message,
  timestamp,
  language = 'fr'
}: PractitionerNotificationEmailProps) => {
  const preview = `Nouveau message de ${firstname} ${lastname}`;
  
  return (
    <Html>
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        `}</style>
      </Head>
      <Preview>{preview}</Preview>
      <Body style={main}>
        {/* Zen floating background elements */}
        <div style={floatingBackground}>
          <div style={{...floatingCircle, top: '10%', right: '5%', backgroundColor: 'rgba(226, 114, 91, 0.08)'}}></div>
          <div style={{...floatingCircle, top: '60%', left: '8%', backgroundColor: 'rgba(122, 132, 113, 0.06)', width: '280px', height: '280px'}}></div>
          <div style={{...floatingCircle, bottom: '15%', right: '15%', backgroundColor: 'rgba(244, 196, 48, 0.05)', width: '200px', height: '200px'}}></div>
        </div>

        <Container style={container}>
          {/* Alert Badge Header */}
          <Section style={badgeSection}>
            <div style={alertBadge}>
              <div style={alertIcon}>!</div>
              <Text style={alertText}>Nouveau Contact</Text>
            </div>
          </Section>

          {/* Main Content Card */}
          <Section style={mainCard}>
            {/* Header with gradient */}
            <Section style={headerSection}>
              <div style={headerIcon}>📨</div>
              <div>
                <Heading style={headerTitle}>Message de Contact Reçu</Heading>
                <Text style={headerSubtitle}>Formulaire Shiatsu Guyane</Text>
              </div>
            </Section>

            <Hr style={gradientSeparator} />

            {/* Client Information Card */}
            <Section style={clientCard}>
              <Heading style={cardTitle}>👤 Informations Client</Heading>
              
              <div style={clientGrid}>
                <div style={clientField}>
                  <div style={fieldLabel}>Prénom</div>
                  <div style={fieldValue}>{firstname}</div>
                </div>
                
                <div style={clientField}>
                  <div style={fieldLabel}>Nom</div>
                  <div style={fieldValue}>{lastname}</div>
                </div>
                
                <div style={clientField}>
                  <div style={fieldLabel}>Email</div>
                  <Link href={`mailto:${email}`} style={emailValue}>{email}</Link>
                </div>
                
                <div style={clientField}>
                  <div style={fieldLabel}>Langue préférée</div>
                  <div style={fieldValue}>{getLanguageName(language)}</div>
                </div>
                
                <div style={clientField}>
                  <div style={fieldLabel}>Reçu le</div>
                  <div style={fieldValue}>{timestamp}</div>
                </div>
              </div>
            </Section>

            {/* Message Card */}
            <Section style={messageCard}>
              <Heading style={cardTitle}>💬 Message du Client</Heading>
              <div style={messageContainer}>
                <Text style={messageText}>{message}</Text>
              </div>
            </Section>

            {/* Quick Actions Card */}
            <Section style={actionsCard}>
              <Heading style={cardTitle}>⚡ Actions Rapides</Heading>
              
              <div style={buttonGrid}>
                <Link href={`mailto:${email}?subject=Re: Votre demande de contact - Shiatsu Guyane`} style={primaryAction}>
                  <div style={actionIcon}>✉️</div>
                  <div>
                    <div style={actionTitle}>Répondre</div>
                    <div style={actionSubtitle}>Email direct</div>
                  </div>
                </Link>
                
                <Link href={`mailto:${email}?subject=Confirmation de rendez-vous - Shiatsu Guyane&body=Bonjour ${firstname},%0D%0A%0D%0AJe vous remercie pour votre message.%0D%0A%0D%0AJe suis disponible pour un rendez-vous aux créneaux suivants :%0D%0A- %0D%0A- %0D%0A- %0D%0A%0D%0APourriez-vous me confirmer le créneau qui vous convient le mieux ?%0D%0A%0D%0ACordialement,%0D%0ANathalie JEAN%0D%0APraticienne en Shiatsu`} style={secondaryAction}>
                  <div style={actionIcon}>📅</div>
                  <div>
                    <div style={actionTitle}>Rendez-vous</div>
                    <div style={actionSubtitle}>Proposer créneaux</div>
                  </div>
                </Link>
              </div>
            </Section>

            {/* Language Note */}
            {language !== 'fr' && (
              <Section style={languageAlert}>
                <div style={languageWarning}>
                  <div style={warningIcon}>⚠️</div>
                  <div>
                    <Text style={warningTitle}>Note linguistique</Text>
                    <Text style={warningText}>
                      Ce client préfère communiquer en {getLanguageName(language)}. 
                      Pensez à répondre dans cette langue.
                    </Text>
                  </div>
                </div>
              </Section>
            )}

            {/* Summary Card */}
            <Section style={summaryCard}>
              <Heading style={cardTitle}>📋 Résumé Rapide</Heading>
              <div style={summaryGrid}>
                <Text style={summaryLine}><strong>Contact:</strong> {firstname} {lastname}</Text>
                <Text style={summaryLine}><strong>Email:</strong> {email}</Text>
                <Text style={summaryLine}><strong>Langue:</strong> {getLanguageName(language)}</Text>
                <Text style={summaryLine}><strong>Date:</strong> {timestamp}</Text>
              </div>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <div style={footerBadge}>
              <Text style={footerText}>
                ✨ Email automatique • Système Shiatsu Guyane
              </Text>
            </div>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Zen Aesthetic Styles - Practitioner Notification
const main = {
  backgroundColor: '#F8F5F0', // --background: 39 32% 96%
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  position: 'relative' as const,
  minHeight: '100vh',
  padding: '0',
  margin: '0',
};

const floatingBackground = {
  position: 'fixed' as const,
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  pointerEvents: 'none' as const,
  zIndex: '-1',
};

const floatingCircle = {
  position: 'absolute' as const,
  width: '260px',
  height: '260px',
  borderRadius: '50%',
  filter: 'blur(45px)',
  opacity: '0.5',
};

const container = {
  maxWidth: '720px',
  margin: '0 auto',
  padding: '40px 20px',
  position: 'relative' as const,
};

const badgeSection = {
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const alertBadge = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  background: 'linear-gradient(90deg, rgba(226, 114, 91, 0.12) 0%, rgba(244, 196, 48, 0.08) 100%)',
  padding: '12px 24px',
  borderRadius: '9999px',
  border: '2px solid rgba(226, 114, 91, 0.25)',
  backdropFilter: 'blur(8px)',
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
};

const alertIcon = {
  width: '24px',
  height: '24px',
  background: 'linear-gradient(135deg, rgb(226, 114, 91) 0%, rgb(244, 196, 48) 100%)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  fontWeight: 'bold',
  color: 'white',
};

const alertText = {
  fontSize: '15px',
  fontWeight: '700',
  color: 'rgb(44, 44, 44)',
  margin: '0',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
};

const mainCard = {
  background: 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(16px)',
  borderRadius: '24px',
  padding: '40px',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(226, 114, 91, 0.15)',
};

const headerSection = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  marginBottom: '32px',
};

const headerIcon = {
  width: '64px',
  height: '64px',
  background: 'linear-gradient(135deg, rgb(226, 114, 91) 0%, rgb(122, 132, 113) 100%)',
  borderRadius: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '28px',
  boxShadow: '0 15px 25px -5px rgba(0, 0, 0, 0.15)',
};

const headerTitle = {
  fontSize: '26px',
  fontWeight: '700',
  color: 'rgb(44, 44, 44)',
  margin: '0 0 6px 0',
  letterSpacing: '-0.02em',
};

const headerSubtitle = {
  fontSize: '15px',
  color: 'rgb(107, 114, 128)',
  margin: '0',
  fontWeight: '500',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
};

const gradientSeparator = {
  height: '3px',
  background: 'linear-gradient(90deg, rgb(226, 114, 91) 0%, rgb(244, 196, 48) 50%, rgb(122, 132, 113) 100%)',
  border: 'none',
  borderRadius: '2px',
  margin: '32px 0',
  opacity: '0.4',
};

const clientCard = {
  background: 'rgba(244, 196, 48, 0.04)',
  borderRadius: '20px',
  padding: '28px',
  margin: '24px 0',
  border: '1px solid rgba(244, 196, 48, 0.2)',
};

const messageCard = {
  background: 'rgba(122, 132, 113, 0.04)',
  borderRadius: '20px',
  padding: '28px',
  margin: '24px 0',
  border: '1px solid rgba(122, 132, 113, 0.2)',
};

const actionsCard = {
  background: 'rgba(226, 114, 91, 0.04)',
  borderRadius: '20px',
  padding: '28px',
  margin: '24px 0',
  border: '1px solid rgba(226, 114, 91, 0.2)',
};

const summaryCard = {
  background: 'rgba(244, 196, 48, 0.06)',
  borderRadius: '20px',
  padding: '28px',
  margin: '24px 0',
  border: '1px solid rgba(244, 196, 48, 0.25)',
};

const cardTitle = {
  fontSize: '20px',
  fontWeight: '600',
  color: 'rgb(44, 44, 44)',
  margin: '0 0 20px 0',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const clientGrid = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '16px',
  marginTop: '20px',
};

const clientField = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '6px',
};

const fieldLabel = {
  fontSize: '13px',
  fontWeight: '600',
  color: 'rgb(107, 114, 128)',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
};

const fieldValue = {
  fontSize: '16px',
  color: 'rgb(44, 44, 44)',
  fontWeight: '500',
};

const emailValue = {
  fontSize: '16px',
  color: 'rgb(226, 114, 91)',
  fontWeight: '600',
  textDecoration: 'underline',
};

const messageContainer = {
  background: 'rgba(255, 255, 255, 0.6)',
  border: '1px solid rgba(122, 132, 113, 0.2)',
  borderRadius: '16px',
  padding: '24px',
  margin: '20px 0',
};

const messageText = {
  fontSize: '16px',
  lineHeight: '1.7',
  color: 'rgb(44, 44, 44)',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
  fontWeight: '400',
};

const buttonGrid = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '16px',
  marginTop: '20px',
};

const primaryAction = {
  background: 'linear-gradient(135deg, rgb(226, 114, 91) 0%, rgb(244, 196, 48) 100%)',
  color: 'white',
  padding: '20px 24px',
  borderRadius: '16px',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  transition: 'transform 0.2s ease',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
};

const secondaryAction = {
  background: 'linear-gradient(135deg, rgb(122, 132, 113) 0%, rgb(226, 114, 91) 100%)',
  color: 'white',
  padding: '20px 24px',
  borderRadius: '16px',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  transition: 'transform 0.2s ease',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
};

const actionIcon = {
  fontSize: '24px',
  width: '40px',
  height: '40px',
  background: 'rgba(255, 255, 255, 0.2)',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const actionTitle = {
  fontSize: '16px',
  fontWeight: '700',
  margin: '0 0 4px 0',
};

const actionSubtitle = {
  fontSize: '13px',
  opacity: '0.8',
  margin: '0',
  fontWeight: '400',
};

const languageAlert = {
  background: 'rgba(244, 196, 48, 0.08)',
  borderRadius: '20px',
  padding: '20px',
  margin: '24px 0',
  border: '2px solid rgba(244, 196, 48, 0.3)',
};

const languageWarning = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px',
};

const warningIcon = {
  fontSize: '24px',
  width: '40px',
  height: '40px',
  background: 'linear-gradient(135deg, rgb(244, 196, 48) 0%, rgb(226, 114, 91) 100%)',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: '0',
};

const warningTitle = {
  fontSize: '16px',
  fontWeight: '700',
  color: 'rgb(44, 44, 44)',
  margin: '0 0 6px 0',
};

const warningText = {
  fontSize: '15px',
  color: 'rgb(107, 114, 128)',
  margin: '0',
  lineHeight: '1.6',
};

const summaryGrid = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '12px',
  marginTop: '16px',
};

const summaryLine = {
  fontSize: '15px',
  color: 'rgb(44, 44, 44)',
  margin: '0',
  padding: '8px 16px',
  background: 'rgba(255, 255, 255, 0.5)',
  borderRadius: '12px',
  border: '1px solid rgba(244, 196, 48, 0.2)',
};

const footer = {
  textAlign: 'center' as const,
  marginTop: '40px',
};

const footerBadge = {
  display: 'inline-block',
  background: 'linear-gradient(90deg, rgba(122, 132, 113, 0.1) 0%, rgba(244, 196, 48, 0.1) 100%)',
  padding: '16px 32px',
  borderRadius: '9999px',
  border: '1px solid rgba(122, 132, 113, 0.2)',
};

const footerText = {
  fontSize: '14px',
  color: 'rgb(107, 114, 128)',
  margin: '0',
  fontWeight: '500',
};

export default PractitionerNotificationEmail;