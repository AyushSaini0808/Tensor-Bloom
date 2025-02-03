"use client";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { problems } from "@/mock-problems/problems";
import {Problem} from "@/mock-problems/problems";


const TableDemo = () => {
    const router = useRouter();

    const handleRowClick = (id: number) => {
        router.push(`/problems/${id}`);
    };

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty.toLowerCase()) {
            case 'easy': return 'text-green-500';
            case 'medium': return 'text-yellow-500';
            case 'hard': return 'text-red-500';
            default: return 'text-gray-400';
        }
    };


    return (
        <>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px] text-2xl">Id</TableHead>
                    <TableHead className="text-2xl">Title</TableHead>
                    <TableHead className="text-2xl">Difficulty</TableHead>
                    <TableHead className="text-2xl text-right">Category</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {problems.map((problem: Problem) => (
                    <TableRow
                        key={problem.id}
                        className="cursor-pointer transition-colors"
                        onClick={() => handleRowClick(problem.id)}
                    >
                        <TableCell className="font-medium text-xl">
                            {problem.number}
                        </TableCell>
                        <TableCell className="text-xl font-semibold">
                            {problem.title}
                        </TableCell>
                        <TableCell className={`text-xl ${getDifficultyColor(problem.difficulty)}`}>
                            {problem.difficulty}
                        </TableCell>
                        <TableCell className="text-xl text-right">
                            {problem.category}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </>
    );
};

export default TableDemo;