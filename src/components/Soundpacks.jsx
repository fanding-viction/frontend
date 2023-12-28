import soundpackData from "../db/soundpack.json";
import SoundpackCard from "./SoundpackCard";

const Soundpacks = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 ">
      <div className="flex mb-2">
        <div className="text-2xl font-bold hover:text-main text-white">
          <span className="text-base">Sound Pack</span>
        </div>
      </div>
      <div className="border-b-[1px] mx-auto" />

      <div className="mt-8 px-4  grid grid-cols-3 lg:grid-cols-5 gap-10 ">
        {soundpackData ? (
          soundpackData.map((v, i) => {
            return (
              <>
                <SoundpackCard
                  key={i}
                  track={v.track}
                  title={v.title}
                  desc={v.desc}
                />
              </>
            );
          })
        ) : (
          <div>...Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Soundpacks;
