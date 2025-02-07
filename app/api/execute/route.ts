import { NextResponse } from "next/server";

const JUDGE0_API = process.env.JUDGE0_API!;
const RAPID_API_KEY = process.env.RAPID_API_KEY!;
const RAPID_API_HOST = process.env.RAPID_API_HOST!;

async function submitCode(sourceCode: string) {
    const response = await fetch(
        `${JUDGE0_API}/submissions?base64_encoded=false`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-RapidAPI-Key": RAPID_API_KEY,
                "X-RapidAPI-Host": RAPID_API_HOST,
            },
            body: JSON.stringify({
                source_code: sourceCode,
                language_id: 71,
                stdin: "",
            }),
        }
    );

    if (!response.ok) {
        throw new Error(`Submission failed: ${response.status}`);
    }

    const data = await response.json();
    return data.token;
}

async function getResult(token: string) {
    const response = await fetch(
        `${JUDGE0_API}/submissions/${token}?base64_encoded=false`,
        {
            headers: {
                "X-RapidAPI-Key": RAPID_API_KEY,
                "X-RapidAPI-Host": RAPID_API_HOST,
            },
        }
    );

    if (!response.ok) {
        throw new Error(`Failed to fetch result: ${response.status}`);
    }

    return await response.json();
}

export async function POST(request: Request) {
    try {
        const { source_code } = await request.json();
        const token = await submitCode(source_code);

        let result;
        let retries = 0;
        const maxRetries = 5;
        const delay = 1000;

        do {
            await new Promise((resolve) => setTimeout(resolve, delay));
            result = await getResult(token);
            retries++;
        } while (
            retries < maxRetries &&
            result.status &&
            (result.status.id === 1 || result.status.id === 2)
            );

        return NextResponse.json(result);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error: error instanceof Error ? error.message : "Error executing code",
            },
            { status: 500 }
        );
    }
}

