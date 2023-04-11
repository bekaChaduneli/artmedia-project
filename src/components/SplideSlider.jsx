import whitearrow from "../../public/whitearrow.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import React, { useRef, useState } from "react";
import firstimage from "../../public/image1.png";
import secondimage from "../../public/image2.png";
import thirdimage from "../../public/image3.png";
import forthimage from "../../public/image4.png";
import next from "../../public/newsarrow.png";
export default function SplideSlider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperRef = useRef(null);
  const breakpoints = {
    300: {
      spaceBetween: 100,
    },
    768: {
      spaceBetween: -240,
    },
    868: {
      spaceBetween: -400,
    },
    968: {
      spaceBetween: -500,
    },
    1068: {
      spaceBetween: -600,
    },
    1168: {
      spaceBetween: -700,
    },
    1268: {
      spaceBetween: -800,
    },
    1368: {
      spaceBetween: -880,
    },
    1440: {
      spaceBetween: -650,
    },
    1533: {
      spaceBetween: -770,
    },
    1630: {
      spaceBetween: -870,
    },
    1730: {
      spaceBetween: -970,
    },
    1830: {
      spaceBetween: -1100,
    },
    1910: {
      spaceBetween: -1180,
    },
  };

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };
  const contents = [
    {
      image: firstimage,
      text: "There are many variations of passages",
      date: "22 April 2023",
    },
    {
      image: secondimage,
      text: "The point of using Lorem Ipsum",
      date: "20 April 2023",
    },
    {
      image: thirdimage,
      text: "I must explain to you how all this mistaken idea",
      date: "19 April 2023",
    },
    {
      image: forthimage,
      text: "On the other hand, we denounce with righteous indignation",
      date: "15 April 2023",
    },
  ];
  return (
    <div
      id="Projects"
      className="mt-[58px] bg-darkgrey sm:h-[668px] xl:h-[950px] sm:pt-[30px] xl:pt-[176px]"
    >
      <div className="w-full flex flex-col md:justify-end md:items-end">
        <div className="w-full sm:p-9 md:p-12 md:pl-[70px] xl:p-0 xl:pl-[247px] xl:pr-[248px] xl:self-start flex justify-between">
          <h1 className="text-[40px] text-black leading-[48px]">NEWS</h1>
          <div class="arrow" className="flex justify-between w-[92px]">
            <button
              className={`prev-button hover:opacity-[50%] custom-arrow custom-arrow-prev ${
                activeSlideIndex === 0 ? "opacity-[50%]" : "opacity-[100%]"
              }`}
            >
              <img
                className="w-[32px] h-4 rotate-180 custom-arrow-svg"
                src={next}
              />
            </button>
            <button
              className={`next-button hover:opacity-[50%] custom-arrow custom-arrow-next ${
                activeSlideIndex === 3 ? "opacity-[50%]" : "opacity-[100%]"
              }`}
            >
              <img className="w-[32px] h-4 custom-arrow-svg" src={next} />
            </button>
          </div>
        </div>
        <div className="w-[100vw] flex xl:justify-items-end xl:justify-end xl:items-end">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={-1200}
            slidesPerView={1}
            breakpoints={breakpoints}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button",
            }}
            onSlideChange={handleSlideChange}
            className="flex items-center justify-center sm:w-[1200px] sm:mt-[20px] md:ml-[80px] md:w-[100%]  xl:ml-[250px] xl:w-[1675px]  xl:mt-[50px] mr-[0]"
          >
            {contents.map((content, index) => {
              return (
                <SwiperSlide
                  className="sm:w-full flex flex-col items-center justify-center md:block"
                  key={index}
                >
                  <div className="sm:w-[80%] sm:max-w-[500px] md:max-w-[100%] md:w-[360px] sm:h-[420px]  xl:w-[440px] xl:h-[560px] bg-cover bg-center bg-gradient-to-tr from-darkred to-transparent  relative ">
                    <img
                      className="w-full h-full object-cover absolute mix-blend-overlay brightness-90 contrast-75"
                      src={content.image}
                      alt={`slide ${index}`}
                    />
                    <div className="w-full h-full sm:p-7 xl:p-10 flex items-end">
                      <div className="flex flex-col text-white sm:w-[100%] md:p-0  xl:w-[360px] xl:gap-3 ">
                        <h1 className="text-white font-bold sm:text-[20px] xl:text-[32px] uppercase xl:leading-[41.45px] w-full">
                          {content.text}
                        </h1>
                        <p className="xl:text-[14px] sm:text-[11px] sm:mt-[2px] md:mt-[0px] leading-[17px] opacity-[80%]">
                          {content.date}
                        </p>
                        <button className=" w-[130px] h-[42px] pl-[14px] pr-[14px] mt-[20px] flex justify-between items-center border-slate-300 border-[2px]  bg-white bg-opacity-[8%] border-darkgrey rounded-[8px] border-opacity-[60%] cursor-pointer">
                          <h1 className="text-[14px]">See more</h1>
                          <img
                            className="w-[16px] hover:bg-red transition-all duration-300 group-hover:w-[4px]"
                            src={whitearrow}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {activeSlideIndex == index ? (
                    <div className="h-[8px] sm:w-[76%] sm:max-w-[480px] md:ml-[10px] md:w-[340px] xl:w-[420px] bg-red sm:ml-[0px] xl:ml-[10px]" />
                  ) : (
                    ""
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
