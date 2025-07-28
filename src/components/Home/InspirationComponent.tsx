import React from "react";
import { inspirationItems } from "@/data/inspirationData";
import InspirationCard from "../ui/cards/InspirationCard";
export default function InspirationComponent() {
  return (
    <section className="w-full mx-auto  max-w-max px-5 py-14  md:px-28 md:pt-20 md:pb-0 lg:px24">
        <div className="max-w-7xl mx-auto mb-12">
            <div className="px-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-medium text-gray-900">
          From inspiration to action
        </h2>
        <p className="my-4 text-base md:text-xl text-gray-800">
          Browse the latest tips, tricks, & product updates from Planned
        </p>
      </div>

      <ul className="px-5 flex gap-5 overflow-x-auto">
        {inspirationItems.map((item)=>(
            <InspirationCard key={item.id} item={item} />
        ))}

        <li className="w-[290px] flex-shrink-0 h-[] bg-black rounded-2xl flex flex-col justify-center items-center group">
            <p className="text-xl md:text-2xl text-white font-medium">
              View all
            </p >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-colors group-hover:bg-blue-500 group-hover:text-white"><span className="w-1/2"><svg className="h-auto w-full" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5345 0.258789L7.06575 1.72754L12.8783 7.55046H0.201172V9.63379H12.8783L7.06575 15.4567L8.5345 16.9255L16.8678 8.59212L8.5345 0.258789Z" fill="currentColor"></path></svg></span></span>
        </li>
      </ul>
        </div>
      
    </section>
  );
}
