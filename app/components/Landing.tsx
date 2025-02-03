import React from 'react'
import Image from "next/image";
import Link from "next/link"

const Landing = () => {
    return (
        <section className={"h-screen flex flex-col justify-center place-items-center"} style={{
            backgroundColor: "#000000",
            opacity: 1,
            backgroundImage: `
            radial-gradient(#abaedd 2px, transparent 2px), 
            radial-gradient(#abaedd 2px, #000000 2px)`,
            backgroundSize: "80px 80px",
            backgroundPosition: "0 0, 40px 40px",
            animation: "moveBackground 5s linear infinite"
        }}>
            <Image src={"/tensor-bloom.png"} alt={"logo"} width={200} height={200} style={{animation:"rotateBackground 10s linear infinite",transformOrigin:"center"}}/>
            <h1 className={'text-9xl font-bold block bg-gradient-to-b from-white to-[#0A74FF] text-transparent bg-clip-text'}>Tensor Bloom</h1>
            <p className={"mt-5 text-4xl text-white"}>Grow your Machine Learning skills, <span className={"text-green-300"}>Tensor</span> by <span className={"text-green-300"}>Tensor</span></p>
            <Link href={"/problems"}>
                <button className={"text-2xl text-white border-2 bg-black border-gray-700 px-6 py-4 mt-8 rounded-2xl hover:border-white transition duration-300 ease-in-out"}>Get Started</button>
            </Link>
        </section>
    )
}
export default Landing
