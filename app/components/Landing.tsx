import React from 'react'
import Image from "next/image";
import Link from "next/link"
import { ArrowRight } from 'lucide-react';

const Landing = () => {
    return (
        <div className="min-h-screen flex items-center justify-center gradient-bg-landing">
            <div className="flex flex-col items-center backdrop-blur">
                    <Image src={"/tensor-bloom.png"} alt={"logo"} width={200} height={200} style={{animation:"rotateBackground 10s linear infinite",transformOrigin:"center"}} />
                    <h1 className={'text-9xl font-bold block bg-gradient-to-b from-white to-[#0A74FF] text-transparent bg-clip-text'}>Tensor Bloom</h1>
                    <p className={"mt-5 text-4xl text-white"}>Grow your Machine Learning skills, <span className={"text-green-300"}>Tensor</span> by <span className={"text-green-300"}>Tensor</span></p>
                    <Link href={"/about"}>
                        <button className={"text-2xl flex flex-row text-white border-2 items-center bg-black border-gray-700 px-6 py-4 mt-8 rounded-2xl hover:border-white transition duration-300 ease-in-out"}>
                            Get Started&nbsp;
                            <ArrowRight/>
                        </button>
                    </Link>
            </div>
        </div>

    )
}
export default Landing
