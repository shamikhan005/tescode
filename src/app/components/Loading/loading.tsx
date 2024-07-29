import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-white  animate-bounce"></div>
        <div className="w-4 h-4 bg-white  animate-bounce"></div>
        <div className="w-4 h-4 bg-white animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loading;
