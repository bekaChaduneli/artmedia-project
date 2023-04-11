import React from "react";
import about from "../../public/about.png";
import arrow from "../../public/arrow.png";
export default function About() {
  return (
    <div
      id="About"
      className="sm:mt-[60px] md:mt-[80px] lg:mt-[100px] xl:mt-[150px] xxl:mt-[200px] w-full mb-[120px] flex xl:ml-[170px]"
    >
      <div className="flex sm:gap-9 sm:items-center xl:items-start xl:justify-start sm:flex-col md:flex-row xl:gap-[100px] xl:w-[1560px]">
        <div className="sm:w-[320px] sm:h-[340px] lg:w-[400px] lg:h-[430px] md:ml-[80px] xl:w-[480px] xl:h-[520px] xxl:w-[590px] xxl:h-[640px]">
          <img
            className="object-cover sm:w-[320px] lg:w-[400px] lg:h-[430px] sm:h-[340px]  xl:w-[480px] xl:h-[520px] xxl:w-[590px] xxl:h-[640px]"
            src={about}
            alt="about image"
          />
          <div className="w-full flex justify-center">
            <div className="bg-transparent border-[1px] border-t-0 self-center bg-opacity-0 w-[90%] xl:w-[94%] h-[10px] border-darkblue" />
          </div>
        </div>
        <div className="sm:w-[80%] md:w-[50%] md:text-start sm:text-center sm:gap-[16px] h-full xl:w-[740px] lg:pt-[50px] xl:pt-[80px] flex flex-col xl:gap-[37px]">
          <h1 className="sm:text-[35px] sm:text-center md:text-start md:text-[30px] sm:self-center md:self-start xl:text-[40px] text-black xl:leading-[48.76px]">
            About Company
          </h1>
          <p className="sm:text-[10px] md:text-[14px] lg:text-[16px] md:mr-6 lg:mr-0 xl:text-[20px] xl:leading-[32px] text-darkblue lg:w-[100%] xl:w-[590px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="group w-[130px] sm:self-center h-[42px] md:self-start  relative flex justify-between items-center border-slate-300 border-[1px] border-red rounded-[8px] bg-transparent">
            <div className="bg-transparent absolute w-[0px] h-full pl-[14px] pr-[14px] flex justify-between items-center border-slate-300 rounded-[8px] transition-all duration-400 group-hover:w-full group-hover:bg-red" />
            <div className="pl-[14px] pr-[14px] w-full items-center flex justify-between">
              <h1 className="text-[14px] text-red z-[0] group-hover:text-white transition-all duration-300">
                See more
              </h1>
              <img
                className="w-[16px] group-hover:brightness-[295%] transition-all duration-500"
                src={arrow}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
