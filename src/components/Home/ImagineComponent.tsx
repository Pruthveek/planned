import React from "react";
import Link from "next/link";
export default function ImagineComponent() {
  return (
    <section
      className="w-full bg-gray-100 h-fit bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(https://planned-marketing-git-get-started-gift-card-planned.vercel.app/img/footer-ctas-bg.svg); `,
      }}
    >
      <div className="relative mx-auto w-full max-w-max px-5 py-14 md:px-28 md:py-32">
      <div className="max-w-7xl mx-auto mb-12">
        <div className="px-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-medium text-gray-900">
            Imagine it Planned{" "}
            <svg
              className="inline-block h-auto w-5 -translate-x-1/4 align-super bp:w-36"
              width="37"
              height="33"
              viewBox="0 0 37 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3843 2.3623C17.3309 9.99828 7.02245 20.1796 2.25 24.3157M11.7951 29.0881C17.8402 27.8154 30.694 24.3156 33.7483 20.4977"
                stroke="currentColor"
                stroke-width="5.43873"
              ></path>
            </svg>
          </h2>
          <p className="my-4 text-base md:text-xl text-gray-800">
            Browse the latest tips, tricks, & product updates from Planned
          </p>
        </div>
      </div>
      <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
        <div className="px-10 py-16 md:px-14 md:py-16 text-center md:max-w-[660px] rounded-2xl bg-white/25 backdrop-blur-2xl shadow-xl/30 flex flex-col justify-between">
          <div>
            <p className=" text-sm md:text-md font-medium text-blue-500 ">
            Book a demo
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[40px] bp:text-[40px] bp2:text-700 text-primary font-medium leading-10 ">
            See the magic of Planned firsthand
          </h2>
          </div>
          <div className="mt-10">
            <Link
              href="/"
              className=" self-start text-[16px] items-center bp:mt-48 bp:self-start px-2 py-1 text-white bg-black border-2 border-black rounded-[5px] hover:bg-transparent hover:text-black"
            >
              Book ademo
            </Link>
          </div>
        </div>
        <div className="px-10 py-16 md:px-14 md:py-16 text-center md:max-w-[660px] rounded-2xl bg-white/25 backdrop-blur-2xl shadow-xl/30 flex flex-col justify-between">
          <div>
            <p className="mb-3 text-sm md:text-md font-medium text-blue-500 ">
            careers
          </p>
          <h2 className="text-[20px] lg:text-[40px] bp:text-[40px] bp2:text-700 text-primary font-medium leading-10 md:text-4xl">
            See all open jobs
          </h2>
          </div>
          <div className="mt-10">
            <Link
              href="/"
              className=" self-start text-[16px] items-center bp:mt-48 bp:self-start px-2 py-1 text-black border-1 border-black rounded-[5px] hover:bg-black hover:text-white"
            >
              careers
            </Link>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
