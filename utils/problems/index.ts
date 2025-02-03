import {matrixProductVector} from "@/utils/problems/matrix-product-vector";
import {transposeOfVector} from "@/utils/problems/transpose-of-a-matrix";
import {Problem} from "@/utils/types/problem";

interface ProblemMap{
    [key:string]:Problem
}

export const problems:ProblemMap={
    "matrix-times-vector":matrixProductVector,
    "transpose-of-a-matrix":transposeOfVector,
}
