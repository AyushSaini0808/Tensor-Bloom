// Server-side actions for user authentication
'use server';
//
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "@firebase/firestore";
// import {auth, firestore} from "@/app/firebase/firebase";

interface SignUpParams {
    email: string;
    password: string;
    username?: string;
}

export const signIn = async ({ email, password }: { email: string; password: string }) => {
    try {

    } catch (error) {
        console.error("Error signing in:", error);
    }
};

export const signUp = async (userData: SignUpParams) => {
    try {

    } catch (error) {
        console.error("Error signing up:", error);
    }
};
