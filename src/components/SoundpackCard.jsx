import React, { useState, useContext } from "react";
import { AppContext } from "../App";
import SoundpackModal from "./SoundpackModal";
import { FaCircleCheck } from "react-icons/fa6";
const SoundpackCard = ({ title, desc, track }) => {
  const { balance, setBalance } = useContext(AppContext);

  const [isSoundpackOpen, setIsSoundpackOpen] = useState(false);
  const [isCompleteOpen, setIsCompleteOpen] = useState(false);

  const toggleSoundpackModal = () => {
    setIsSoundpackOpen(!isSoundpackOpen);
  };

  const toggleCompleteModal = () => {
    setIsCompleteOpen(!isCompleteOpen);
  };
  const allClosed = () => {
    setIsSoundpackOpen(false);
    setIsCompleteOpen(false);
    setBalance(5);
  };

  return (
    <>
      <div
        className="px-2 py-2 hover:border-2 border-white"
        onClick={toggleSoundpackModal}
      >
        {/* <div> */}
        <img
          src={`${process.env.PUBLIC_URL}/images/album/${title}.png`}
          alt={title}
        />
        {/* </div> */}
        <div className="text-base font-light mt-2 mx-1 text-white">{title}</div>
      </div>

      {isSoundpackOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="fixed inset-0 w-full h-full bg-gray-900 opacity-50"></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="relative w-full max-w-md mx-auto bg-white rounded-md shadow-lg">
              <div className="flex justify-end w-full ">
                <button
                  onClick={toggleSoundpackModal}
                  className="w-6 h-6 rounded-full p-1 mt-4 mr-4"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/icons/closeBlack.svg`}
                    alt="close"
                  />
                </button>
              </div>
              <img
                src={`${process.env.PUBLIC_URL}/images/album/${title}.png`}
                alt={title}
                className="px-10 my-2 "
              />
              <div className="my-4 px-12">
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                <div>
                  {desc.map((v) => {
                    return (
                      <div className="text-sm leading-relaxed text-gray-500 ">
                        {v}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="my-4 px-12">
                <h2 className="text-base font-medium text-gray-800">Track</h2>
                <ol style={{ listStyleType: "decimal" }} className="mt-1 ml-4">
                  {track.map((v) => {
                    return (
                      <li className="text-sm leading-relaxed text-gray-500">
                        {v}
                      </li>
                    );
                  })}
                </ol>
              </div>
              <div className=" my-4 px-12">
                <button
                  className="w-full p-2.5 text-white bg-black rounded-md outline-none"
                  onClick={toggleCompleteModal}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isCompleteOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="fixed inset-0 w-full h-full bg-neutral-900 opacity-50"></div>
          <div className="flex items-center min-h-screen px-4 py-8 ">
            <div className="relative w-[280px] mx-auto bg-neutral-900 rounded-md shadow-lg">
              <div className="flex justify-end w-full">
                <button
                  onClick={allClosed}
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
    </>
  );
};

export default SoundpackCard;
