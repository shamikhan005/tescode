import React, { useState, useEffect } from "react";
import axios from "axios";
import Split from "react-split";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline, TiStarFullOutline } from "react-icons/ti";
import { Problem } from "@/utils/types/problem";
import { pid } from "process";

type ProblemDescriptionProps = {
  problem: Problem;
  likes: number;
  dislikes: number;
  difficulty: string;
  pid: string;
  isSolved: boolean;
};

interface InteractionState {
  liked: boolean;
  disliked: boolean;
  starred: boolean;
  solved: boolean;
  [key: string]: boolean;
}

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({
  problem,
  likes: initialLikes,
  dislikes: initialDislikes,
  difficulty,
  isSolved,
}) => {

  /* ------------------------------------------------ */

  const pid = problem.id;

  const [interaction, setInteraction] = useState<InteractionState>({
    liked: false,
    disliked: false,
    starred: false,
    solved: isSolved,
  });

  const [localLikes, setLocalLikes] = useState(initialLikes);
  const [localDislikes, setLocalDislikes] = useState(initialDislikes);


  useEffect(() => {
    const fetchInteraction = async () => {
      try {
        const response = await axios.get(
          `/api/problemInteractions?problemId=${pid}`
        );
        setInteraction(response.data);
        // setIsSolved(response.data.solved || false);
      } catch (error: any) {
        console.error("error fetching user interaction: ", error);
      }
    };

    fetchInteraction();
  }, [pid]);

  useEffect(() => {
    setInteraction((prevState) => ({
      ...prevState,
      solved: isSolved,
    }))
  }, [isSolved]);

  const updateInteraction = async (action: string) => {
    try {
      const response = await axios.post("/api/updateInteraction", {
        problemId: pid,
        action,
      });

      setInteraction((prevState) => ({
        ...prevState,
        [action]: !prevState[action],
      }));

      if (action === "liked") {
        setLocalLikes((prev) => (interaction.liked ? prev - 1 : prev + 1));
      } else if (action === "disliked") {
        setLocalDislikes((prev) =>
          interaction.disliked ? prev - 1 : prev + 1
        );
      }
    } catch (error: any) {
      console.error("error updating interaction: ", error);
    }
  };

  /* --------------------------------------------------- */

  const difficultyColor = getDifficultyColor(difficulty);

  return (
    <div className="bg-black-layer-1">
      <div className="flex h-11 w-full items-center pt-2 bg-black-layer-2 text-white overflow-x-hidden">
        <div
          className={
            "bg-black-layer-1 px-5 py-[10px] text cursor-pointer font-bold"
          }
        >
          description
        </div>
      </div>

      <hr />

      <div className="flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto">
        <div className="px-5">
          <div className="w-full">
            <div className="flex space-x-4">
              <div className="flex-1 mr-2 text-lg text-white font-bold">
                {problem.title}
              </div>
            </div>
            <div className="flex items-center mt-3">
              <div
                className={` ${difficultyColor.text} ${difficultyColor.bg} inline-block  bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
              >
                {difficulty}
              </div>


           {interaction.solved && (
               <div className="rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s">
               <BsCheck2Circle />
             </div>
           )
           }

              <div
                className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6"
                onClick={() => updateInteraction("liked")}
              >
                <AiFillLike
                  className={interaction.liked ? "text-blue-500" : ""}
                />
                <span className="text-xs">{localLikes}</span>
              </div>
              <div
                className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6"
                onClick={() => updateInteraction("disliked")}
              >
                <AiFillDislike
                  className={interaction.disliked ? "text-red-500" : ""}
                />
                <span className="text-xs">{localDislikes}</span>
              </div>
              <div
                className="cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6"
                onClick={() => updateInteraction("starred")}
              >
                {interaction.starred ? (
                  <TiStarFullOutline className="text-yellow-500" />
                ) : (
                  <TiStarOutline />
                )}
              </div>
            </div>

            <div className="text-white text-sm">
              <div
                dangerouslySetInnerHTML={{ __html: problem.problemStatement }}
              />
            </div>

            <div className="mt-4">
              {problem.examples.map((example, index) => (
                <div key={example.id}>
                  <p className="font-medium text-white">
                    example {index + 1}:{" "}
                  </p>
                  {example.img && (
                    <img src={example.img} alt="" className="mt-3" />
                  )}
                  <div className="example-card">
                    <pre>
                      <strong className="text-white">input:</strong>{" "}
                      {example.inputText}
                      <br />
                      <strong>output:</strong> {example.outputText} <br />
                      {example.explanation && (
                        <>
                          <strong>explanation:</strong> {example.explanation}
                        </>
                      )}
                    </pre>
                  </div>
                </div>
              ))}
            </div>

            <div className="my-5">
              <div className="text-white text-sm font-medium">constraints:</div>
              <ul className="text-white ml-5 list-disc">
                <div
                  dangerouslySetInnerHTML={{ __html: problem.constraints }}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProblemDescription;

function getDifficultyColor(difficulty: string): { text: string; bg: string } {
  switch (difficulty.toLowerCase()) {
    case "easy":
      return { text: "text-dark-green-s", bg: "bg-dark-green-s" };
    case "medium":
      return { text: "text-dark-yellow", bg: "bg-dark-yellow" };
    case "hard":
      return { text: "text-dark-pink", bg: "bg-dark-pink" };
    default:
      return { text: "text-gray-500", bg: "bg-gray-500" };
  }
}
