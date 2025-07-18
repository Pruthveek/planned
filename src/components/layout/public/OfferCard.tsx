import React from "react";
import Image from "next/image";

export default function OfferCard() {
  return (
    <div className="h-40 w-40 sticky bottom-0 z-20 left-10 group">
      <div className="relative w-full h-full ">
        <Image
          src="https://planned-marketing-git-get-started-gift-card-planned.vercel.app/img/home/create-event/primary-gift-card.svg"
          alt="primary-gift-card"
          height={173}
          width={224}
          className="absolute z-50 top-6 left-0 transform rotate-[358deg] transition-all duration-300 group-hover:rotate-[355deg] group-hover:top-2"
        />
        <Image
          src="https://planned-marketing-git-get-started-gift-card-planned.vercel.app/img/home/create-event/secondary-gift-card.svg"
          alt="secondary-gift-card"
          height={70}
          width={100}
          className="absolute z-40 top-11 left-20 transform rotate-[15deg] blur-[0.5px] transition-all duration-300 group-hover:rotate-[20deg] group-hover:left-24 group-hover:top-8 group-hover:blur-[0px] group-hover:opacity-100 "
        />
      </div>
    </div>
  );
}

