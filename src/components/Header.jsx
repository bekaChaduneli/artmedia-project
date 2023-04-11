import React from "react";
import mainimg from "../../public/mainImg.png";
import whitearrow from "../../public/whitearrow.png";
export default function Header() {
  return (
    <header
      id="Home"
      className=" w-full flex justify-center flex-col sm:px-5 sm:mt-4 md:px-8 md:mt-9 xl:px-28 xl:mt-12"
    >
      <div className="w-full sm:h-[500px] md:h-[600px] xl:h-[780px] bg-cover bg-center bg-gradient-to-tr from-darkred to-transparent  relative ">
        <img
          src={mainimg}
          className="w-full h-full contrast-75 object-cover absolute mix-blend-overlay brightness-90"
        />
        <div className="flex flex-col text-white sm:mt-[160px] max-w-[500px] md:mt-[280px] xl:mt-[350px] sm:ml-[20px] md:ml-[50px] xl:ml-[130px] sm:w-[full] xl:max-w-[736px] xl:w-[736px] gap-4">
          <h1 className="text-white font-bold sm:text-[25px] md:text-[35px] sm:mr-2 xl:text-6xl uppercase xl:leading-[75px]">
            Company’s First Service Title
          </h1>
          <p className="text-base sm:text-[13px] md:text-[14px] sm:leading-[22px] sm:mr-4 xl:leading-[25px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <button className=" w-[130px] h-[42px] pl-[14px] pr-[14px] flex justify-between items-center border-slate-300 border-[1px] border-white border-opacity-[60%] rounded-[8px] bg-white bg-opacity-[10%]">
            <h1 className="text-[14px]">See more</h1>
            <img className="w-[16px] group-hover:w-[12px]" src={whitearrow} />
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="bg-darkblue sm:w-[97%] md:w-[98%] xl:w-[98.5%] sm:h-[7px] md:h-[9px] xl:h-[10px] " />
      </div>
    </header>
  );
}
