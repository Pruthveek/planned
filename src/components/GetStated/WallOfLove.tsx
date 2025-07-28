import React from "react";
import DashedBorderTag from "../ui/dashed-border-tag";
import TestimonialGrid from "./TestimonialGrid";

export default function WallofLove() {
  return (
    <section className="flex flex-col items-center ">
      <div>
        <div className="gap-2 flex flex-col items-center ">
          <DashedBorderTag tag={"Wall of love"} />
          <div className="flex flex-col items-center max-w-lg text-center gap-2">
            <h1 className="text-primary text-2xl xl:text-4xl font-medium leading-[40px] xl:leading-[48px] whitespace-pre-line">
              Don’t just take our word for it
            </h1>
            <p className="text-secondary text-base leading-6 whitespace-pre-line">
              Lorem ipsum dolor sit amet consectetur. Tellus ultricies amet vel
              augue nulla. A aenean et sed cursus convallis vel.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl"> <TestimonialGrid/></div>
    </section>
  );
}
