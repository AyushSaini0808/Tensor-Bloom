"use client";
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { Session } from "next-auth";
import {signOutAction} from "@/lib/actions/auth-actions";

const Navbar = ({ session }: { session: Session | null }) => {
    const pathname = usePathname();
    const linkStyles = `ml-6 text-xl hover:bg-zinc-600/30 rounded-lg p-3 transition-colors duration-300 ease-in-out`; // Common styles

    return (
        <header className={"py-3 px-3 border-b-2 border-b-violet-950"}>
            <nav className="flex justify-between items-center ">
                <div className={"flex items-center"}>
                    <Link href="/">
                        <Image
                            src={"/logo.png"}
                            alt={"logo"}
                            width={200}
                            height={100}
                            priority
                        />
                    </Link>
                    {session?.user ? (
                        <>
                            <Link href={"/about"}>
                            <span className={`${linkStyles} ${
                                pathname === "/about"
                                    ? "text-white bg-zinc-600/30 rounded-lg p-3"
                                    : "text-gray-400 hover:text-white"
                            }`}>About</span>
                            </Link>
                            <Link href={"/problems"}>
                            <span className={`${linkStyles} font-light ${
                                pathname === "/problems"
                                    ? "text-white bg-zinc-600/30 rounded-lg p-3"
                                    : "text-gray-400 hover:text-white"
                            }`}>Problems</span>
                            </Link>
                            <Link href={"/submit-problem"}>
                            <span className={`${linkStyles} ${
                                pathname === "/submit-problem"
                                    ? "text-white bg-zinc-600/30 rounded-lg p-3"
                                    : "text-gray-400 hover:text-white"
                            }`}>Submit Problem</span>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href={"/about"}>
                            <span className={`ml-10 text-xl ${
                                pathname === "/about"
                                    ? "text-white"
                                    : "text-gray-400 hover:text-white"
                            }`}>About</span>
                            </Link>
                            <button disabled className={"ml-6 text-xl text-gray-400 font-light"}>
                                Problems
                            </button>
                            <button disabled className={"ml-6 text-gray-400 text-xl content-center"}>
                                Submit Problem
                            </button>
                        </>
                    )}
                </div>
                <div className="flex items-center gap-5">
                    {session?.user ? (
                        <>
                            <button
                                onClick={() => signOutAction()}
                                className={"text-xl mr-3 ml-4 text-gray-300 border-2 font-jetbrains-mono border-gray-100/20 px-3 py-2 rounded-lg hover:text-white transition-colors hover:border-white"}
                            >
                                Logout
                            </button>
                            <Link href={`/user/${session.user.id}`}>
                                <span className={"text-xl text-white hover:text-gray-300"}>
                                    {session.user.name}
                                </span>
                            </Link>
                        </>
                    ) : null}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;