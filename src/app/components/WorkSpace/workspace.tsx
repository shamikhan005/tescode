'use client';

import React from 'react';
import Split from 'react-split';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import Playground from './Playground/Playground';
import { Problem } from '@/utils/types/problem';
import { useState } from 'react';


type WorkspaceProps = {
  problem: Problem;
  likes: number;
  dislikes: number;
  difficulty: string; 
  pid: string;
  isSolved: boolean;
};

const Workspace: React.FC<WorkspaceProps> = ({ problem, likes, dislikes, difficulty, pid}) => {

  const [isSolved, setIsSolved] = useState<boolean>(false);

  return (
    <Split className='split' minSize={0}>
      <div>
        <ProblemDescription problem={problem} likes={likes} dislikes={dislikes} difficulty={difficulty} pid={pid} isSolved={isSolved} />
      </div>
      <div>
        <Playground problem={problem} setIsSolved={setIsSolved} />
      </div>
    </Split>
  );
};

export default Workspace;
