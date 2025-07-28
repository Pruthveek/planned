import React from "react";
import { InspirationItemTS } from "@/data/inspirationData";
import Image from "next/image";

interface InspirationItemProps{
    item:InspirationItemTS;
}
const InspirationCard:React.FC<InspirationItemProps>=({item})=>{
    return (
    <>
    <li className="w-[290px] flex-shrink-0 group">
          <div className="rounded-xl bg-white/10 p-1 backdrop-blur-md ">
            <div className="relative w-full h-[200px] rounded-2xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.linkText}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-out-expo group-hover:scale-110"
              />
              <p className="absolute top-3 right-3 rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-black backdrop-blur-md">
                {item.timeToRead}
              </p>
            </div>
          </div>

          <div className=" p-1">
            <p className="text-xl md:text-2xl text-black font-medium">
              {item.title}
            </p >
            <p className="text-sm md:text-md text-gray-500">{item.description}</p>
            <span className="flex items-center text-blue-500 hover:text-blue-700 transition-colors text-sm font-medium mt-2">
              <span>{item.linkText}</span>
              <span className="pl-1 transition-transform duration-500 ease-out-expo group-hover:translate-x-1">
                <svg
                  className="h-3 w-3"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5345 0.258789L7.06575 1.72754L12.8783 7.55046H0.201172V9.63379H12.8783L7.06575 15.4567L8.5345 16.9255L16.8678 8.59212L8.5345 0.258789Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </span>
          </div>
        </li>
    </>
    )
}

export default InspirationCard;

        