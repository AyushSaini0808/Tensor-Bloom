"use client";
import React, { useState, useEffect } from "react";
import { signInAction } from "@/lib/actions/auth-actions";

const About = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check authentication status on component mount
    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem("authToken"); // Replace with your token key
            if (token) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        };

        checkAuth();
    }, []);

    // Handle GitHub OAuth login
    const handleLogin = async () => {
        await signInAction(); // This should redirect the user to GitHub OAuth
        // After the redirect, your backend should handle the OAuth flow and set a token
    };

    return (
        <div className={"h-screen w-screen gradient-bg"}>
            <div className={"flex text-center pt-32 flex-col backdrop-blur"}>
                <h1 className={"text-8xl font-poppins font-bold text-center mx-10 text-white"}>
                    Master Machine Learning{" "}
                    <span className={"block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-400"}>
                        From Fundamentals to Advanced
                    </span>
                </h1>
                <span className={"text-3xl mt-10 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-orange-400"}>
                    Solve tailored questions, strengthen your fundamentals, and advance your ML expertise step by step.
                </span>

                {/* Conditionally render the Login button */}
                {!isAuthenticated && (
                    <button
                        onClick={handleLogin}
                        className={"text-2xl bg-gray-950 border-gray-700 mr-3 w-[20%] my-20 place-self-center text-slate-200 font-bold px-5 py-2 border-2 rounded-lg border-blue-500hover:text-black font-jetbrains-mono hover:bg-white/80 hover:text-black transition duration-300 ease-in-out"}
                    >
                        Login with GitHub
                    </button>
                )}
            </div>
            <section className={"px-10 py-5 backdrop-blur"}>
                <div className={"grid grid-cols-4 gap-20 grid-rows-2"}>
                    <div className={"col-span-2"}>
                        <h2 className={"text-3xl font-semibold mb-2 text-white font-jetbrains-mono"}>About Tensor Bloom</h2>
                        <p className={"text-[#afb0b6] text-base font-generalsans"}>
                            Welcome to Tensor Bloom! Your go-to platform for blossoming in the fields of Machine Learning (ML) and Artificial Intelligence (AI) through an engaging, challenge-driven approach. We believe that learning ML is not just about theory but about growing through challenges and hands-on practice, one tensor at a time.
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
    );
};

export default About;