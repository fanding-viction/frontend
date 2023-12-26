//soundpackCard test code
import React, { useState, useContext } from "react";
import SoundpackModal from "./SoundpackModal";

import { AppContext } from "../App";

const SoundpackCardtest = ({ title, desc, track }) => {
  const { isSoundpackOpen, setIsSoundpackOpen } = useContext(AppContext);

  const toggleSoundpackModal = () => {
    setIsSoundpackOpen(!isSoundpackOpen);
  };

  return (
    <div
      className="px-2 py-2 hover:border-2 border-white"
      onClick={toggleSoundpackModal}
    >
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/album/${title}.png`}
          alt={title}
        />
      </div>

      <div className="text-base font-light mt-2 mx-1 text-white">{title}</div>

      {isSoundpackOpen && (
        <SoundpackModal title={title} desc={desc} track={track} />
      )}
    </div>
  );
};

export default SoundpackCardtest;
