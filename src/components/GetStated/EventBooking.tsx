import React from "react";
import DashedBorderTag from "../ui/dashed-border-tag";
import EventBookingCard from "./EventBookingCard";
import {EventBookingCardData} from "@/data/eventBookingCardData";
export default function EventBooking() {
  return (
    <section className="py-16 flex flex-col gap-16">
      <div className="gap-5 flex flex-col items-center ">
        <DashedBorderTag tag={"Plan Events"} />
        <div className="flex flex-col items-center max-w-lg text-center gap-2">
          <h1 className="text-primary text-2xl xl:text-4xl font-medium leading-[40px] xl:leading-[48px] whitespace-pre-line">
            Event booking services,
            <br />
            built for busy people
          </h1>
          <p className="text-secondary text-base leading-6 whitespace-pre-line">
            The go-to planning partner for workplace managers and executive
            assistants who’ve got better things to do than chase quotes.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-[32px] lg:max-w-6xl xl:max-w-7xl">
          {EventBookingCardData.map((items)=>(
            <EventBookingCard key={items.id} src={items.src} title={items.title} text={items.text}/>
          ))}
        </div>
      </div>
    </section>
  );
}
