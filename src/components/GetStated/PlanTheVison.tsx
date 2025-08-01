import React from "react";
import Image from "next/image";
import Link from "next/link";
import DashedBorderTag from "../ui/dashed-border-tag";
import { Timeline } from "@/components/ui/timeline";
import { timelineData } from "@/data/timelineData";
import { eventData } from "@/data/eventData";
import Marquee from "react-fast-marquee";
import AnimatedArrowButton from "../ui/buttons/AnimatedArrowButton";
export default function PlanTheVison() {
  return (
    <section className="py-16">
      <div className="gap-5 flex flex-col items-center ">
        <DashedBorderTag tag={"How It Work"} />
        <div className="flex flex-col items-center max-w-lg text-center gap-2">
          <h1 className="text-primary text-2xl xl:text-4xl font-medium leading-[40px] xl:leading-[48px] whitespace-pre-line">
            You plan the vision,
            <br />
            we handle the details.
          </h1>
          <p className="text-secondary text-base leading-6 whitespace-pre-line">
            From brief to full execution, we match you with experts,
            <br />
            surface tailored options, and negotiate the best deals.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-clip">
        <Timeline data={timelineData} />
      </div>
      <div className="px-[64px] md:pt-[64px] pb-[56px]">
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
      <div className="p-4 overflow-hidden">
        <div className="bg-[url('https://planned-marketing-git-get-started-gift-card-planned.vercel.app/img/home/plan-event-bg.webp')] bg-cover bg-left bg-no-repeat w-full lg:max-w-7xl mx-auto rounded-[12px] shadow-lg relative overflow-visible md:overflow-hidden ">
          <div className="flex flex-col xl:flex-row">
            <div className="p-[32px] lg:px-[80px] md:py-[64px] lg:py-[80px] lg:pl-[80px] flex flex-col gap-[32px] max-w-[632px] w-full">
              <h1 className="text-primary text-2xl xl:text-4xl font-medium leading-[40px] xl:leading-[48px] whitespace-pre-line">
                Start your event,
                <br /> taken care by our expert
              </h1>
              <p className="text-secondary text-base leading-6 whitespace-pre-line">
                Share your vision and let your event specialist find the,
                perfect vendors, at the best price.
              </p>
              <div className="w-max">
                <AnimatedArrowButton text={"Create your event"} link="/"/>
              </div>
            </div>
            {/* bigger then xl*/}
            <div className="hidden xl:flex justify-center w-full overflow-hidden">
              <div className="absolute top-0  h-[64px] rotate-180 w-full z-10 rounded-tl-[12px] bg-white mask-t-from-0 mask-t-to-100%"></div>
              <div className="absolute bottom-0 h-[64px] rotate-180 w-full z-10 rounded-tl-[12px] bg-white mask-b-from-0 mask-b-to-100%"></div>

              <div className="max-h-[372px] overflow-hidden grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-8 animate-scroll-up">
                  {[...eventData, ...eventData].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-1.5 rounded-xl overflow-hidden shadow-create-event-img-card outline-1 outline-offset-[-1px] outline-gray-200/40 max-w-[180px] shadow-lg"
                    >
                      <div className="relative w-[170px] h-[220px]">
                        <Image
                          src={item.src}
                          alt={item.name}
                          fill
                          className="rounded-md object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-8 animate-scroll-down">
                  {[...eventData, ...eventData].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-1.5 rounded-xl overflow-hidden shadow-create-event-img-card outline-1 outline-offset-[-1px] outline-gray-200/40 max-w-[180px] shadow-lg"
                    >
                      <div className="relative w-[170px] h-[220px]">
                        <Image
                          src={item.src}
                          alt={item.name}
                          fill
                          className="rounded-md object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* smaller then xl */}
            <div className="relative flex xl:hidden ">
              <div className="absolute xl:bottom-0 left-0 w-[64px] rotate-180 h-full z-10 rounded-tl-[12px] bg-white mask-l-from-0% mask-l-to-100%"></div>
              <div className="absolute xl:bottom-0 right-0 w-[64px] rotate-180 h-full z-10 rounded-tl-[12px] bg-white mask-r-from-0% mask-r-to-100%"></div>
              <Marquee>
                <div className="flex  gap-8 pl-8">
                  <div className="overflow-hidden flex gap-8 items-center pb-8">
                    {eventData.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white p-1.5 rounded-xl overflow-hidden shadow-create-event-img-card outline-1 outline-offset-[-1px] outline-gray-200/40 max-w-[180px] shadow-lg"
                      >
                        <div className="relative w-[170px] h-[220px]">
                          <Image
                            src={item.src}
                            alt={item.name}
                            fill
                            className="rounded-md object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="overflow-hidden flex gap-8 items-center pb-8">
                    {eventData.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white p-1.5 rounded-xl overflow-hidden shadow-create-event-img-card outline-1 outline-offset-[-1px] outline-gray-200/40 max-w-[180px] shadow-lg"
                      >
                        <div className="relative w-[170px] h-[220px]">
                          <Image
                            src={item.src}
                            alt={item.name}
                            fill
                            className="rounded-md object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
