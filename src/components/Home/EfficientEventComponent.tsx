import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import ContractSummaryCard from "./ContractSummaryCard";

export default function EfficientEventComponent() {
  return (
    <section className="w-full pl-5 py-20 md:pl-8 xl:pl-16 flex justify-center mx-auto  md:pt-20 ">
      <div className="flex flex-col lg:flex-row lg:items-center overflow-hidden gap-10">
        {/* Left Content */}
        <div className="w-full xl:w-1/2 flex flex-col gap-6 max-w-md ">
          {/* Announcement Badge */}
          <div className="flex items-center gap-2 border border-[#D6DDE0] rounded-full bg-[#F7F9FA] p-1 max-w-fit">
            <div className="bg-gradient-to-r from-black via-gray-700 to-black text-white text-xs font-medium px-1 py-0.5 rounded-full">
              NEW
            </div>
            <div className="flex items-center text-sm font-medium text-gray-700 group">
              Planned raises its $35M Series B
              <span className="pl-2 font-bold transition-all duration-300">
                <span className="group-hover:hidden">&gt;</span>
                <span className="hidden group-hover:inline">→</span>
              </span>
            </div>
          </div>

          {/* Title and Description */}
          <div className="">
            <h1 className="text-2xl md:text-4xl text-primary leading-snug">
              Efficient event booking, from sourcing to payment
            </h1>
            <p className="mt-4 text-sm md:text-base text-secondary opacity-70">
              Book any hotel, venue or vendor, without worrying about payment terms or contracting.
              Make your stakeholders’ life easier and gain visibility into their spend.
            </p>
          </div>

          {/* Email Input + Button */}
          <div className="flex max-w-fit gap-2 bg-white border border-gray-200 shadow-sm p-1 rounded-lg focus-within:border-blue-500 focus-within:shadow-md transition-all duration-300 mr-1">
            <input
              type="email"
              placeholder="What's your work email?"
              className="w-fit md:w-[200px] px-1 py-1 border-none focus:outline-none text-sm"
            />
            <button className="w-fit md:w-[115px] group bg-blue-500 hover:bg-blue-600 text-white px-2  rounded-lg text-sm flex items-center gap-2 transition-all duration-300">
              Watchdemo
              <span className="font-bold">
                <span className="group-hover:hidden">&gt;</span>
                <span className="hidden group-hover:inline">→</span>
              </span>
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full flex flex-col gap-6">
          <div className="xl:pl-40">
            <div className="relative flex flex-row">
              {/* Contract Summary Popup */}
              <div className="z-10 absolute top-40 xl:top-[104px]">
                <ContractSummaryCard />
              </div>

              {/* AI + Dashboard */}
              <div className="flex flex-col gap-[11px]">
                {/* AI Prompt Card */}
                <div className="p-1.5 rounded-lg flex items-center gap-2 bg-white border border-[#EADEFF] shadow-md shadow-gray-300
                relative top-0 left-20 w-[882px] ">
                  <Image
                    src="https://planned-marketing-git-get-started-gift-card-planned.vercel.app/img/ai-icon.svg"
                    alt="AI"
                    width={20}
                    height={25}
                    className="h-auto w-auto"
                  />
                  <span className="text-gray-200">|</span>
                  <div className="text-[12px]">
                    <TextGenerateEffect
                      words="How we can increase hotel savings next quarter?"
                    />
                  </div>
                </div>

                {/* Dashboard Image */}
                <div className="relative top-0 left-20 h-[558px] w-[882px]">
                  <Image
                    src="https://planned-marketing-git-get-started-gift-card-planned.vercel.app/img/dashboard-test.svg"
                    alt="Dashboard"
                    height={588}
                    width={882}
                    className="mask-b-from-60% mask-b-to-100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
