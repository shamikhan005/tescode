import React from "react";
import { BsChevronUp } from "react-icons/bs";

type EditorFooterProps = {
  handleSubmit: () => void;
};

const EditorFooter: React.FC<EditorFooterProps> = ({ handleSubmit }) => {
  return (
    <div className="flex absolute bottom-0 z-10 w-full">
      <div className="mx-5 my-[10px] flex justify-between w-full">
        <div className="mr-2 flex flex-1 flex-nowrap items-center space-x-4">
          {/* <button className='px-3 py-1.5 font-bold items-center transition-all inline-flex bg-dark-fill-3 text-sm hover:bg-dark-fill-2 text-dark-label-2 pl-3 pr-2'>
            console
            <div className='ml-1 transform transition flex items-center'>
                <BsChevronUp className='fill-gray-6 mx-1 fill-dark-gray-6'/>
            </div>
          </button> */}
        </div>
        <div className="ml-auto flex items-center space-x-4">
          {/* <button className='px-3 py-1.5 text-sm font-bold items-center whitespace-nowrap transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 text-dark-label-2' onClick={handleSubmit}>
            run
          </button> */}
          <button
            className="px-3 py-1.5 font-bold items-center transition-all focus:outline-none inline-flex text-sm text-white bg-dark-green-s hover:bg-green-3"
            onClick={handleSubmit}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditorFooter;