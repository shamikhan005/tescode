export type Problem = {
  id: string;
  title: string;
  difficulty: string;
  category: string;
  order: number;
}

export const problems: Problem[] = [
  {
    id: "two-sum",
    title: "two sum",
    difficulty: "easy",
    category: "array",
    order: 1
  },
  {
    id: "reverse-linked-list",
    title: "reverse linked list",
    difficulty: "hard",
    category: "linked list",
    order: 2
  },
  {
    id: "jump-game",
    title: "jump game",
    difficulty: "medium",
    category: "dynamic programming",
    order: 3
  },
  {
    id: "valid-parentheses",
    title: "valid parentheses",
    difficulty: "easy",
    category: "stack",
    order: 4
  },
  {
    id: "search-a-2d-matrix",
    title: "search a 2d matrix",
    difficulty: "medium",
    category: "binary search",
    order: 5
  },
  {
    id: "container-with-most-water",
    title: "container with most water",
    difficulty: "medium",
    category: "two pointers",
    order: 6
  },
  {
    id: "merge-intervals",
    title: "merge intervals",
    difficulty: "medium",
    category: "intervals",
    order: 7
  },
  {
    id: "maximum-depth-of-binary-tree",
    title: "maximum depth of binary tree",
    difficulty: "easy",
    category: "tree",
    order: 8
  },
  {
    id: "best-time-to-buy-and-sell-stock",
    title: "best time to buy and sell stock",
    difficulty: "easy",
    category: "array",
    order: 9
  },
  {
    id: "subsets",
    title: "subsets",
    difficulty: "medium",
    category: "backtracking",
    order: 10
  }
]

