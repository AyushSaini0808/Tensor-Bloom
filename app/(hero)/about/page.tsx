import React from 'react'

const About = () => {
    return (
        <div className={"h-screen w-screen gradient-bg"}>
            <div className={"flex text-center py-32 flex-col backdrop-blur"}>
                <h1 className={"text-8xl font-poppins font-bold text-center mx-10 text-white"}>Master Machine Learning <span
                    className={"block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-400"}>From Fundamentals to Advanced</span>
                </h1>
                <span
                    className={"text-3xl mt-10 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-orange-400"}>Solve tailored questions, strengthen your fundamentals, and advance your ML expertise step by step.</span>
            </div>
            <section className={"px-10 py-4 backdrop-blur"}>
                <div className={"grid grid-cols-4 gap-20 grid-rows-2"}>
                    <div className={"col-span-2"}>
                        <h2 className={"text-3xl font-semibold mb-2 text-white font-jetbrains-mono"}>About Tensor Bloom</h2>
                        <p className={"text-[#afb0b6] text-base font-generalsans"}>
                            Welcome to Tensor Bloom!

                            Your go-to platform for blossoming in the fields of Machine Learning (ML) and Artificial Intelligence (AI) through an engaging, challenge-driven approach.we believe that learning ML is not just about theory but about growing through challenges and hands-on practice, one tensor at a time.
                        </p>
                    </div>
                    <div className={"col-span-2"}>
                        <h2 className={"text-3xl font-semibold mb-2 text-white font-jetbrains-mono"}>Our Mission</h2>
                        <p className={"text-[#afb0b6] text-base font-generalsans"}>
                            At Tensor Bloom, we focus on hands-on problem-solving and continuous growth. Our mission is to provide an inclusive platform where learners and experts strengthen fundamentals, tackle real-world ML challenges, and foster innovation.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default About
