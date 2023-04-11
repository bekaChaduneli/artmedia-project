import React from "react";
import logo from "../../public/whitelogo.png";
import facebook from "../../public/facebook.png";
import Contact from "./Contact";
export default function Footer() {
  const contents = ["Services", "Projects", "About", "Contact"];
  return (
    <div className="w-full sm:h-[500px] sm:pt-[40px] xl:h-[330px] flex justify-center lg:justify-start xl:px-[250px] lg:pl-[80px] xl:pt-[80px] pb-[68px] bg-darkblue">
      <div className="flex sm:w-[75%] md:w-[81%] sm:flex-col xl:flex-row xl:w-[1420px] xl:h-[182px] xl:justify-between">
        <div className="flex sm:flex-col sm:gap-4 md:flex-row md:gap-[70px] xxl:gap-[146px] xl:mt-5">
          <div className="flex flex-col sm:h-[60px] sm:gap-2 xl:gap-[36px] xl:h-[124px]">
            <div className="lg:w-[207px] sm:w-[120px] sm:gap-3 flex lg:gap-[25px]">
              <img
                className="sm:w-[30px] sm:h-[34px] lg:w-[61.53px] lg:h-[68px]"
                src={logo}
                alt="logo"
              />
              <h1 className="lg:text-[22px] sm:text-[12px] text-white xl:leading-[26.82px]">
                COMPANY NAME
              </h1>
            </div>
            <p className="opacity-[70%] sm:text-[12px] xl:text-[16px] xl:leading-[19.5px] text-white">
              © 2023 All Rights Reserved
            </p>
          </div>
          <div className="md:w-[60%] ">
            <div className="flex sm:gap-[22px] sm:justify-between xl:justify-start sm:mt-3 md:mt-0 xl:gap-[25px] xxl:gap-[50px] text-white">
              {contents.map((content) => (
                <h1 className="hover:opacity-[50%] sm:text-[13px] md:text-[16px] transition duration-200 cursor-pointer">
                  {content}
                </h1>
              ))}
            </div>
            <div className="flex gap-[18px] sm:mt-[15px] lg:mt-[25px] xl:mt-[42px]">
              <a href="#">
                <div className="sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px] bg-transparent border-2 border-white sm:rounded-[7px] md:rounded-[10px] flex items-center justify-center hover:opacity-[50%] transition duration-200 cursor-pointer">
                  <div className="md:w-[12.81px] md:h-[12.81px] sm:mt-[-1px] md:mt-0 sm:w-[9px] sm:h-[9px] rounded-full bg-transparent border-2 border-white" />
                </div>
              </a>
              <a href="">
                <div className="md:w-8 md:h-8 sm:w-[24px] sm:h-[24px] border-2 border-white sm:rounded-[7px] md:rounded-[10px] flex hover:opacity-[50%] transition duration-200">
                  <img
                    className="md:w-[25.6px] sm:w-[19px] sm:h-[18.3px] sm:mt-1 md:h-[24.37px] md:mt-[5px]"
                    src={facebook}
                    alt="facebook"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
}
