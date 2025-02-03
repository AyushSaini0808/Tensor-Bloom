import React from "react";
type EditorFooterProps = {
    handleSubmit: () => void;
};

const EditorFooter: React.FC<EditorFooterProps> = ({ handleSubmit }) => {
    return (
        <div className='flex bg-dark-layer-1 absolute bottom-0 z-10 w-full'>
            <div className='mx-5 my-[10px] flex justify-between w-full'>
                <div className='ml-auto flex items-center space-x-4'>
                    <button
                        className='px-3 border-2 font-bold border-black bg-white text-black py-1.5 text-sm font-jetbrains-mono items-center whitespace-nowrap transition-all focus:outline-none inline-flex bg-dark-fill-3  hover:bg-dark-fill-2 text-dark-label-2 rounded-lg'
                        onClick={handleSubmit}
                    >
                        Run
                    </button>
                    <button
                        className='text-white px-3 py-1.5 items-center transition-all focus:outline-none inline-flex text-sm font-jetbrains-mono font-bold bg-dark-green-s hover:bg-green-3 rounded-lg'
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};
export default EditorFooter;