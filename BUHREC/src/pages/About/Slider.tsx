import { useState, useRef, useEffect } from "react";
import Slide, { slideProps } from "./Slide";

export interface SliderProps {
  slides: slideProps[];
}
const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    const scrollPosition = sliderRef.current.clientWidth * index;
    sliderRef.current.scrollTo({ behavior: "smooth", left: scrollPosition });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextSlideIndex =
        currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
      setCurrentSlide(nextSlideIndex);
      const scrollPosition = sliderRef.current.clientWidth * nextSlideIndex;
      sliderRef.current.scrollTo({ behavior: "smooth", left: scrollPosition });
    }, 2000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [currentSlide, slides.length]);

  return (
    <div className="slider pt-14">
      <div className="flex overflow-hidden" ref={sliderRef}>
        {slides.map((slide, index) => (
          <Slide key={index} heading={slide.heading} body={slide.body} />
        ))}
      </div>
      <div className="flex gap-10 justify-center pt-11 pb-9">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-[8px] cursor-pointer ${
              currentSlide == index ? "bg-darkBlue" : "bg-[#CEC5C5]"
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
