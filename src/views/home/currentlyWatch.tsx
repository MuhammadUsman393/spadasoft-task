import SlickSlider from "../../components/slickSlider";

const CurrentlyWatch = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row mb-12">
      <div className="mb-12 md:mb-0">
        <h3 className="text-black text-lg font-medium mx-4 sm:mx-8 mb-4">Currently Watching</h3>
        <SlickSlider show={2} />
      </div>
      <div>
        <h3 className="text-black text-lg font-medium mx-4 sm:mx-8 mb-4">Suggested To Watch</h3>
        <SlickSlider show={4} />
      </div>
    </div>
  );
};

export default CurrentlyWatch;
