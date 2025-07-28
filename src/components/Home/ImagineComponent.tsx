import React from "react";
import ImagineCard from "@/components/ui/cards/ImagineCard";
import { imagineCardData } from "../../data/imagineCardData";

const ImagineComponent = () => {
  return (
    <section
      className="w-full bg-gray-100 h-fit bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage:
          "url(https://planned-marketing-git-get-started-gift-card-planned.vercel.app/img/footer-ctas-bg.svg)",
      }}
    >
      <div className="relative mx-auto w-full max-w-max px-5 py-14 md:px-28 md:py-32">
        <div className="max-w-7xl mx-auto mb-12 px-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-medium text-gray-900">
            Imagine it Planned{' '}
            <svg
              className="inline-block h-auto w-5 -translate-x-1/4 align-super"
              width="37"
              height="33"
              viewBox="0 0 37 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3843 2.3623C17.3309 9.99828 7.02245 20.1796 2.25 24.3157M11.7951 29.0881C17.8402 27.8154 30.694 24.3156 33.7483 20.4977"
                stroke="currentColor"
                strokeWidth="5.43873"
              ></path>
            </svg>
          </h2>
          <p className="my-4 text-base md:text-xl text-gray-800">
            Browse the latest tips, tricks, & product updates from Planned
          </p>
        </div>

        <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
          {imagineCardData.map((card, index) => (
            <ImagineCard key={index} {...card} variant={card.variant as "primary" | "secondary" | "tertiary"} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImagineComponent;