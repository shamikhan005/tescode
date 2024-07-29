import React from "react";
import {
  AiOutlineFullscreen,
  AiOutlineSetting,
  AiOutlineFullscreenExit,
} from "react-icons/ai";
import { useState, useEffect } from "react";

type PreferenceNavProps = {};

const PreferenceNav: React.FC<PreferenceNavProps> = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    function exitHandler(e: any) {
      if (!document.fullscreenElement) {
        setIsFullScreen(false);
        return;
      }
      setIsFullScreen(true);
    }
    if (document.addEventListener) {
      document.addEventListener("fullscreenchange", exitHandler);
      document.addEventListener("webkitfullscreenchange", exitHandler);
      document.addEventListener("mozfullscreenchange", exitHandler);
      document.addEventListener("MSFullscreenChange", exitHandler);
    }
  }, [isFullScreen]);

  return (
    <div className="flex items-center justify-between bg-black-layer-2 h-11 w-full">
      <div className="flex items-center text-white">
        <button className="flex cursor-pointer items-center focus:outline-none  text-dark-label-2 hover:bg-dark-fill-2 px-2 py-1.5 font-bold">
          <div className="flex items-center px-1">
            <div className="text-xs text-label-2 ">javascript</div>
          </div>
        </button>
      </div>

      <div className="flex items-center m-2">
        <button className="preferenceBtn group" onClick={handleFullScreen}>
          <div className="h-4 w-4  font-bold text-lg">
            {!isFullScreen ? (
              <AiOutlineFullscreen />
            ) : (
              <AiOutlineFullscreenExit />
            )}
          </div>
          <div className="preferenceBtn-tooltip">
            {!isFullScreen ? "full screen" : "exit full screen"}
          </div>
        </button>
      </div>
    </div>
  );
};
export default PreferenceNav;
