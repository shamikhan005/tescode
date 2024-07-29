export type Example = {
  id: number;
  inputText: string;
  outputText: string;
  explanation?: string;
  img?: string;
}

/* local problem data */

export type Problem = {
  id: string;
  title: string;
  problemStatement: string;
  examples: Example[];
  constraints: string;
  order: number;
  starterCode: string;
  handlerFunction: (fn: any) => boolean;
  starterFunctionName: string;
}

/* db problem data */

export type DBProblem = {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  likes: number;
  dislikes: number;
  order: number;
}

