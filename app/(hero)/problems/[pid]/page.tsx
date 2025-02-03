// app/(hero)/problems/[pid]/page.tsx

import React from 'react';
import Workspace from '@/app/components/workspace/Workspace';
import { problems } from '@/utils/problems';
import { Problem } from '@/utils/types/problem';
import { notFound } from 'next/navigation';

// This function replaces getStaticPaths in the App Router.
// It generates the list of params for which static pages should be generated.
export async function generateStaticParams() {
    return Object.keys(problems).map((pid) => ({
        pid,
    }));
}

// The page component is now a Server Component that receives `params` directly.
export default async function ProblemPage({
                                              params,
                                          }: {
    params: { pid: string };
}) {
    const { pid } = params;
    const problem: Problem | undefined = problems[pid];

    // If no problem is found, call notFound() to render the 404 page.
    if (!problem) {
        notFound();
    }

    // Convert the handlerFunction to a string for serialization/display purposes.
    problem.handlerFunction = problem.handlerFunction.toString();

    return (
        <div className="h-screen bg-black">
            <Workspace problem={problem} />
        </div>
    );
}
