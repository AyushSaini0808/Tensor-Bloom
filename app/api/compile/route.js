import axios from "axios";

export async function POST(request) {
    try {
        const body = await request.json();
        const { code, language, input } = body;

        const languageMap = {
            c: { language: "c", version: "10.2.0" },
            cpp: { language: "c++", version: "10.2.0" },
            python: { language: "python", version: "3.10.0" },
            java: { language: "java", version: "15.0.2" },
        };

        if (!languageMap[language]) {
            return new Response(JSON.stringify({ error: "Unsupported language" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const data = {
            language: languageMap[language].language,
            version: languageMap[language].version,
            files: [{ name: "main", content: code }],
            stdin: input,
        };

        const response = await axios.post("https://emkc.org/api/v2/piston/execute", data, {
            headers: { "Content-Type": "application/json" },
        });

        return new Response(JSON.stringify(response.data.run), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Something went wrong" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
