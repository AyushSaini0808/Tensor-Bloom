// app/navbar-wrapper.tsx
import { auth } from "@/auth";
import About from "@/app/(hero)/about/page";

export default async function AboutWrapper() {
    const session = await auth();
    return <About session={session} />;
}