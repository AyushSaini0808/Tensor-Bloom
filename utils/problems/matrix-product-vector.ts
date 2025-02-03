import assert from "node:assert";
import {Problem} from "@/utils/types/problem";


const handlerMatrixProductVector=(fn:any)=>{
    try {
        const a = [[[1, 2], [2, 4]], [[3, 1, 4], [1, 5, 9]]]
        const b = [[1, 2], [2, 3, 4]]
        const answer = [[5, 10], [19, 31]]

        for(let i=0;i<a.length;i++){
            const result=fn(a[i],b[i]);
            assert.deepStrictEqual(result,answer[i])
        }
        return true;
    }catch(error:any){
        console.log("Matrix Product Vector handler function error");
        throw new Error(error)
    }
}

export const matrixProductVector:Problem={
    category:"Linear Algebra",
    difficulty:"easy",
    id:"matrix-times-vector",
    input:"a = [[1,2],[2,4]], b = [1,2]",
    output:"[5, 10]",
    note:"Ensure your implementation handles both dense and sparse matrices efficiently.",
    problemDescription:"Write a Python function that calculates the dot product of a matrix and vector. Return -1 if the dimensions are incompatible for matrix multiplication.",
    reasoning:"1*1 + 2*2 = 5; 1*2+ 2*4 = 10",
    starterFunction:"def matrix_dot_vector(a:list[list[int|float]],b:list[int|float])-> list[int|float]:\n\n\treturn c",
    title:"1. Matrix Product Vector",
    handlerFunction:handlerMatrixProductVector
}