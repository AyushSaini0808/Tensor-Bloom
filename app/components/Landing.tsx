import React from 'react'
import Image from "next/image";
import Link from "next/link"
import { ArrowRight } from 'lucide-react';

const Landing = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 gradient-bg-landing">
            <div className="flex flex-col items-center text-center backdrop-blur px-4 py-8">
                <Image
                    src={"/tensor-bloom.png"}
                    alt={"logo"}
                    width={200}
                    height={200}
                    className="w-32 sm:w-40 md:w-48 lg:w-52 xl:w-56 animate-spin-slow"
                />
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-b from-white to-[#0A74FF] text-transparent bg-clip-text">
                    Tensor Bloom
                </h1>
                <p className="mt-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
                    Grow your Machine Learning skills,
                    <span className="text-green-300"> Tensor </span>
                    by <span className="text-green-300"> Tensor</span>
                </p>
                <Link href={"/about"}>
                    <button className="text-lg sm:text-xl md:text-2xl flex flex-row items-center text-white border-2 bg-black border-gray-700 px-4 sm:px-6 py-3 sm:py-4 mt-6 rounded-xl hover:border-white transition duration-300 ease-in-out">
                        Get Started&nbsp;
                        <ArrowRight />
                    </button>
                </Link>
            </div>
        </div>


    )
}
export default Landing
