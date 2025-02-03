"use client"; // Add this directive at the top

import React from 'react';
import dynamic from 'next/dynamic';
import ProblemDescription from "@/app/components/workspace/problem-description/ProblemDescription";
import Playground from "@/app/components/workspace/playground/Playground";
import {Problem} from "@/utils/types/problem";

// Dynamically import Split with SSR disabled
const Split = dynamic(
    () => import('react-split'),
    {
        ssr: false,
        loading: () => <div>Loading editor...</div>
    }
);

type WorkspaceProps = {
    problem:Problem
};

const Workspace: React.FC<WorkspaceProps> = ({problem}) => {
    return (
        <>
            <Split className="split" minSize={250} gutterSize={6}>
            <ProblemDescription problem={problem}/>
            <Playground problem={problem}/>
        </Split>
        </>
    )
}

export default Workspace;