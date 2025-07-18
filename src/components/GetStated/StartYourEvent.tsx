import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function StartYourEvent() {
  return (
    <div className="p-4 overflow-hidden text-white ">
        <div className=" bg-[#1E8FFF] bg-[url('https://planned-marketing-git-get-started-gift-card-planned.vercel.app/img/home/create-event/start-event.svg')] bg-cover bg-left bg-no-repeat w-full lg:max-w-7xl mx-auto rounded-[12px] shadow-lg relative overflow-visible md:overflow-hidden ">
          <div className="flex justify-center text-center ">
            <div className="p-[32px] lg:px-[80px] md:py-[64px] lg:py-[80px] lg:pl-[80px] flex flex-col gap-[32px] max-w-[632px] w-full">
              <h1 className="text-primary text-2xl xl:text-4xl font-medium leading-[40px] xl:leading-[48px] whitespace-pre-line">
                Start your event,
                <br /> taken care by our expert
              </h1>
              <p className="text-secondary text-base leading-6 whitespace-pre-line">
                Share your vision and let your event specialist find the,
                perfect vendors, at the best price.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/plan-event"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2.5 py-1.5 text-sm font-medium text-black bg-white rounded-md h-8"
                >
                  <span>Create your event</span>
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
          </div>
        </div>
      </div>
  )
}
