<div align="center">

# Shiatsu Guyane

### _Site vitrine du cabinet de Shiatsu de Nathalie JEAN_

<p><em>Présenter la pratique du Shiatsu en Guyane et faciliter la prise de contact — dans la langue de chaque visiteur.</em></p>

![Status](https://img.shields.io/badge/status-en_ligne-success?style=flat)
![Version](https://img.shields.io/badge/version-1.0-blue?style=flat)
![License](https://img.shields.io/badge/license-propri%C3%A9taire-lightgrey?style=flat)
![i18n](https://img.shields.io/badge/langues-7-orange?style=flat)

<p><em>Built with the tools and technologies:</em></p>

![Next.js](https://img.shields.io/badge/Next.js-16.1-000000?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-new--york-000000?style=flat)

![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF?style=flat&logo=framer&logoColor=white)
![Resend](https://img.shields.io/badge/Resend-Email-000000?style=flat&logo=resend&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-Validation-3E67B1?style=flat&logo=zod&logoColor=white)
![Umami](https://img.shields.io/badge/Umami-Analytics-000000?style=flat)
![Dokploy](https://img.shields.io/badge/Dokploy-Docker-2496ED?style=flat&logo=docker&logoColor=white)

---

### 🌿 Site professionnel en production

**Praticienne** : Nathalie JEAN · **Localisation** : Guyane française

**[🌐 Site en ligne](https://www.shiatsu-guyane.com) · [🏗️ Architecture](#architecture-technique)**

</div>

---

## Table des Matières

- [Objectif du Projet](#objectif-du-projet)
- [Fonctionnalités](#fonctionnalités)
  - [1. Internationalisation (7 langues)](#1-internationalisation-7-langues)
  - [2. Formulaire de Contact](#2-formulaire-de-contact)
  - [3. Avis Google](#3-avis-google)
  - [4. Analytics Respectueux du Consentement](#4-analytics-respectueux-du-consentement)
  - [5. Conformité RGPD](#5-conformité-rgpd)
  - [6. Design & Animations](#6-design--animations)
- [Architecture Technique](#architecture-technique)
- [Structure du Projet](#structure-du-projet)
- [Système d'Internationalisation](#système-dinternationalisation)
- [API REST](#api-rest)
- [Installation et Démarrage](#installation-et-démarrage)
- [Déploiement](#déploiement)
- [Scripts Disponibles](#scripts-disponibles)
- [Décisions Techniques](#décisions-techniques)
- [Contributeur](#contributeur)

---

## Objectif du Projet

Shiatsu Guyane est le **site vitrine** du cabinet de Nathalie JEAN, praticienne de Shiatsu en Guyane française. L'objectif est double : présenter la pratique (bienfaits, publics concernés, informations pratiques, tarifs) et **convertir la visite en prise de contact**.

Le site répond à une contrainte propre au territoire guyanais : une population **multilingue**. Il est donc traduit en 7 langues afin que chaque visiteur — francophone, anglophone, lusophone, hispanophone, sinophone ou hmong — accède au contenu dans sa langue.

Techniquement, c'est une application **Next.js 16 (App Router)** entièrement rendue côté serveur et pré-générée statiquement par locale, servie depuis un VPS auto-hébergé via Dokploy.

---

## Fonctionnalités

### 1. Internationalisation (7 langues)

Routage internationalisé par segment dynamique `[lang]`, sans middleware : chaque page est **pré-générée statiquement** pour chaque locale via `generateStaticParams`.

| Code | Langue |
|------|--------|
| `fr` | Français (défaut) |
| `en` | English |
| `pt-BR` | Português (Brasil) |
| `es` | Español |
| `zh-cn` | 中文 (简体) |
| `zh-hk` | 中文 (繁體) |
| `hmn` | Hmong |

Les traductions vivent dans des dictionnaires JSON typés (`src/dictionaries/*.json`), chargés côté serveur via un helper mis en cache (`React.cache`). La racine `/` redirige vers la locale par défaut `/fr`.

### 2. Formulaire de Contact

Route API `POST /api/contact` avec une pile de sécurité complète :

- **Validation** des entrées via **Zod** (prénom, nom, email, message bornés).
- **Rate limiting** : 5 requêtes / 60 s par IP, via **Upstash Redis** en production (repli en mémoire en développement).
- **Envoi transactionnel** via **Resend** : email de confirmation au visiteur + notification à la praticienne, rendus avec **React Email**, `replyTo` positionné sur l'email du visiteur.
- Horodatage au fuseau `America/Cayenne`.

### 3. Avis Google

Route API `GET /api/reviews` qui interroge la **Google Places API** pour afficher les avis clients, avec un **cache en mémoire de 24 h** par langue afin de limiter les appels facturés. La clé API reste strictement côté serveur.

### 4. Analytics Respectueux du Consentement

Suivi d'audience via **Umami** (analytics sans cookie, respectueux de la vie privée), auto-hébergé sur `analytics.shiatsu-guyane.com`.

### 5. Conformité RGPD

Bannière de consentement cookies (`CookieConsentBanner`) avec granularité par catégorie (essentiels, analytiques, performance, préférences), choix persistés en `localStorage`, et lien vers la politique de confidentialité.

### 6. Design & Animations

- **shadcn/ui** (variante _new-york_) sur primitives **Radix UI**, **Tailwind CSS v4** (variables CSS).
- Thème clair / sombre via **next-themes** (respect du thème système).
- Animations **Framer Motion** et composants décoratifs « garden » sur-mesure.
- Typographie **Geist** via `next/font`.
- Icônes Lucide, Tabler et React Icons.

---

## Architecture Technique

```
┌─────────────────────────────────────────────────────────────┐
│                        NAVIGATEUR                           │
│         Rendu statique par locale (/fr, /en, /es ...)       │
└────────────────────────────┬────────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────────┐
│                   NEXT.JS 16 · APP ROUTER                   │
│         React 19 · TypeScript · output: standalone          │
│                                                             │
│  Rendu :                                                    │
│  • app/[lang]/**          Pages pré-générées (SSG)          │
│  • getDictionary()        Traductions serveur (React.cache) │
│                                                             │
│  UI : shadcn/ui · Radix · Tailwind v4 · Framer Motion       │
│  Thème : next-themes (clair / sombre)                       │
└──────────────┬───────────────────────────┬──────────────────┘
               │ Route Handlers            │ <Script> Umami
┌──────────────▼──────────────┐  ┌─────────▼────────────────────┐
│        API ROUTES           │  │        ANALYTICS             │
│  POST /api/contact          │  │  Umami (auto-hébergé,        │
│   Zod + Resend + rate limit │  │  sans cookie)                │
│  GET  /api/reviews          │  └──────────────────────────────┘
│   Google Places + cache 24h │
└──────────────┬──────────────┘
               │
┌──────────────▼──────────────────────────────────────────────┐
│                     SERVICES EXTERNES                       │
│  Resend (email transactionnel)                              │
│  Google Places API (avis clients)                           │
│  Upstash Redis (rate limiting distribué)                    │
└─────────────────────────────────────────────────────────────┘
```

---

## Structure du Projet

```
npx-shiatsu-guyane/
├── CLAUDE.md                    # Guide pour l'assistant IA
├── next.config.ts               # output: standalone, images, turbopack
├── components.json              # Configuration shadcn/ui (new-york)
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Layout racine (<html>, <body>, thème)
│   │   ├── page.tsx             # Redirection / → /fr
│   │   ├── [lang]/              # Pages localisées (SSG)
│   │   │   ├── layout.tsx       # Header / Footer / bannière cookies
│   │   │   ├── page.tsx         # Accueil
│   │   │   ├── about/           # À propos
│   │   │   ├── le-shiatsu/      # Qu'est-ce que le Shiatsu
│   │   │   ├── pour-qui/        # Publics concernés
│   │   │   ├── services-pricing/# Prestations & tarifs
│   │   │   ├── infos-pratiques/ # Informations pratiques
│   │   │   ├── contact/         # Contact
│   │   │   └── politique-confidentialite/
│   │   └── api/
│   │       ├── contact/route.ts # Resend + Zod + rate limit
│   │       └── reviews/route.ts # Google Places + cache
│   ├── components/
│   │   ├── layout/              # Header, Footer
│   │   ├── sections/            # Sections de page
│   │   ├── features/            # Hero, avis...
│   │   ├── emails/              # Templates React Email
│   │   ├── garden/              # Décors animés sur-mesure
│   │   ├── ui/                  # shadcn/ui + composants de base
│   │   ├── magicui/             # Composants animés tiers
│   │   └── providers/           # Providers de contexte
│   ├── dictionaries/            # fr, en, pt-BR, es, zh-cn, zh-hk, hmn
│   ├── lib/
│   │   ├── i18n-config.ts       # Locales & locale par défaut
│   │   ├── dictionary.ts        # getDictionary() (React.cache)
│   │   ├── ratelimit.ts         # Upstash / repli mémoire
│   │   └── constants.ts         # SITE_CONFIG
│   └── types/                   # dictionary.ts, components.ts
└── e2e/                         # Tests Playwright
```

---

## Système d'Internationalisation

Le système repose sur trois briques, sans dépendance i18n externe :

1. **Configuration** (`src/lib/i18n-config.ts`) — liste des locales et locale par défaut, source de vérité du routage.
2. **Chargement** (`src/lib/dictionary.ts`) — `getDictionary(locale)` importe dynamiquement le bon fichier JSON, mémoïsé via `React.cache` pour éviter les rechargements sur une même requête.
3. **Typage** (`src/types/dictionary.ts`) — l'interface `Dictionary` type l'intégralité des traductions ; toute clé manquante est détectée à la compilation.

```tsx
// Usage dans une page serveur
export default async function Page(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);
  return <HeroSection dictionary={dictionary} lang={lang} />;
}
```

---

## API REST

### Contact
```
POST   /api/contact     Envoi du formulaire (Zod + rate limit + Resend)
                        Body : { firstname, lastname, email, message, language }
                        Réponses : 200 · 400 (validation) · 429 (rate limit) · 500
GET    /api/contact     405 Method Not Allowed
```

### Avis
```
GET    /api/reviews?lang=fr    Avis Google Places (cache mémoire 24 h)
                               En-tête X-Cache : HIT | (absent si MISS)
```

---

## Installation et Démarrage

### Prérequis

- [Node.js **20.9+**](https://nodejs.org/) (requis par Next.js 16)
- npm (le dépôt versionne un `package-lock.json`)

### 1. Cloner et installer

```bash
git clone https://github.com/Exowz/shiatsu-guyane.git
cd shiatsu-guyane
npm install
```

### 2. Variables d'environnement

Copier `.env.example` vers `.env.local` puis renseigner vos valeurs :

```env
# Application
NEXT_PUBLIC_SITE_URL=https://www.shiatsu-guyane.com

# Google Places (avis clients) — côté serveur uniquement
GOOGLE_API_KEY=your_google_api_key_here
GOOGLE_PLACE_ID=your_place_id_here

# Email transactionnel (Resend)
RESEND_API_KEY=your_resend_api_key_here
EMAIL_DOMAIN=your_verified_domain
PRACTITIONER_EMAIL=destinataire@example.com

# Rate limiting (optionnel — repli mémoire si absent)
UPSTASH_REDIS_REST_URL=https://xxxxxxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_upstash_token_here
```

> ⚠️ Ne jamais committer de clés réelles. Les valeurs `NEXT_PUBLIC_*` sont exposées au client ; toutes les autres restent strictement côté serveur.

### 3. Lancer en développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) (redirige vers `/fr`).

---

## Déploiement

Le site est **auto-hébergé** sur un **VPS IONOS** via **Dokploy** (Docker + Traefik), et non sur une plateforme serverless.

- `next.config.ts` utilise `output: 'standalone'` : le build produit un serveur Node autonome, idéal pour la conteneurisation.
- Dokploy construit l'image puis la sert derrière Traefik (TLS automatique).
- Les variables d'environnement sont définies dans le tableau de bord Dokploy (jamais en clair dans le dépôt).

```bash
# Build de production (identique à celui exécuté par Dokploy)
npm run build
npm run start
```

---

## Scripts Disponibles

| Script | Description |
|--------|-------------|
| `npm run dev` | Serveur de développement (http://localhost:3000) |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production |
| `npm run lint` | Analyse ESLint |
| `npm run test` | Tests unitaires (Jest + Testing Library) |
| `npm run test:e2e` | Tests end-to-end (Playwright) |
| `npm run test:perf` | Audit Lighthouse CI |
| `npm run analyze` | Build avec analyse du bundle |

---

## Décisions Techniques

### Pourquoi un système de dictionnaires maison plutôt que `next-intl` ?
Le site est un ensemble de pages de contenu statique, sans logique i18n complexe (pluriels, formats de date localisés…). Un simple chargement de JSON typé mis en cache par `React.cache` couvre le besoin, sans dépendance supplémentaire, tout en gardant un rendu **entièrement statique** par locale.

### Pourquoi pas de middleware de routage i18n ?
Toutes les pages vivent sous `[lang]` et sont énumérées par `generateStaticParams`. La locale fait donc partie de l'URL et le rendu reste statique — pas besoin d'un middleware qui rendrait chaque requête dynamique. La racine `/` se contente d'une redirection vers `/fr`.

### Pourquoi Resend + React Email ?
Resend offre une API simple et un rendu d'emails en composants React (typés, versionnés avec le code) plutôt que du HTML concaténé. Le repli `Promise.allSettled` garantit qu'un échec de l'email de confirmation client ne bloque pas la notification à la praticienne.

### Pourquoi un cache en mémoire pour les avis Google ?
Les avis évoluent lentement et l'API Places est facturée à l'appel. Un cache mémoire de 24 h par langue suffit à la volumétrie d'un site vitrine mono-instance, sans infrastructure de cache externe.

### Pourquoi le repli mémoire du rate limiter ?
Upstash Redis fournit un rate limiting distribué en production ; en développement (ou si Redis n'est pas configuré), un limiteur en mémoire prend le relais pour ne pas bloquer le travail local.

### Pourquoi Dokploy sur VPS plutôt que serverless ?
Le mode `standalone` de Next.js produit un serveur Node conteneurisable. Dokploy apporte le confort d'un PaaS (build, TLS, variables d'environnement) tout en conservant la maîtrise et le coût d'un VPS auto-hébergé.

---

## Contributeur

- **Mathew Kristoffer Ewan KAPOOR** — [@Exowz](https://github.com/Exowz)

---

**Version** : 1.0
**Dernière mise à jour** : Juillet 2026
**Statut** : ✅ En ligne et opérationnel
