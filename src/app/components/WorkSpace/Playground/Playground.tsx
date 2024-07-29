'use client';

import React from 'react';
import PreferenceNav from './PreferenceNav/PreferenceNav';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import Split from 'react-split';
import EditorFooter from './EditorFooter';
import { problems } from '@/utils/problems'
import { Problem } from '@/utils/types/problem';
import { useState , useEffect} from 'react';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useParams } from 'next/navigation';
import axios from 'axios';


type PlaygroundProps = {
  problem: Problem;
  setIsSolved: (isSolved: boolean) => void;
};

const Playground:React.FC<PlaygroundProps> = ({ problem, setIsSolved }) => {
  const params = useParams();
  const pid = params.pid as string;

  const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
  let [userCode, setUserCode] = useState<string>(problem.starterCode);

  useEffect(() => {
    console.log("pid:", pid);
    console.log("problems object:", problems);
  }, [pid]);

  const handleSubmit = async () => {
    try {
      if (!pid || !problems[pid]) {
        throw new Error("Problem ID is invalid or problem not found");
      }

      userCode = userCode.slice(userCode.indexOf(problem.starterFunctionName));
      console.log('userCode after slicing:', userCode)

      const cb = new Function(`return ${userCode}`)();
      console.log('function created from userCode:', cb);

      const handler = problems[pid as string].handlerFunction;

      if (typeof handler === "function") {
        const success = handler(cb);
        if (success) {
          toast.success("congrats! all tests passed!", {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",
          });

          /* call the api to update the solved status */
          await axios.post('/api/updateInteraction', {
            problemId: pid,
            action: 'solved',
          });
          setIsSolved(true);
        }
      }
    } catch (error: any) {
      console.log(error.message);
      if (
        error.message.startsWith("AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:") 
      ) {
        toast.error("oops! one or more test cases failed", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
      } else {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
      }
    }
  }

  return (
    <div className='flex flex-col relative'>
      <PreferenceNav />
      <ToastContainer />

      <hr />

      <Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60,40]} minSize={60}>
        <div className='w-full overflow-auto'>
          <CodeMirror
            value={problem.starterCode}
            theme={vscodeDark}
            extensions={[javascript()]}
            style={{ fontSize: 16}}
            onChange={(value) => setUserCode(value)}
          />
        </div>

        <div className='w-full px-5 overflow-auto'>
          <div className='flex h-10 items-center space-x-6'>
            <div className='relative flex h-full flex-col justify-center cursor-pointer'>
              <div className='text-sm font-bold leading-5'>testcases</div>
              <hr className='absolute bottom-0 h-0.5  border-none bg-white w-full' />
            </div>
          </div>

          <div className='flex'>
            {problem.examples.map((example, index) => (
              <div className='mr-2 items-start mt-2' key={example.id} onClick={() => setActiveTestCaseId(index) }>
              <div className='flex flex-wrap items-center gap-y-4'>
                <div className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative px-4 py-1 cursor-pointer whitespace-nowrap ${activeTestCaseId === index ? "text-white" : "text-gray-500"}`}>
                  case {index + 1}
                </div>
              </div>
            </div>
            ))}
          </div>

          <div className='font-semibold'>
            <p className='text-sm mt-4 text-white font-bold'>input</p>
            <div className='w-full cursor-text border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>{problem.examples[activeTestCaseId].inputText}</div>

            <p className='text-sm font-bold mt-4 text-white my-4'>output</p>
            <div className='w-full cursor-text border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>{problem.examples[activeTestCaseId].outputText}</div>
          </div>
        </div> 
      </Split>
      <div>
        <EditorFooter handleSubmit={handleSubmit} />
      </div>
    </div>
  )
}
export default Playground;