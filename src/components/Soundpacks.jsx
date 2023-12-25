import axios from "axios";
import { useEffect, useState } from "react";
import SoundpackCard from "./SoundpackCard";
import soundpackData from "../db/soundpack.json";

const Soundpacks = ({ page, mintedNft }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [soundpacks, setSoundpacks] = useState();

  const getNfts = async (p) => {
    try {
      let nftArray = [];

      setSoundpacks();

      for (let i = 0; i < 10; i++) {
        const tokenId = i + 1 + (p - 1) * 10;

        let response = await axios.get(
          `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
        );

        nftArray.push({ tokenId, metadata: response.data });
      }

      setSoundpacks(nftArray);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickPage = (p) => () => {
    setSelectedPage(p);

    getNfts(p);
  };

  const pageComp = (buttonName) => {
    let pageArray = [];

    for (let i = 0; i < page; i++) {
      pageArray.push(
        <button
          key={i}
          className={`text-2xl font-bold hover:text-white ${
            i + 1 === selectedPage ? "text-white" : "text-gray-400"
          }`}
          onClick={onClickPage(i + 1)}
        >
          <span className="text-base">{buttonName}</span>
        </button>
      );
    }

    return pageArray;
  };

  useEffect(() => {
    console.log(soundpacks);
  }, [soundpacks]);

  useEffect(() => {
    getNfts(1);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 ">
      <div className="flex mb-2">
        <div>{pageComp("Sound Pack")}</div>
        <div className="ml-4">{pageComp("Fan")}</div>
      </div>
      <div className="border-b-[1px] mx-auto" />

      <div className="mt-8 px-4  grid grid-cols-3 lg:grid-cols-5 gap-10 ">
        {soundpackData ? (
          soundpackData.map((v, i) => {
            return <SoundpackCard key={i} title={v.title} image={v.image} />;
          })
        ) : (
          <div>...Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Soundpacks;
