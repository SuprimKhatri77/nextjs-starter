# Next.js Starter

A modern starter template built with Next.js 15, React 19, and TypeScript.  
It comes preconfigured with authentication, database ORM, payment integration, uploads, and styling utilities.

---

## 🚀 Tech Stack

### ✅ Core

- Next.js 15 (App Router, Turbopack)
- React 19
- TypeScript

### ✅ Styling & UI

- Tailwind CSS 4
- lucide-react
- class-variance-authority
- clsx
- tailwind-merge

### ✅ Database & ORM

- Drizzle ORM
- drizzle-kit
- Neon serverless PostgreSQL driver

### ✅ Authentication

- better-auth

### ✅ Payments

- @stripe/stripe-js
- @stripe/react-stripe-js

### ✅ File Uploads

- uploadthing
- @uploadthing/react

### ✅ Validation

- zod

### ✅ Utilities

- dotenv
- @radix-ui/react-slot

---

## 📦 Scripts

```json
"dev": "next dev --turbopack",
"build": "next build --turbopack",
"start": "next start",
"lint": "eslint",
"db:push": "drizzle-kit push",
"db:generate": "drizzle-kit generate",
"db:studio": "drizzle-kit studio",
"db:migrate": "tsx ./lib/db/migrate.ts"

✅ Run them like:

bun run dev
bun run build
bun run start
bun run lint
bun run db:push
bun run db:generate
bun run db:studio
bun run db:migrate

⚙️ Environment Variables

Create your .env file from the example:

cp .env.example .env

📁 Suggested Folder Structure

app/              # App Router pages & layouts
components/       # Reusable components
lib/              # Helpers, config, auth, db, etc.
 └─ db/           # Drizzle config, schema, migrations
drizzle/          # Migration SQL files
public/           # Static files

▶️ Getting Started

bun install
cp .env.example .env
bun run dev

Then open:
http://localhost:3000
```
