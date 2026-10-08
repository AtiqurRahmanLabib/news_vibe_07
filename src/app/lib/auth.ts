// src/app/lib/auth.ts
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const uri = process.env.MONGODB_URL;

if (!uri) {
  throw new Error("MONGODB_URL is not defined in environment variables");
}

const client = new MongoClient(uri);
const db = client.db("News-Vibe-07");

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL, // <-- নতুন
  trustedOrigins: [
    // <-- নতুন
    "http://localhost:3000",
    "https://YOUR-APP.vercel.app",
    "https://newsvibe07-git-main-atiqurrahmanlabibs-projects.vercel.app",
  ],
  emailAndPassword: { enabled: true },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"],
      disableImplicitLinking: false,
    },
  },
  database: mongodbAdapter(db, { client }),
});
