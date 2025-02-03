"use client";

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { Session } from "next-auth";
import {signInAction, signOutAction} from "@/lib/actions/auth-actions";

const Navbar = ({ session }: { session: Session | null }) => {
    const pathname = usePathname();

    return (
        <header className={"py-3 px-3 border-b-2 border-b-violet-950 bg-black"}>
            <nav className="flex justify-between items-center">
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
                            <Link href={"/problems"}>
                            <span className={`ml-12 text-xl font-light ${
                                pathname === "/problems"
                                    ? "text-white underline"
                                    : "text-gray-400 hover:text-white"
                            }`}>Problems</span>
                            </Link>
                            <Link href={"/submit-problem"}>
                            <span className={`ml-6 text-xl ${
                                pathname === "/submit-problem"
                                    ? "text-white underline"
                                    : "text-gray-400 hover:text-white"
                            }`}>Submit Problem</span>
                            </Link>
                        </>
                    ) : (
                        <>
                            <button disabled className={"ml-12 text-xl text-gray-400 font-light"}>
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
                                className={"text-xl mr-3 ml-4 text-gray-300 border-2 border-gray-100/20 px-3 py-2 rounded-lg hover:text-white transition-colors hover:border-white"}
                            >
                                Logout
                            </button>
                            <Link href={`/user/${session.user.id}`}>
                                <span className={"text-xl text-white hover:text-gray-300"}>
                                    {session.user.name}
                                </span>
                            </Link>
                        </>
                    ) : (
                        <button
                            onClick={() => signInAction()}
                            className={"text-xl border-gray-700 mr-3 text-yellow-100 px-5 py-2 border-2 rounded-lg hover:text-black hover:bg-white transition duration-300 ease-in-out"}
                        >
                            Login
                        </button>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;