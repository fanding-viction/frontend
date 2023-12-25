import { HiCheckBadge } from "react-icons/hi2";

const Intro = () => {
  return (
    <div className="pt-10 pb-4">
      <div className="max-w-screen-xl mx-auto px-4 relative">
        <div className="relative">
          <img
            className="absolute w-40 h-40 rounded-full"
            src={`${process.env.PUBLIC_URL}/images/artist.png`}
            alt="artist"
          />
          <div className="w-40 h-40 rounded-full bg-white text-gray-950 flex justify-center items-center">
            Loading...
          </div>
        </div>
        <div className="mt-4 text-2xl font-bold flex items-center">
          Hoàng Thùy Linh
          <div className=" w-6 h-6 rounded-full flex justify-center items-center ml-4 text-main">
            <HiCheckBadge size={18} />
          </div>
        </div>

        <div className="mt-2 text-gray-300">
          Hoàng Thuỳ Linh is a Vietnamese singer, actress. <br />
          The first album was released in 2010.
          <br /> Major hit “De Mi noi cho ma nghe” and album “HOANG” were the
          big boom in her career.
          <br /> Early 2022, new hit "Gieo Que" was released. © The Leader
          Entertainment Vietnam.
        </div>
      </div>
    </div>
  );
};

export default Intro;
