# Frady's Flooring Service Website

Custom, production-focused marketing site built with Next.js App Router, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ESLint

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm run start
```

## Project Structure

- `src/app` - route pages and API route
- `src/components` - reusable UI components
- `src/lib/site-data.ts` - centralized business copy/content

## Quote Form Note

The contact form posts to `/api/quote-request` and currently logs submissions server-side as a placeholder until email/CRM integration is connected.
