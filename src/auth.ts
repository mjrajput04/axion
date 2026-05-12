import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import dbConnect from "@/lib/db";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        await dbConnect();
        const admin = await Admin.findOne({ email: credentials.email });

        if (!admin || !admin.password) return null;

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password as string,
          admin.password
        );

        if (!isPasswordCorrect) return null;

        return {
          id: admin._id.toString(),
          email: admin.email,
          name: admin.name,
          role: admin.role,
        };
      },
    }),
  ],
});
