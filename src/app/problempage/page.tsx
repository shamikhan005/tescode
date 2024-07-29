'use client';

import React, { useEffect } from 'react'
import Topbar from '../components/Topbar/topbar'
import ProblemsTable from '../components/ProblemTable/problemtable'
import { useState } from 'react'
import axios from 'axios';
import { DBProblem } from '@/utils/types/problem';
import { connect } from '@/dbconfig/dbconfig';
import Loading from '../components/Loading/loading';

interface UserProblemInteraction {
  problemId: string;
  solved: boolean;
}


export default function ProblemPage() {

  { /* for storing data in the database 

  const [inputs, setInputs] = useState({
    id: '',
    title: '',
    category: '',
    difficulty: '',
    likes: 0,
    dislikes: 0,
    order: 0
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: name === 'order' || name === 'likes' || name === 'dislikes'
      ? Number(value)
      : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/problem', inputs);
      if (response.status === 201) {
        alert('problem added successfully!');
        setInputs({
          id: '',
          title: '',
          category: '',
          difficulty: '',
          likes: 0,
          dislikes: 0,
          order: 0
        })
      }
    } catch (error: any) {
      console.log('error adding problem: ', error);
      alert('failed to add problem. please try again.');
    }
  }
  */}

  {/* for fetching data from the database */}

  const [problems, setProblems] = useState<DBProblem[]>([]);
  const [loading, setLoading] = useState(true);

  const [userSolvedProblems, setUserSolvedProblems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [problemsResponse, interactionsResponse] = await Promise.all([
          axios.get('/api/getproblem'),
          axios.get('/api/getUserProblemInteractions')
        ]);
        
        setProblems(problemsResponse.data);
        
        const solvedProblems = new Set(
          (interactionsResponse.data as UserProblemInteraction[])
            .filter(interaction => interaction.solved)
            .map(interaction => interaction.problemId)
        );
        setUserSolvedProblems(solvedProblems);
      } catch (error: any) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  return (
    <>
      <main>
        <Topbar />

        <h1
        className='text-2xl text-center text-white mt-10 mb-10 font-bold'>
          &ldquo; coding problems &rdquo;
        </h1>
        <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
          {loading ? (
            <Loading />
          ) : ( 
          <table className='text-sm text-left text-white sm:w-7/12 w-full max-w-[1200px] mx-auto'>
          <thead className='text-xs text-white border-b'>
            <tr>
              <th scope='col' className='px-4 py-3 w-1/4 text-xl'>
                status
              </th>
              <th scope='col' className='px-6 py-3 w-1/4 text-xl'>
                title
              </th>
              <th scope='col' className='px-6 py-3 w-1/4 text-xl'>
                difficulty
              </th>
              <th scope='col' className='px-6 py-3 w-1/4 text-xl'>
                category
              </th>
            </tr>
          </thead>
          <ProblemsTable problems={problems} solvedProblems={userSolvedProblems} />
          </table>
          )}
        </div>

        {/* temporary form -- for storing data in the database*/}
        {/* <form className='p-6 flex flex-col max-w-sm gap-3 text-black' onSubmit={handleSubmit}>
          <input onChange={handleInputChange} type="text" placeholder='problem id' name='id' />
          <input onChange={handleInputChange} type="text" placeholder='title' name='title' />
          <input onChange={handleInputChange} type="text" placeholder='category' name='category' />
          <input onChange={handleInputChange} type="text" placeholder='difficulty' name='difficulty' />
          <input onChange={handleInputChange} type="text" placeholder='order' name='order' />
          <button className='bg-white'>save to db</button>
        </form> */}
      </main>
    </>
  )
}

