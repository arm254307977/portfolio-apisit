# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Response language

- Always respond to the user in Thai.
- Use Thai for explanations, summaries, plans, and coding guidance.
- Keep code, file names, commands, variable names, error messages, and API names in their original language.
- If the user writes in English, still answer in Thai unless they explicitly ask for English.

## Commands

```bash
npm run dev        # Vite dev server on http://localhost:5173
npm run build      # tsc -b (typecheck) + vite build
npm run lint       # ESLint
npm run preview    # Preview built output
```

## Project structure

React 19 + TypeScript + Vite + Tailwind CSS + Framer Motion portfolio site.

- `src/components/` — page sections: Hero, Navbar, About, Skills, Services, Projects, Contact, Footer
- `src/i18n/` — EN/TH language context (`LanguageContext.tsx`) and translation files (`en.ts`, `th.ts`)
- `src/data/projects.ts` — static project list

No path aliases configured; use relative imports from `src/`.

## i18n

User-facing copy lives in `src/i18n/en.ts` and `src/i18n/th.ts`. Always add or change the **same key in both** files.

## Agent skills

Use `/caveman` to activate ultra-compressed response mode (~75% fewer tokens, full technical accuracy kept).
