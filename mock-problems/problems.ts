// This is being explicitly used for the contents of the table in the main page
//dont remove
export type Problem = {
    id: string;
    number:string;
    title: string;
    difficulty: 'easy'|"medium"|"hard";
    category: string;
    status: string;
};

export const problems: Problem[] = [
    {
        id: "matrix-times-vector",
        number:"1",
        title: "Matrix Times Vector",
        difficulty: "easy",
        category: "Linear Algebra",
        status: "Unsolved"
    },
    {
        id: "transpose-of-a-matrix",
        number:"2",
        title: "Transpose of a Matrix",
        difficulty: "easy",
        category: "Linear Algebra",
        status: "Unsolved"
    },
    {
        id: "feature-scaling",
        number:"3",
        title: "Feature Scaling",
        difficulty: "easy",
        category: "Machine Learning",
        status: "Unsolved"
    },
    {
        id: "k-means-clustering",
        number:"4",
        title: "K-Means Clustering",
        difficulty: "medium",
        category: "Machine Learning",
        status: "Unsolved"
    },
    {
        id:"single-neuron",
        number: "5",
        title: "Single Neuron",
        difficulty: "easy",
        category: "Deep Learning",
        status: "Unsolved"
    },
    {
        id:"simple-convolution-2D-layer",
        number: "6",
        title: "Simple Convolution 2D Layer",
        difficulty: "medium",
        category: "Deep Learning",
        status: "Unsolved"
    }
];