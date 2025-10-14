
import { PrismaClient } from "@/app/generated/prisma";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { admin } from "better-auth/plugins";

const prisma = new PrismaClient();


export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  plugins: [
        admin() 
    ],
  socialProviders: { 
    google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
    },
  }, 
  baseURL: process.env.BETTER_AUTH_URL, 
  secret: process.env.BETTER_AUTH_SECRET,
  session: {
    expiresIn: 604800, // 7 days
    updateAge: 86400, // 1 day
    disableSessionRefresh: false, // Allow session refresh (you had true, but false is usually better)
    storeSessionInDatabase: true,
    preserveSessionInDatabase: false,
    cookieCache: {
      enabled: true,
      maxAge: 300 // 5 minutes
    }
  },
});