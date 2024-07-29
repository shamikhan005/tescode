import React from "react";
import Link from "next/link";
import { BsCheckCircle } from "react-icons/bs";
import { problems } from "@/app/mockproblems/problems";
import { DBProblem } from "@/utils/types/problem";

type ProblemsTableProps = {
  problems: DBProblem[];
  solvedProblems: Set<string>;
};

const ProblemsTable: React.FC<ProblemsTableProps> = ({ problems, solvedProblems }) => {
  return (
    <tbody className="text-white">
      {problems.map((doc, idx) => {
        const difficultyColor =
          doc.difficulty === "easy"
            ? "text-dark-green-s"
            : doc.difficulty === "medium"
            ? "text-dark-yellow"
            : "text-dark-pink";
        return (
          <tr key={doc.id}>
            <th className="px-6 py-4 font-medium whitespace-nowrap text-white">
            {solvedProblems.has(doc.id) && (
                <BsCheckCircle color="green" fontSize={20} width={18} />
              )}
            </th>
            <td className="px-6 py-4">
              <Link className="cursor-pointer" href={`/solutionpage/${doc.id}`}>
                {doc.title}
              </Link>
            </td>
            <td className={`px-6 py-4 ${difficultyColor}`}>{doc.difficulty}</td>
            <td className={"px-6 py-4"}>{doc.category}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default ProblemsTable;
