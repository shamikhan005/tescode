# tescode

tescode is a coding platform that allow users to solve coding problems, track their progress and interact with various coding challeneges.

https://github.com/user-attachments/assets/bfbd80cb-78bf-47ed-aa1f-1a2ddac0d230


### file structure


```

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

```

### note

add the required environment variables in `.env` (example file provided in `.env.example`).

### development 

you can fork this repo by clicking the fork button in the top right corner of the page.

#### clone repository:

```bash
git clone https://github.com/<your-username>/tescode.git
cd tescode
```

#### install dependencies:

```bash
npm install
```

#### set up environment variables:

copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

update the `.env` file with your configuration.

#### run the development server:

```bash
npm run dev
```

#### build the project for production:

```bash
npm run build
```

#### start the production server:

```bash
npm start
```

## contributing

if you would like to contribute, please open an isssue or submit a pull request with your changes.











