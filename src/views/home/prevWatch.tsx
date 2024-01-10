import SlickSlider from "../../components/slickSlider";

const prevWatch = () => {
  return (
    <div className="">
      <h3 className="text-black text-lg font-medium mx-4 sm:mx-8 mb-4">
        Previously Watched
      </h3>
      <SlickSlider show={6} />
    </div>
  );
};

export default prevWatch;
