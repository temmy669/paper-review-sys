import { useState, useRef } from "react";
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
  //   const index = currentSlide;
  //   useEffect(() => {
  //     setInterval(() => {
  //       setCurrentSlide(index);
  //       //   if (currentSlide == slides.length - 1) {
  //       //     setCurrentSlide(0);
  //       const scrollPosition = sliderRef.current.clientWidth * index;
  //       sliderRef.current.scrollTo({ behavior: "smooth", left: scrollPosition });
  //       index + 1;
  //       //   }
  //     }, 3000);
  //   }, [currentSlide]);

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
