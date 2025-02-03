import assert from "node:assert";
import {Problem} from "@/utils/types/problem";

const handleTransposeOfMatrix=(fn:any)=>{
    try {
        const a = [[1,2,3],[4,5,6]]
        const answer = [[1,4],[2,5],[3,6]]

        for(let i=0;i<a.length;i++){
            const result=fn(a[i]);
            assert.deepStrictEqual(result,answer[i])
        }
        return true;
    }catch(error:any){
        console.log("Transpose of a Matrix handler function error");
        throw new Error(error)
    }
}
export const transposeOfVector:Problem={
    category: "Linear Algebra",
    difficulty: "easy",
    id: "transpose-of-a-matrix",
    input: "a = [[1,2,3],[4,5,6]]",
    output: "[[1,4],[2,5],[3,6]]",
    note:"Ensure your implementation handles both dense and sparse matrices efficiently.",
    problemDescription: "Write a Python function that computes the transpose of a given matrix.",
    reasoning: "The transpose of a matrix is obtained by flipping rows and columns.",
    starterFunction: "def transpose_matrix(a: list[list[int|float]]) -> list[list[int|float]]:\n\n\treturn b",
    title:"2. Transpose of a Matrix",
    handlerFunction:handleTransposeOfMatrix
}