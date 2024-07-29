import assert from 'assert'
import { Problem } from '../types/problem'

const starterCodeTwoSum = `function twoSum(nums, target) {
  // write your code here
};`;

const handlerTwoSum = (fn: any) => {
  try {
    const nums = [
      [2, 7, 11, 15],
      [3, 2, 4],
      [3, 3],
    ];

    const targets = [9, 6, 6];

    const answers = [
      [0, 1],
      [1, 2],
      [0, 1],
    ];

    for (let i = 0; i < nums.length; i++) {
      const result = fn(nums[i], targets[i]);
      console.log(`test case ${i + 1}: expected [${answers[i]}], got [${result}]`)
      assert.deepStrictEqual(result, answers[i], `test case ${i + 1} failed: expected ${answers[i]} but got ${result}`);
    }
    return true;
  } catch (error: any) {
    console.log("two sum handler function error", error)
    throw new Error(error)
  }
}

export const twoSum: Problem = {
  id: 'two-sum',
  title: "1. two sum",
  problemStatement: `<p className='mt-3'>
								given an array of integers <code>nums</code> and an integer <code>target</code>, return
								<em> indices of the two numbers such that they add up to </em> <code>target</code>.
							</p>
							<p className='mt-3'>
								you may assume that each input would have <strong>exactly one solution</strong>, and you
								may not use the same element twice.
							</p>
							<p className='mt-3'>you can return the answer in any order.</p>`,
  examples: [
    {
      id: 1,
      inputText: "nums = [2, 7, 11, 15], target = 9",
      outputText: "[0, 1]",
      explanation: "because nums[0] + nums[1] == 9, we return [0, 1].",
    },
    {
      id: 2,
      inputText: "nums = [3, 2, 4], target = 6",
      outputText: "[1, 2]",
      explanation: "because nums[1] + nums[2] == 6, we return [1, 2].",
    },
    {
      id: 3,
      inputText: "nums = [3, 3], target = 6",
      outputText: "[0, 1]",
    },
  ],
  constraints: `<li className='mt-2'>
									<code>2 ≤ nums.length ≤ 10</code>
								</li>

								<li className='mt-2'>
									<code>-10 ≤ nums[i] ≤ 10</code>
								</li>
								<li className='mt-2'>
									<code>-10 ≤ target ≤ 10</code>
								</li>
								<li className='mt-2 text-sm'>
									<strong>only one valid answer exists.</strong>
								</li>`,
  handlerFunction: handlerTwoSum,
  starterCode: starterCodeTwoSum,
  order: 1,
  starterFunctionName: "function twoSum(",
}