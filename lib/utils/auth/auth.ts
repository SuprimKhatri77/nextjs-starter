import { db } from "@/lib/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_BETTER_AUTH_URL
      : "http://localhost:3000",
  emailAndPassword: {
    enabled: true,
  },
  plugins: [nextCookies()],
});
