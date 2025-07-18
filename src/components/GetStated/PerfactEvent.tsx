"use client";
import React, { useEffect, useState } from "react";
import DashedBorderTag from "@/components/ui/dashed-border-tag";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { logoRowOne, logoRowTwo } from "@/data/helpingTeamsData";
import Link from "next/link";

export default function PerfactEvent() {
  const [isFirstRow, setIsFirstRow] = useState(true);
  const [blurred, setBlurred] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlurred(true);
      setTimeout(() => {
        setIsFirstRow((prev) => !prev);
        setBlurred(false);
      }, 300); // blur duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentLogos = isFirstRow ? logoRowOne : logoRowTwo;

  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center px-4 lg:px-14 w-full">
        {/* Header */}
        <div className="flex flex-col items-center xl:flex-row w-full max-w-7xl">
          <div className="flex flex-col gap-4 max-w-[581px]  pt-16 lg:pt-20 lg:px-16 xl:my-[32.5px] ">
            <div>
              <DashedBorderTag
                icon={
                  <Image
                    src="https://planned-marketing-git-get-started-gift-card-planned.vercel.app/img/home/blue-star.svg"
                    alt="Blue star"
                    height={20}
                    width={20}
                  />
                }
                tag="9.6 CAST rated by planners"
              />
            </div>

            <h1 className="text-primary text-2xl xl:text-4xl font-medium leading-[40px] xl:leading-[48px] whitespace-pre-line">
              The perfect event, booked for you in 5 days
            </h1>
            <p className="text-secondary text-base leading-6 whitespace-pre-line">
              Share your vision. We’ll turn it into a fully booked event
              <br />
              —on time, on budget, and without the stress.
            </p>
            <div className="w-max">
              <Link
                href="/plan-event"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2.5 py-1.5 text-sm font-medium text-white bg-blue-500 hover:bg-blue-900 transition-colors duration-300 rounded-md shadow-md h-8"
              >
                <span>Get started for free</span>
                <svg
                  width="14"
                  height="20"
                  viewBox="0 0 14 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-[1px]"
                >
                  <path
                    d="M3 10H10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7.25 13.5L10.75 10L7.25 6.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-12 xl:mt-0 xl:ml-auto">
            <Image
              src="https://planned-marketing-git-get-started-gift-card-planned.vercel.app/img/home/create-event/visual-for-herov1.5.webp"
              alt="plan-event"
              height={684}
              width={900}
              className="mask-t-from-80% mask-t-to-100%"
            />
          </div>
        </div>

        {/* Logo section */}
        <div className="flex flex-col items-center justify-center gap-6 py-16 lg:px-8 xl:px-0 relative w-full">
          <div className="bg-blue-400 border-blue-400  lg:w-7xl h-[1px] absolute top-0 z-40 mask-r-from-0% mask-r-to-100% mask-l-from-0% mask-l-to-100%"></div>
          <div className="bg-gray-400 border-gray-400 lg:w-7xl h-[1px] absolute bottom-0 z-40 mask-r-from-0% mask-r-to-100% mask-l-from-0% mask-l-to-100%"></div>
          <h5 className="text-lg leading-7 text-center px-4 md:px-0">
            Making planning events effortless for thousands of companies
          </h5>

          {/* Mobile View: Scrolling Marquee */}
          <div className="space-y-6 w-full md:hidden">
            <Marquee direction="left" speed={40}>
              <ul className="flex gap-6 pr-8">
                {logoRowOne.map((company) => (
                  <li key={company.name}>
                    <Image
                      src={company.src}
                      alt={company.name}
                      width={132}
                      height={50}
                      className="object-contain w-[110px] h-[50px] opacity-70"
                    />
                  </li>
                ))}
              </ul>
              <ul className="flex gap-6 pr-8">
                {logoRowTwo.map((company) => (
                  <li key={company.name}>
                    <Image
                      src={company.src}
                      alt={company.name}
                      width={132}
                      height={50}
                      className="object-contain w-[110px] h-[50px]"
                    />
                  </li>
                ))}
              </ul>
            </Marquee>
          </div>

          {/* Desktop View: Toggling full row */}
          <ul
            className={`hidden md:grid grid-cols-5 gap-6 place-items-center transition duration-500 ease-in-out ${
              blurred ? "blur-sm opacity-40" : "blur-0 opacity-100"
            }`}
          >
            {currentLogos.map((company) => (
              <li key={company.name}>
                <Image
                  src={company.src}
                  alt={company.name}
                  width={150}
                  height={50}
                  className="object-contain w-[150px] h-[50px] opacity-70"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
