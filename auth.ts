import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import assert from "node:assert";

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [GitHub],
})
