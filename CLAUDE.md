# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LyonJS community website built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS. Content is primarily in French. Hosted on Vercel.

## Commands

```bash
pnpm dev          # Dev server with Turbopack (port 3000)
pnpm build        # Production build (outputs to dist/)
pnpm lint         # Lint with oxlint
pnpm fmt          # Format with oxfmt
pnpm fmt:check    # Check formatting without modifying
pnpm e2e          # Run Playwright e2e tests (chromium only)
```

Pre-commit hook runs `oxfmt --write .` automatically via Husky.

## Architecture

### Data Flow

Event data comes from the **Meetup.com GraphQL API** (`modules/meetup/api.ts`, group ID `18305583`). GraphQL queries live in `modules/meetup/queries/`. Event data is then enhanced with `data/data-override.ts`, which maps Meetup event URLs to additional metadata: sponsors, talk details, speaker info, and video links.

### Key Directories

- **`app/`** - Next.js App Router pages and layouts. Uses async server components by default; client components marked with `'use client'`.
- **`modules/`** - Feature-specific component bundles (atoms, header, footer, event, meetup, sponsors, etc.). `modules/event/types.ts` defines core types (Event, Speaker, Talk, Sponsor).
- **`data/`** - Static TypeScript data files: sponsors, organizers, schedule, partners, budget, and the `data-override.ts` event enrichment map.
- **`e2e/`** - Playwright end-to-end tests.

### Adding Event Data

To add talk details, video links, or sponsors for a past event, add an entry in `data/data-override.ts` keyed by the Meetup event URL. Import sponsors from `data/sponsors.ts`.

### Middleware

`middleware.ts` sets Content Security Policy and security headers. CSP uses nonce-based inline script security and whitelists specific external origins.

## Code Style

- Formatter (oxfmt): single quotes, 120 char width, trailing commas
- Linter: oxlint with React, TypeScript, and unicorn plugins
- Dates use `temporal-polyfill` (`Temporal` API) with `Intl.DateTimeFormat('fr-FR')` for French formatting (see `modules/event/dateUtils.ts`)
- Commits follow [Conventional Commits](https://www.conventionalcommits.org/) (e.g. `fix:`, `feat:`, `chore:`)
