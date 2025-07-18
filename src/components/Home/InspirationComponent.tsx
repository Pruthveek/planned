import React from "react";
import Image from "next/image";

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
        <li className="w-[290px] flex-shrink-0 group">
          <div className="rounded-xl bg-white/10 p-1 backdrop-blur-md ">
            <div className="relative w-full h-[200px] rounded-2xl overflow-hidden">
              <Image
                src="https://planned-cms-staging.imgix.net/_800xAUTO_crop_center-center_none_ns/Summer-events-2023-thumb-1c.jpg"
                alt="Summer-events"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-out-expo group-hover:scale-110"
              />
              <p className="absolute top-3 right-3 rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-black backdrop-blur-md">
                5 min
              </p>
            </div>
          </div>

          <div className=" p-1">
            <p className="text-xl md:text-2xl text-black font-medium">
              9 Trending Ideas for your Summer 2023 Corporate Events
            </p>
            <span className="flex items-center text-blue-500 hover:text-blue-700 transition-colors text-sm font-medium mt-2">
              <span>Read the article</span>
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
        <li className="w-[290px] flex-shrink-0 group">
          <div className="rounded-xl bg-white/10 p-1 backdrop-blur-md overflow-hidden">
            <div className="relative w-full h-[200px] rounded-2xl overflow-hidden">
              <Image
                src="https://planned-cms-staging.imgix.net/_1600xAUTO_crop_center-center_none_ns/Purslane-thumbnail-2.jpg"
                alt="Purslane"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-out-expo group-hover:scale-110"
              />
              <p className="absolute top-3 right-3 rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-black backdrop-blur-md">
                5 min
              </p>
            </div>
          </div>

          <div className=" p-1">
            <p className="text-xl md:text-2xl text-black font-medium">
              Meet the caterer leading the way for sustainable events
            </p >
            <p className="text-sm md:text-md text-gray-500">The best of both worlds for stellar events and sustainability: Purslane is the caterer and mixologist turning heads in New York.</p>
            <span className="flex items-center text-blue-500 hover:text-blue-700 transition-colors text-sm font-medium mt-2">
              <span>Read the article</span>
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
        <li className="w-[290px] flex-shrink-0 group">
          <div className="rounded-xl bg-white/10 p-1 backdrop-blur-md overflow-hidden">
            <div className="relative w-full h-[200px] rounded-2xl overflow-hidden">
              <Image
                src="https://planned-cms-staging.imgix.net/_1600xAUTO_crop_center-center_none_ns/Future-of-the-event-industry.webp"
                alt="Purslane"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-out-expo group-hover:scale-110"
              />
              <p className="absolute top-3 right-3 rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-black backdrop-blur-md">
                5 min
              </p>
            </div>
          </div>

          <div className=" p-1">
            <p className="text-xl md:text-2xl text-black font-medium">
              Missed the Future of the Event Industry Summit? Here are our takeaways.
            </p >
            <p className="text-sm md:text-md text-gray-500">Seven experts gave their take on where the industry is at, and where it's headed during the fourth edition of the summit.</p>
            <span className="flex items-center text-blue-500 hover:text-blue-700 transition-colors text-sm font-medium mt-2">
              <span>Read the article</span>
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
