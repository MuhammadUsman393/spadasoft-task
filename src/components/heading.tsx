const heading = ({ size }: { size: number }) => {
  return (
    <p
      className={`text-black font-caros text-[${size}px] font-semibold ${
        size === 80 ? "xs:px-6 leading-[80px] mb-12" : "leading-[30px]"
      }`}
    >
      The Movie Tracker
    </p>
  );
};

export default heading;
