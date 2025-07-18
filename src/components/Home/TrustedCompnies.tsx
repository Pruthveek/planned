import React from "react";
import Image from "next/image";
export default function TrustedCompnies() {
  const liCSS="px-10 relative flex border-1 bp:py-0 border-solid border-collapse border-[#F0F3F5] bp:border-0 ";
  const imageCSS="opacity-50"
  return (
    <>
    <div className="w-full mx-auto  max-w-max px-5 py-14  md:px-28 md:pt-20 md:pb-0 lg:px24">
      <div className="flex flex-col justify-center items-center max-w-7xl text-[16px] gap-[16px] text-[#7B8589]">
        <div>Trusted by modern companies</div>
          <ul className="grid grid-cols-2 md:grid-cols-6  ">
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_300xAUTO_crop_center-center_none_ns/Airbnb-BW.svg"
                alt="Airbnb"
                height={100}
                width={100}
                className={imageCSS}
              ></Image>
              
            </li>
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_300xAUTO_crop_center-center_none_ns/Amazon-BW.svg"
                alt="Amazon"
                height={100}
                width={100}
                className={imageCSS}
              ></Image>
              <div className="absolute w-[1px] h-[380px] min-w-[1px] bg-vertical-divider bp:bg-vertical-divider-bp bp:-bottom-136 left-0"></div>
            </li>
            
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_300xAUTO_crop_center-center_none_ns/Nespresso-BW.svg"
                alt="Nespresso"
                height={100}
                width={100}
                className={imageCSS}
              ></Image>
            </li>
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_300xAUTO_crop_center-center_none_ns/Samsung-BW.svg"
                alt="Samsung"
                height={100}
                width={100}
                className={imageCSS}
              ></Image>
            </li>
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_300xAUTO_crop_center-center_none_ns/Turo-BW.svg"
                alt="Turo"
                height={100}
                width={100}
                className={imageCSS}
              ></Image>
            </li>
            <li className={liCSS} >
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_300xAUTO_crop_center-center_none_ns/Google-BW.svg"
                alt="Google"
                height={100}
                width={100}
                className={imageCSS}
              ></Image>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
