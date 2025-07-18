import {
  FaMapMarkerAlt,
  FaUserFriends,
  FaPercent,
  FaCreditCard,
} from "react-icons/fa";
import Image from "next/image";

export default function ContractSummaryCard() {
  return (
    <div className="border bg-gray-100 border-gray-100 p-0.5 rounded-[6px] shadow-lg shadow-gray-500/50 ">
      <div className=" lg:left-0 lg2:left-[116px] header-popup-border h-[327px] w-[217px] lg:h-[438px] lg:w-[291px] rounded-[6px]  bg-white top-[82px] lg:top-[104px] p-[11px] lg:p-[15px] svelte-u6uaaz">
        <div className="max-w-full flex flex-col items-center">
          <span className="text-[11px] lg:text-[16px] lg2:text-200 self-start text-primary font-medium">
            Contract summary
          </span>
        </div>
        <div className="relative rounded-[6px] shadow overflow-hidden w-full h-[103px] lg:h-[138px] mt-[18px] lg:mt-[24px] lg2:mt-[1.5rem] svelte-u6uaaz">
          <Image
            className="object-cover"
            src="https://planned-marketing-git-get-started-gift-card-planned.vercel.app/img/popup-image.png"
            alt="Contract summary"
            width={438}
            height={195}
          ></Image>
          <div className="min-h-3/4 w-full bg-common-gradient absolute bottom-0"></div>
          <div className="text-white mx-[9px] absolute flex text-start flex-col bottom-0 ">
            <span className="text-[8px] lg:text-[1rem] font-medium">
              Sydney
            </span>
            <span className="font-medium text-[10px] lg:text-100">
              Pullman Quay
            </span>
          </div>
        </div>
        <div className="mt-[11px] mb-[16px] lg:mt-[16px] lg:mb-[30px] lg2:mt-[16px] lg2:mb-[36px]">
          <Image
            src="https://planned-marketing-git-get-started-gift-card-planned.vercel.app/img/popup-text.svg"
            width={438}
            height={259}
            alt=""
          ></Image>
        </div>
        <div className="mt-4 border border-dashed border-gray-300 rounded-md py-2 px-3 flex items-center justify-center gap-3 text-sm text-[#7B8589]">
          <img src="/img/pay-icon.svg" alt="" className="h-4" />
          Signed & Paid!
          <svg
            width="19"
            height="14"
            viewBox="0 0 19 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.3606 13.0029C1.3606 13.0029 10.408 0.480469 5.58691 0.480469C1.99924 0.480469 1.95463 12.5405 9.50016 4.6546C9.50016 4.6546 10.7524 9.70466 13.883 5.69814C13.883 5.69814 13.883 7.26344 17.6397 7.26344"
              stroke="#0A1013"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
