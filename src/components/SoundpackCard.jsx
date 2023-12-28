import React, { useState } from "react";

import SoundpackModal from "./SoundpackModal";

const SoundpackCard = ({ title, desc, track }) => {
  const [isSoundpackOpen, setIsSoundpackOpen] = useState(false);

  const toggleSoundpackModal = () => {
    setIsSoundpackOpen(!isSoundpackOpen);
  };

  return (
    <>
      <div
        className="px-2 py-2 hover:border-2 border-white"
        onClick={toggleSoundpackModal}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/album/${title}.png`}
          alt={title}
        />

        <div className="text-base font-light mt-2 mx-1 text-white">{title}</div>
      </div>

      {isSoundpackOpen && (
        <SoundpackModal
          track={track}
          title={title}
          desc={desc}
          isSoundpackOpen={isSoundpackOpen}
          toggleSoundpackModal={toggleSoundpackModal}
          setIsSoundpackOpen={setIsSoundpackOpen}
        />
      )}
    </>
  );
};

export default SoundpackCard;
