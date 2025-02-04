import { notFound } from 'next/navigation';
import Workspace from '@/app/components/workspace/Workspace';
import { problems } from '@/utils/problems';
import { Problem } from '@/utils/types/problem';

export async function generateStaticParams() {
    return Object.keys(problems).map((pid) => ({
        pid,
    }));
}

interface ProblemPageProps {
    params: Promise<{ pid: string }>;
}

export default async function ProblemPage({ params }: ProblemPageProps) {
    // Await the params to resolve
    const { pid } = await params;

    const problem: Problem | undefined = problems[pid];

    if (!problem) {
        notFound();
    }

    problem.handlerFunction = problem.handlerFunction.toString();

    return (
        <div className="h-screen bg-black">
            <Workspace problem={problem} />
        </div>
    );
}
