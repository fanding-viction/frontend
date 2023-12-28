import { useContext } from "react";

import { AppContext } from "../App";
import CompleteModal from "./CompleteModal";

const SoundpackModal = ({
  title,
  desc,
  track,
  toggleSoundpackModal,
  setIsSoundpackOpen,
}) => {
  const {
    setBalance,
    account,
    web3,
    contract,
    isCompleteOpen,
    toggleCompleteModal,
  } = useContext(AppContext);

  const buyNft = async () => {
    try {
      if (!contract || !account || !web3) return;
      const response = await contract.methods
        .buyAlbum(1)
        .send({ from: account });
      console.log("goood", response);
    } catch (error) {
      setBalance(10000);
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto ">
      <div className="fixed inset-0 w-full h-full bg-gray-900 opacity-50"></div>
      <div className="flex items-center px-4 min-h-screen py-8">
        <div className="relative max-w-md mx-auto bg-white rounded-md">
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
                  <li className="text-sm leading-relaxed text-gray-500">{v}</li>
                );
              })}
            </ol>
          </div>
          <div className=" my-4 px-12">
            <button
              className="w-full p-2.5 text-white bg-black rounded-md outline-none"
              onClick={() => {
                buyNft();
                toggleCompleteModal();
              }}
            >
              Buy
            </button>
          </div>
        </div>
        {isCompleteOpen && (
          <CompleteModal setIsSoundpackOpen={setIsSoundpackOpen} />
        )}
      </div>
    </div>
  );
};
export default SoundpackModal;
