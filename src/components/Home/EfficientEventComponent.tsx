import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import ContractSummaryCard from "./ContractSummaryCard";
import AnimatedArrowButton from "../ui/buttons/AnimatedArrowButton";
import BadgeButton from "../ui/buttons/BadgeButton";
import { companiesData } from "@/data/companiesData"; 

export default function EfficientEventComponent() {
  const liCSS="px-10 relative flex border-1 bp:py-0 border-solid border-collapse border-[#F0F3F5] bp:border-0 ";
  const imageCSS="opacity-50"
  return (
    <section className="w-full pl-5 py-20 md:pl-8 xl:pl-16 flex flex-col justify-center mx-auto  md:pt-20 ">
      <div className="flex flex-col lg:flex-row lg:items-center overflow-hidden gap-10 w-full mx-auto  max-w-max px-5 py-14 md:pt-20 md:pb-0 lg:px24" >
        {/* Left Content */}
        <div className="w-full xl:w-1/2 flex flex-col gap-6 max-w-md ">
          <BadgeButton lable="NEW" text="Planned raises its $35M Series B"/>

          <div className="">
            <h1 className="text-2xl md:text-4xl text-primary leading-snug">
              Efficient event booking, from sourcing to payment
            </h1>
            <p className="mt-4 text-sm md:text-base text-secondary opacity-70">
              Book any hotel, venue or vendor, without worrying about payment terms or contracting.
              Make your stakeholders’ life easier and gain visibility into their spend.
            </p>
          </div>

          <div className="flex max-w-fit gap-2 bg-white border border-gray-200 shadow-sm p-1 rounded-lg focus-within:border-blue-500 focus-within:shadow-md transition-all duration-300 mr-1">
            <input
              type="email"
              placeholder="What's your work email?"
              className="w-fit md:w-[200px] px-1 py-1 border-none focus:outline-none text-sm"
            />
            <AnimatedArrowButton text="Watchdemo" link="/"/>
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
                <div className="px-1.5 py-0.5 rounded-lg flex items-center gap-2 bg-white border border-[#EADEFF] shadow-md shadow-gray-300
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
      <div className="w-full mx-auto  max-w-max px-5 py-14  md:px-28 md:pt-20 md:pb-0 lg:px24">
            <div className="flex flex-col justify-center items-center max-w-7xl text-[16px] gap-[16px] text-[#7B8589]">
              <div>Trusted by modern companies</div>
                <ul className="grid grid-cols-2 md:grid-cols-6  ">
                  {companiesData.map((items,index:number)=>(
                    <li key={index} className={liCSS}>
                    <Image
                      src={items.src}
                      alt={items.name}
                      title={items.name}
                      height={100}
                      width={100}
                      className={imageCSS}
                    ></Image>
                    
                  </li>
                  ))}
                </ul>
              </div>
            </div>
    </section>
  );
}
