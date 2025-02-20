"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { Session } from "next-auth";
import { signOutAction } from "@/lib/actions/auth-actions";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = ({ session }: { session: Session | null }) => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="py-3 px-5 border-b-2 border-b-violet-950 bg-black">
            <nav className="flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={160}
                            height={80}
                            priority
                            className="w-24 sm:w-32 md:w-40"
                        />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Navigation Links */}
                <div
                    className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-black md:bg-transparent p-5 md:p-0 md:flex gap-6 items-center transition-all duration-300 ease-in-out ${
                        menuOpen ? "block" : "hidden"
                    }`}
                >
                    {session?.user ? (
                        <>
                            <NavItem href="/about" pathname={pathname}>
                                About
                            </NavItem>
                            <NavItem href="/problems" pathname={pathname}>
                                Problems
                            </NavItem>
                            <NavItem href="/submit-problem" pathname={pathname}>
                                Submit Problem
                            </NavItem>
                        </>
                    ) : (
                        <>
                            <NavItem href="/about" pathname={pathname}>
                                About
                            </NavItem>
                            <button disabled className="text-lg text-gray-500 px-4 py-2">
                                Problems
                            </button>
                            <button disabled className="text-lg text-gray-500 px-4 py-2">
                                Submit Problem
                            </button>
                        </>
                    )}
                </div>

                {/* Right Side - Logout & Profile */}
                <div className="hidden md:flex items-center gap-5">
                    {session?.user ? (
                        <>
                            <button
                                onClick={() => signOutAction()}
                                className="text-lg text-gray-300 border-2 border-gray-100/20 px-4 py-2 rounded-lg hover:text-white hover:border-white transition"
                            >
                                Logout
                            </button>
                            <Link href={`/user/${session.user.id}`}>
                                <span className="text-lg text-white hover:text-gray-300">
                                    {session.user.name}
                                </span>
                            </Link>
                        </>
                    ) : null}
                </div>
            </nav>
        </header>
    );
};

// **Reusable Nav Item Component**
const NavItem = ({
                     href,
                     pathname,
                     children,
                 }: {
    href: string;
    pathname: string;
    children: React.ReactNode;
}) => {
    return (
        <Link href={href}>
            <span
                className={`text-lg px-4 py-2 rounded-lg ${
                    pathname === href
                        ? "text-white bg-zinc-600/30"
                        : "text-gray-400 hover:text-white"
                }`}
            >
                {children}
            </span>
        </Link>
    );
};

export default Navbar;
