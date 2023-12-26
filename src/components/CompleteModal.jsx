import { useState, useContext } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { AppContext } from "../App";

const CompleteModal = () => {
  const {
    isSoundpackOpen,
    setIsSoundpackOpen,
    isCompleteOpen,
    setIsCompleteOpen,
  } = useContext(AppContext);

  const toggleCompleteOpen = () => {
    setIsCompleteOpen(!isCompleteOpen);
    setIsSoundpackOpen(!isSoundpackOpen);
  };

  return (
    <div>
      {isCompleteOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="fixed inset-0 w-full h-full bg-neutral-900 opacity-50"></div>
          <div className="flex items-center min-h-screen px-4 py-8 ">
            <div className="relative w-[280px] mx-auto bg-neutral-900 rounded-md shadow-lg">
              <div className="flex justify-end w-full">
                <button
                  onClick={toggleCompleteOpen}
                  className="w-6 h-6 rounded-full p-1 mt-4 mr-4"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/icons/closeWhite.svg`}
                    alt="close"
                    className="text-white"
                  />
                </button>
              </div>

              <div className="my-4 px-2 flex flex-col items-center w-full bg-">
                <div className=" flex flex-col justify-center items-center">
                  <FaCircleCheck className=" w-32 h-32 text-main" />
                  <div className="font-bold text-2xl my-2"> Success !</div>
                  <div className="font-thin text-sm my-2">
                    You've successfully purchased sound pack
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CompleteModal;
