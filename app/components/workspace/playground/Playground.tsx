import React, { useRef, useState } from 'react';
import { Editor } from "@monaco-editor/react";
import { FaCaretRight } from "react-icons/fa";
import { RiLoopLeftFill } from "react-icons/ri";
import { Problem } from "@/utils/types/problem";
import type * as monaco from 'monaco-editor';
type PlaygroundProps={
    problem:Problem
}

const Playground: React.FC<PlaygroundProps> = ({problem}) => {
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
    const [fontSize, setFontSize] = useState(14); // Default font size
    const onMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
        editorRef.current = editor;
        editor.focus();
    };
    return (
        <>

        <div className="text-white p-4 border-2 rounded-lg border-white/50">
            {/* Control Bar */}
            <div className="flex justify-between gap-4 mb-2">
                <div className=" text-sm inline-flex px-4 py-2 items-center rounded-lg
                       bg-white/15 backdrop-blur-sm border-b
                       cursor-pointer border-white/20 transition-colors
                       hover:bg-white/20">
                    <span className={"text-green-500 font-bold antialiased"}>&lt;/&gt; </span>
                    <div className={"font-bold font-jetbrains-mono"}>&nbsp;Code</div>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-1">
                    <button
                        onClick={() => setFontSize(Math.max(10, fontSize - 1))}
                        className="text-white/80 hover:text-white disabled:text-white/30"
                        disabled={fontSize <= 10}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                    </button>

                    <span className="text-sm font-jetbrains-mono">{fontSize}px</span>

                    <button
                        onClick={() => setFontSize(Math.min(24, fontSize + 1))}
                        className="text-white/80 hover:text-white disabled:text-white/30"
                        disabled={fontSize >= 24}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                </div>
            </div>

            <Editor
                height="50vh"
                theme="vs-dark"
                language="python"
                value={problem.starterFunction}
                onMount={onMount}
                className="border-2 rounded-sm border-white/30"
                options={{
                    minimap: { enabled: false },
                    automaticLayout: true,
                    fontSize: fontSize, // Connect font size to state
                    lineNumbersMinChars: 3,
                    scrollBeyondLastLine: false,
                }}
            />
            <div className='mt-2 flex items-center space-x-4'>
                <button
                    className='px-3 border-2 font-bold text-centerborder-black bg-white text-black py-1.5 text-sm font-jetbrains-mono items-center whitespace-nowrap transition-all focus:outline-none inline-flex bg-dark-fill-3  hover:bg-dark-fill-2 text-dark-label-2 rounded-lg'
                >
                    <FaCaretRight className={"text-xl"}/>
                    Run Code
                </button>
                <button
                    className='text-white/80 border-2 border-white/20 px-3 py-1.5 items-center transition-all focus:outline-none inline-flex text-sm font-jetbrains-mono font-bold bg-dark-green-s hover:bg-green-3 rounded-lg hover:border-white hover:text-white'
                >
                    <RiLoopLeftFill className={"text-base"}/>
                    &nbsp;Reset
                </button>
            </div>
        </div>
        </>
    );
};

export default Playground;