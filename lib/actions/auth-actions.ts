"use server";

import { signIn, signOut } from "@/auth";

export async function signInAction() {
    await signIn("github",{ redirectTo: "/problems" });
}

export async function signOutAction() {
    await signOut({ redirectTo: "/" });
}