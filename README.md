a coding platform.

// video


file strucute:

├── public
├── src
│   ├── app
│   │   ├── api
│   │   │   ├── getproblem
│   │   │   │   └── route.ts
│   │   │   ├── getUserProblemInteractions
│   │   │   │   └── route.ts
│   │   │   ├── problem
│   │   │   │   └── route.ts
│   │   │   ├── problemInteractions
│   │   │   │   └── route.ts
│   │   │   ├── problems
│   │   │   │   └── [id]
│   │   │   │       └── route.ts
│   │   │   ├── updateInteraction
│   │   │   │   └── route.ts
│   │   │   ├── users
│   │   │   │   ├── login
│   │   │   │   │   └── route.ts
│   │   │   │   ├── logout
│   │   │   │   │   └── route.ts
│   │   │   │   ├── me
│   │   │   │   │   └── route.ts
│   │   │   │   ├── signup
│   │   │   │       └── route.ts
│   │   ├── components
│   │   ├── login
│   │   │   └── page.tsx
│   │   ├── mockproblems
│   │   │   └── problems.ts
│   │   ├── problempage
│   │   │   └── page.tsx
│   │   ├── profile
│   │   │   └── page.tsx
│   │   ├── signup
│   │   │   └── page.tsx
│   │   ├── solutionpage
│   │   │   └── [pid]
│   │   │       └── page.tsx
│   │   └── page.tsx
│   ├── dbconfig
│   ├── helpers
│   │   └── getDataFromToken.ts
│   ├── models
│   │   ├── problemModel.ts
│   │   ├── userModel.js
│   │   └── userProblemInteractionModel.ts
│   ├── utils
│   │   ├── problems
│   │   │   ├── images
│   │   │   ├── index.ts
│   │   │   ├── jump-game.ts
│   │   │   ├── reverse-linked-list.ts
│   │   │   ├── search-a-2d-matrix.ts
│   │   │   ├── two-sum.ts
│   │   │   └── valid-parentheses.ts
│   │   ├── types
│   │   │   └── problem.ts
│   └── middleware.ts
├── globals.css
├── layout.tsx
├── .env


note: add the required environment variables in .env (example file provided in .env.example)

tech stack:

next.js
mongodb
typescript
tailwind css
node.js



