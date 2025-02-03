export type Problem={
    category:string
    difficulty:string
    id:string
    input:string
    output:string
    note?:string
    problemDescription:string
    reasoning:string
    starterFunction:string
    title:string
    handlerFunction:((fn: any) => boolean) | string;
}