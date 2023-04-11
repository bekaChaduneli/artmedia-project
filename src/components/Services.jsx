import React, { useEffect } from "react";
import money from "../../public/moneys.svg";
import wallet from "../../public/wallet-minus.svg";
import audio from "../../public/audio-square.svg";
import hoverEffect from "hover-effect";
import overlay from "../../public/overlay.png";
export default function Services() {
  useEffect(() => {
    var image_animate = new hoverEffect({
      parent: document.querySelector("#money"),
      intensity: 0.5,
      image1: money,
      image2: money,
      displacementImage: overlay,
    });
    var image_animate = new hoverEffect({
      parent: document.querySelector("#wallet"),
      intensity: 0.5,
      image1: wallet,
      image2: wallet,
      displacementImage: overlay,
    });
    var image_animate = new hoverEffect({
      parent: document.querySelector("#audio"),
      intensity: 0.5,
      image1: audio,
      image2: audio,
      displacementImage: overlay,
    });
  });
  return (
    <div
      id="Service"
      className="flex justify-center flex-col sm:gap-[24px] md:gap-[50px] xl:gap-[113px] items-center sm:mt-[60px] xl:mt-[84px]"
    >
      <h1 className="text-[40px] leading-[48.76px]">SERVICES</h1>
      <div className="flex sm:flex-col md:flex-row sm:gap-[32px] md:gap-0 justify-between md:w-[80%] xl:w-[65%] xxl:w-[1300px]">
        <div className="flex items-center flex-col sm:gap-[12px] xl:gap-[38px]">
          <div className="flex justify-center border-b-[10px] border-darkgrey items-center sm:w-[120px] sm:h-[120px] xl:w-[150px] xl:h-[150px] bg-grey rounded-full">
            <div
              id="money"
              className="sm:w-[55px] sm:h-[55px] xl:w-[74px] xl:h-[74px] overflow-hidden"
            />
          </div>
          <h1 className="xl:text-[34px] sm:text-[25px] xl:leading-[41.45px] text-black">
            Service Name
          </h1>
        </div>
        <div className="flex items-center flex-col sm:gap-[12px] xl:gap-[38px]">
          <div className="flex justify-center border-b-[10px] border-darkgrey items-center sm:w-[120px] sm:h-[120px] xl:w-[150px] xl:h-[150px] bg-grey rounded-full">
            <div
              id="wallet"
              className="sm:w-[55px] sm:h-[55px] xl:w-[74px] xl:h-[74px] overflow-hidden"
            />
          </div>
          <h1 className="xl:text-[34px] sm:text-[25px] xl:leading-[41.45px] text-black">
            Service Name
          </h1>
        </div>
        <div className="flex items-center flex-col sm:gap-[12px] xl:gap-[38px]">
          <div className="flex justify-center border-b-[10px] border-darkgrey items-center sm:w-[120px] sm:h-[120px] xl:w-[150px] xl:h-[150px] bg-grey rounded-full">
            <div
              id="audio"
              className="sm:w-[55px] sm:h-[55px] xl:w-[74px] xl:h-[74px] overflow-hidden"
            />
          </div>
          <h1 className="xl:text-[34px] sm:text-[25px] xl:leading-[41.45px] text-black">
            Service Name
          </h1>
        </div>
      </div>
    </div>
  );
}
