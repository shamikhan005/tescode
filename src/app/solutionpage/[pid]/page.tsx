'use client'

import React from "react";
import { useParams } from 'next/navigation';
import Split from "react-split";
import { problems } from '@/utils/problems';
import { Problem } from '@/utils/types/problem';
import Topbar from "@/app/components/Topbar/topbar";
import Workspace from "@/app/components/WorkSpace/workspace";

import axios from 'axios';
import { useState, useEffect } from "react";

type ProblemPageProps = {
  problem: Problem;
  likes: number;
  dislikes: number;
  difficulty: string;
  pid: string;
  isSolved: boolean;
};

const SolutionPage: React.FC = () => {
  const params = useParams();
  const { pid } = params as { pid: string };
  
  const problem: Problem | undefined = problems[pid];

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [difficulty, setDifficulty] = useState('');
  const [isSolved, setIsSolved] = useState(false);
  

  useEffect(() => {
    axios.get(`/api/problems/${pid}`)
    .then(response => {
      const { likes, dislikes, difficulty, isSolved} = response.data;
      setLikes(likes)
      setDislikes(dislikes);
      setDifficulty(difficulty);
      setIsSolved(isSolved);
    })
  }, [pid])


  if (!problem) {
    console.log("Problem not found for PID:", pid); 
    return <div>Problem not found</div>;
  }

  console.log("Problem found:", problem);

  return (
    <div>
      <Topbar />
      <Workspace problem={problem} likes={likes} dislikes={dislikes} difficulty={difficulty} isSolved={isSolved} pid={pid}/>
    </div>
  );
};

export default SolutionPage;
