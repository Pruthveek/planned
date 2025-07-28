import React from "react";
import DashedBorderTag from "../ui/dashed-border-tag";
import Image from "next/image";
import Link from "next/link";
export default function PricingComponent() {
  return (
    <section className="relative my-20">
      <div className="absolute bottom-0 bg-black rounded-xl w-full flex justify-center h-[800px]"></div>
      <div
        style={{
          backgroundImage: `url('https://planned-marketing-git-get-started-gift-card-planned.vercel.app/img/home/create-event/pricing.png')`,
        }}
        className="bg-[#101010] bg-cover bg-left bg-no-repeat w-full lg:max-w-7xl mx-auto rounded-[12px] relative overflow-visible md:overflow-hidden py-20 shadow-black shadow-2xl/90 px-8"
      >
        <div className=" text-white">
          <div className="flex flex-col items-center gap-8">
            <DashedBorderTag tag={"Pricing"} />
            <div className="flex flex-col items-center max-w-lg text-center gap-2">
              <h1 className="text-primary text-2xl xl:text-4xl font-medium leading-[40px] xl:leading-[48px] whitespace-pre-line">
                Simple, risk-free pricing
              </h1>
              <p className="text-secondary text-base leading-6 whitespace-pre-line">
                If we don’t negotiate at least 5% off list price, you get your
                money back.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center pt-16 space-y-8 w-full">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-8 xl:gap-8">
              <div className="bg-gradient-to-t from-[#0E1417] to-[#272C2F] p-6 space-y-8 w-full xl:max-w-md border-1 border-[#4D5457] border-b-transparent flex flex-col justify-between">
                <div className="">
                  <p className="font-bold">No commitment</p>
                  <p>
                    One time planners get core features with no monthly fee,
                    perfect for occasional events.
                  </p>
                </div>
                <div>
                  <p>
                    <sup>$ </sup>
                    <span className="text-2xl">0</span> per month
                  </p>
                  <p>5% transaction fee - $500 minimum</p>
                </div>
                <ul>
                  <li className="font-bold">Start planning</li>
                  <li className="flex gap-2">
                    <Image
                      src="https://planned-cms-staging.imgix.net/icons/_2000xAUTO_crop_center-center_none_ns/check-white.svg"
                      alt="→"
                      height={15}
                      width={15}
                    ></Image>
                    Sourcing & contracting service
                  </li>
                  <li className="flex gap-2">
                    <Image
                      src="https://planned-cms-staging.imgix.net/icons/_2000xAUTO_crop_center-center_none_ns/check-white.svg"
                      alt="→"
                      height={15}
                      width={15}
                    ></Image>
                    Sharable comparison table
                  </li>
                  <li className="flex gap-2">
                    <Image
                      src="https://planned-cms-staging.imgix.net/icons/_2000xAUTO_crop_center-center_none_ns/check-white.svg"
                      alt="→"
                      height={15}
                      width={15}
                    ></Image>
                    Contract summary
                  </li>
                  <li className="flex gap-2">
                    <Image
                      src="https://planned-cms-staging.imgix.net/icons/_2000xAUTO_crop_center-center_none_ns/check-white.svg"
                      alt="→"
                      height={15}
                      width={15}
                    ></Image>
                    Planning checklist
                  </li>
                  <li className="flex gap-2">
                    <Image
                      src="https://planned-cms-staging.imgix.net/icons/_2000xAUTO_crop_center-center_none_ns/check-white.svg"
                      alt="→"
                      height={15}
                      width={15}
                    ></Image>
                    Unlimited collaborators
                  </li>
                </ul>
                <div className="bg-white text-black text-center py-1 rounded-md">
                  <Link href="/">Start for free</Link>
                </div>
              </div>
              <div className="bg-gradient-to-t from-[#0E1417] to-[#272C2F] p-6 space-y-8 w-full xl:max-w-md border-2 border-dashed border-blue-500 border-b-transparent flex flex-col justify-between">
                <div className="">
                  <p className="font-bold text-blue-500">Maximum value</p>
                  <p>
                    Regular planners unlock full access and lower fees for
                    ongoing event needs.
                  </p>
                </div>
                <div>
                  <p>
                    <sup>$ </sup>
                    <span className="text-2xl">99</span> per month
                  </p>
                  <p>5% transaction fee - $250 minimum</p>
                </div>
                <ul>
                  <li className="font-bold">Scale your planning</li>
                  <li className="flex gap-2">
                    <Image
                      src="https://planned-cms-staging.imgix.net/_2000xAUTO_crop_center-center_none_ns/check-blue.png"
                      alt="→"
                      height={15}
                      width={15}
                    ></Image>
                    Everything in No Commitment
                  </li>
                  <li className="flex gap-2">
                    <Image
                      src="https://planned-cms-staging.imgix.net/_2000xAUTO_crop_center-center_none_ns/check-blue.png"
                      alt="→"
                      height={15}
                      width={15}
                    ></Image>
                    Where to meet
                  </li>
                  <li className="flex gap-2">
                    <Image
                      src="https://planned-cms-staging.imgix.net/_2000xAUTO_crop_center-center_none_ns/check-blue.png"
                      alt="→"
                      height={15}
                      width={15}
                    ></Image>
                    RSVP & event site builder
                  </li>
                  <li className="flex gap-2">
                    <Image
                      src="https://planned-cms-staging.imgix.net/_2000xAUTO_crop_center-center_none_ns/check-blue.png"
                      alt="→"
                      height={15}
                      width={15}
                    ></Image>
                    Attendee portal
                  </li>
                  <li className="flex gap-2">
                    <Image
                      src="https://planned-cms-staging.imgix.net/_2000xAUTO_crop_center-center_none_ns/check-blue.png"
                      alt="→"
                      height={15}
                      width={15}
                    ></Image>
                    Hotel room block management
                  </li>
                  <li className="flex gap-2">
                    <Image
                      src="https://planned-cms-staging.imgix.net/_2000xAUTO_crop_center-center_none_ns/check-blue.png"
                      alt="→"
                      height={15}
                      width={15}
                    ></Image>
                    Post-event survey
                  </li>
                </ul>
                <div className="bg-blue-500 text-white text-center py-1 rounded-md">
                  <Link href="/">Start for free</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[0.5px] border-absolute top-0 left-0 z-20 border-t-[#4D5457]"></div>
          <div className="flex justify-center px-5">
            <div className="p-8 border-x border-x-[#4D5457] w-[928px] grid grid-cols-3 gap-8">
              <div className="col-span-3 pb-8">
                <div className="flex justify-between items-center pb-2">
                  <p className="font-bold">What’s your event budget?</p>
                  <p className="text-gray-300">Calculate ROI</p>
                </div>
                <div className="h-12 font-bold p-5 w-full border outline-0 border-gray-500 rounded-md flex items-center">
                  <p className=" text-gray-300 text-12 font-bold">$</p>
                  <input
                    type="number"
                    className="font-bold p-5 w-full border-0 outline-0 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
              </div>
              <div className="col-span-3 xl:col-span-1 space-y-8 pr-8 xl:border-r xl:border-r-[#4D5457] ">
                  <div className="flex items-center justify-between">
                    <p className="flex items-center gap-2"><span className="text-[5px]"> 🔵 </span> Negotiated savings</p>
                    <p>$ 0</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="flex items-center gap-2"><span className="text-[5px]"> 🟢 </span> Net savings</p>
                    <p>$ 0</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="flex items-center gap-2"><span className="text-[5px]"> ⚪️ </span> Planned's fee (5%)</p>
                    <p>$ 0</p>
                  </div>
              </div>
              <div className="col-span-3 xl:col-span-2">
                bar
              </div>
            </div>
          </div>
          <div className="border-[0.5px] border-absolute top-0 left-0 z-20 border-t-[#4D5457]"></div>
        </div>
      </div>
    </section>
  );
}
