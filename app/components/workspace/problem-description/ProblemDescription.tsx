"use client";
import React from 'react'
import {Problem} from "@/utils/types/problem";
type ProblemDescriptionProps = {problem:Problem}

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({problem}) => {

    return (
        <div className="h-screen text-white overflow-hidden min-w-0 relative px-4 border-2 border-white/50 rounded-lg">
            {/* Banner Section */}
            <div className="flex flex-row mt-4 mb-2 mx-auto max-w-4xl">
                <div className="inline-flex px-4 py-2 items-center rounded-lg
                       bg-white/15 backdrop-blur-sm border-b
                       cursor-pointer border-white/20 transition-colors
                       hover:bg-white/20">
                    <h2 className="text-sm font-semibold tracking-tight">
                        Description
                    </h2>
                </div>
            </div>

            {/* Content Section */}
            <div className="mx-auto max-w-4xl bg-white/15 rounded-lg p-6 shadow-inner
                          transition-all duration-200 space-y-4 h-[90vh]">
                <h2 className="text-2xl font-bold text-white tracking-tight border-b
                             border-white/20 pb-3">
                    {problem.title}
                </h2>

                <div className="space-y-4 font-jetbrains-mono">
                    <p className="text-base text-white/80 leading-relaxed">
                        {problem.problemDescription}
                    </p>

                    <div className="text-sm text-white/60 bg-white/10 p-3 rounded-lg">
                        <span className="font-semibold">Note:</span>{problem.note}
                    </div>
                    <h2 className={"text-lg"}>Example</h2>
                    <div className={'flex flex-col'}>
                        <p>
                            Input:
                        </p>
                        <div className={"border-2 border-white/20 rounded-lg p-4 mt-2"}>{problem.input}]</div>
                    </div>
                    <div className={'flex flex-col'}>
                        <p>
                            Output:
                        </p>
                        <div className={"border-2 border-white/20 rounded-lg p-4 mt-2"}>{problem.output}</div>
                    </div>
                    <div className={'flex flex-col'}>
                        <p>
                            Reasoning:
                        </p>
                        <div className={"p-4 border-b border-white/20 "}>{problem.reasoning}</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProblemDescription