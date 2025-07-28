"use client";

import Image from "next/image";
import React from "react";

interface HolidayPartiesCardProps {
  bgsrc: string;
  logosrc: string;
  statistic: string;
  statistictext: string;
  text: string;
  heightClass?: string;
}

const HolidayPartiesCard: React.FC<HolidayPartiesCardProps> = ({
  bgsrc,
  logosrc,
  statistic,
  statistictext,
  text,
  heightClass = "h-[400px]",
}) => {
  return (
    <div className="bg-white p-1 rounded-[12px] outline-1 outline-gray-200 shadow-xl/50">
      <div
        className={`relative overflow-hidden ${heightClass} gap-4 bg-cover bg-center rounded-[12px] text-white bg-gray-500 bg-blend-multiply flex flex-col justify-between`}
        style={{ backgroundImage: `url(${bgsrc})` }}
      >
        {/* Top blur */}
        <div className="absolute top-0 w-full h-20 bg-black/50 backdrop-blur-xl mask-b-from-0% mask-b-to-100%" />
        {/* Bottom blur */}
        <div className="absolute bottom-0 w-full h-20 bg-black/50 backdrop-blur-xl mask-t-from-0% mask-t-to-100%" />

        {/* Top content */}
        <div className="z-10 pt-8 px-8  flex justify-between h-full flex-col md:flex-row-reverse">
          <div>
            <p className="text-[32px] lg:text-[42px] font-medium">{statistic}</p>
            <p className="text-[14px] lg:text-[16px] font-normal text-gray-200">{statistictext}</p>
          </div>
          <div>
            <Image src={logosrc} alt="Company logo" width={100} height={100} priority />
          </div>
        </div>

        {/* Bottom content */}
        <div className="z-10 px-8 pb-8 max-w-md">
          <p className="text-[14px] lg:text-[16px] text-gray-200">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default HolidayPartiesCard;
