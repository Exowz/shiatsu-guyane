# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production application 
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Architecture Overview

This is a Next.js 15 application for a Shiatsu therapy practice website with internationalization support.

### Core Architecture

**Internationalized Routing**: Uses Next.js App Router with dynamic `[lang]` segments for French/English localization:
- Routes: `/fr/...` and `/en/...` 
- Default locale: French (`fr`)
- Supported locales: `['fr', 'en']` (defined in `src/lib/i18n-config.ts`)

**Dictionary System**: Server-side translations using cached dictionary loading:
- Dictionary files: `src/dictionaries/en.json` and `src/dictionaries/fr.json`
- Helper: `src/lib/dictionary.ts` with React cache for performance
- Usage: `getDictionary(locale)` returns typed translation object

**Component Structure**:
- UI components using shadcn/ui with Tailwind CSS v4
- Theme support via `next-themes`
- Component organization:
  - `src/components/layout/` - Navigation and layout components
  - `src/components/sections/` - Page sections
  - `src/components/features/` - Feature-specific components (reviews, hero)
  - `src/components/ui/` - Base UI components (shadcn/ui)
  - `src/components/providers/` - Context providers
  - `src/components/magicui/` - Third-party UI components

### Key Dependencies

- **UI Framework**: React 19 + Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with CSS variables, Radix UI primitives
- **Icons**: Lucide React + Tabler Icons + React Icons
- **Animations**: Motion (Framer Motion) + custom animations
- **Typography**: next/font with Geist font family

### File Structure Patterns

**Pages**: Located in `src/app/[lang]/` with localized routes:
- `page.tsx` - Homepage
- `about/page.tsx` - About page  
- `contact/page.tsx` - Contact page
- `services-pricing/page.tsx` - Services and pricing
- `le-shiatsu/page.tsx` - Shiatsu information
- `pour-qui/page.tsx` - Target audience page
- `infos-pratiques/page.tsx` - Practical information

**API**: Server components in `src/app/api/` (e.g., reviews endpoint)

**Components**: Follow shadcn/ui conventions with path aliases:
- `@/components` - Main components directory
- `@/components/ui` - Base UI components  
- `@/lib` - Utilities and configuration
- `@/dictionaries` - Translation files
- `@/types` - TypeScript type definitions

### Development Notes

**TypeScript Configuration**: Uses strict mode with path aliases configured for `@/*` imports pointing to `src/*`

**Styling System**: Uses shadcn/ui with "new-york" style variant, CSS variables enabled, and neutral base color

**Content**: Website content focuses on Shiatsu therapy services by practitioner "Nathalie JEAN" with sections for benefits, target audiences, testimonials, and booking information

### Type Safety

**Types Directory**: `src/types/` contains:
- `dictionary.ts` - Type definitions for translation structure
- `components.ts` - Shared component prop types

**Typed Internationalization**: All dictionary usage is fully typed with `Dictionary` interface

### Environment Variables

Copy `.env.example` to `.env.local` and configure:
- `NEXT_PUBLIC_SITE_URL` - Site URL for meta tags
- Google Business API credentials for reviews
- Email service configuration for contact forms