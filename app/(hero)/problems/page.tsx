import React from 'react'
import {signIn,signOut,auth} from "@/auth";
import Link from "next/link";
import TableDemo from "@/app/components/Table";
import Image from "next/image";

const Main = async() => {
    const session = await auth()
    return (
        <div className={"h-screen bg-black text-white"}>
            <div className="flex items-center gap-5">
                {session && session?.user ? (
                    <>
                        <div className="mx-20 my-20 max-w-[50vw] w-full border-2 border-gray-700 rounded-lg px-4 py-6">
                            <div className="flex flex-row items-center gap-2 mb-4">
                                <Image
                                    src={"/book-open.png"}
                                    alt={"book"}
                                    width={30}
                                    height={30}
                                    className="w-8 h-8 mr-2"
                                />
                                <h1 className="text-3xl font-bold">Problem Explorer</h1>
                            </div>
                            <TableDemo/>
                        </div>
                    </>
                ) :(
                    <div className={"blur-sm h-screen w-screen"}>
                        <p className={"text-white text-2xl"}>hello</p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Main
