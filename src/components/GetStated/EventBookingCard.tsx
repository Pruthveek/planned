import React from "react";
import Image from "next/image";
interface EventBookingCardDataTS {
  src: string;
  title: string;
  text: string;
}

const EventBookingCard: React.FC<EventBookingCardDataTS>=({src,title,text})=>{
return (
    <>
      <div className="flex flex-col relative shadow-plan-event-card rounded-[12px] shadow-xl">
        <div className="max-h-[353px] h-full w-full overflow-hidden mb-[8px]">
          <Image
            src={src}
            alt="event1"
            height={353}
            width={884}
            className=""
          ></Image>
        </div>
        <div>
          <div className="px-[64px] pb-[8px]">
            <div className="flex items-center gap-[12px] pb-[8px]">
              <span className=" h-[1px] w-full bg-[#E4EAED] "></span>{" "}
              <Image
                className="h-[16px] w-[16px]"
                src="https://planned-marketing-git-get-started-gift-card-planned.vercel.app/img/new/feature/separator.svg"
                alt="Planned"
                height={16}
                width={16}
              ></Image>{" "}
              <span className="h-[1px] w-full bg-[#E4EAED] "></span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-[6px] items-center max-w-[328px] mx-auto pb-8">
            <h4 className="text-primary text-[18px] font-medium leading-[28px] text-center">
              {title}
            </h4>{" "}
            <span className="text-secondary text-[14px] font-normal leading-[20px] text-center">
              {text}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}


export default EventBookingCard;

