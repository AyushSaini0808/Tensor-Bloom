import React from 'react'
import {auth} from "@/auth";
import TableDemo from "@/app/components/Table";
import Image from "next/image";

const Main = async() => {
    const session = await auth()
    return (
        <div className={"h-screen bg-black text-white"}>
            <div className="flex items-center gap-5">
                {session && session?.user ? (
                    <>
                        <div className="mx-20 my-20 w-full border-2 border-gray-700 rounded-lg px-4 py-6">
                            <div className="flex flex-row items-center gap-2 mb-4">
                                <Image
                                    src={"/book-open.png"}
                                    alt={"book"}
                                    width={40}
                                    height={40}
                                    className="w-8 h-8 mr-2"
                                />
                                <h1 className="text-4xl font-bold">Problem Explorer</h1>
                            </div>
                            <TableDemo/>
                        </div>
                    </>
                ) :(
                    <div className={"h-screen w-screen"}>
                        <div className={"bg-white flex place-self-center"}>Hello there</div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Main
