// app/navbar-wrapper.tsx
import { auth } from "@/auth";
import Navbar from "./Navbar";

export default async function NavbarWrapper() {
    const session = await auth();
    return <Navbar session={session} />;
}