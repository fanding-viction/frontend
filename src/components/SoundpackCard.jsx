const SoundpackCard = ({ title, desc }) => {
  return (
    <div>
      <div className="  bg-black">
        <img
          src={`${process.env.PUBLIC_URL}/images/album/${title}.png`}
          alt={title}
        />
      </div>
      <div className="text-base font-light mt-2 mx-1 text-white">{title}</div>
      <div className="">{desc}</div>
    </div>
  );
};

export default SoundpackCard;
