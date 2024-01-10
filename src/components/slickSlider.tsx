import Slider from "react-slick";
import { useMovieContext } from "../context/movieContext";
import Card from "./card";

const SlickSlider = ({ show }: { show: number }) => {
  const { movies } = useMovieContext();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
  };

  const responsiveSettings = [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: show === 6 ? 5 : show === 4 ? 3 : 2,
        slidesToScroll: show === 6 ? 4 : 2,
        infinite: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: show === 6 ? 4 : show === 4 ? 3 : 2,
        slidesToScroll: show === 6 ? 3 : 2,
        infinite: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: show === 6 ? 3 : 2,
        infinite: true,
      },
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ];

  Object.assign(settings, {
    slidesToShow: show,
    slidesToScroll: show === 6 ? 4 : show === 4 ? 3 : 2,
    responsive: responsiveSettings,
  });

  return (
    <div>
      <div
        className={`${
          show === 6
            ? "w-[95vw] xl:w-[98%]"
            : show === 2
            ? "w-[95vw] md:w-[35vw] lg:w-[28vw] xl:w-[500px]"
            : "w-[95vw] md:w-[53vw] lg:w-[56vw] xl:w-[800px]"
        } ml-0 sm:ml-4 mr-4 sm:mr-8`}
      >
        <div className="h-[245px] sm:h-[280px]">
          <Slider {...settings}>
            {movies.map((movie, index) => (
              <Card movie={movie} index={index} check={true} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SlickSlider;
