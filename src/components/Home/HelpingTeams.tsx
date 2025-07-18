import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function HelpingTeams() {
  const liCSS =
    "flex items-center justify-center rounded-2xl border-1 border-gray-300 py-10 md:py-0 px-5";
  const imageCSS = "object-cover w-[110px] lg:w-[132px] max-w-sm";
  return (
    <section className="w-full mx-auto px-5 py-14  md:px-28 md:pt-20 lg:px24">
      <div className="max-w-lg mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-medium text-gray-900 leading-tight">
          Helping teams plan events around the world
        </h2>
      </div>
      <div className="md:grid grid-rows-2 gap-5 items-center md:max-w-7xl mx-auto hidden ">
        <div>
          <ul className="grid grid-cols-5 gap-5">
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_400xAUTO_crop_center-center_none_ns/Amazon-BW.svg"
                alt="Amazon-BW"
                width={132}
                height={83}
                className={imageCSS}
              />
            </li>
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_400xAUTO_crop_center-center_none_ns/Samsung-BW.svg"
                alt="Samsung"
                width={132}
                height={83}
                className={imageCSS}
              />
            </li>
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_400xAUTO_crop_center-center_none_ns/BMO-BW.svg"
                alt="BMO-BW"
                width={132}
                height={83}
                className={imageCSS}
              />
            </li>
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/_400xAUTO_crop_center-center_none_ns/Instacart_black.png"
                alt="Instacart-BW"
                width={132}
                height={83}
                className={imageCSS}
              />
            </li>
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_400xAUTO_crop_center-center_none_ns/Turo-BW.svg"
                alt="Turo-BW"
                width={132}
                height={83}
                className={imageCSS}
              />
            </li>
          </ul>
        </div>
        <div>
          <ul className="grid grid-cols-5 gap-5">
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_400xAUTO_crop_center-center_none_ns/Nespresso-BW.svg"
                alt="Nespresso-BW"
                width={132}
                height={83}
                className={imageCSS}
              />
            </li>
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_400xAUTO_crop_center-center_none_ns/Bumble-BW.svg"
                alt="Bumble-BW"
                width={132}
                height={83}
                className={imageCSS}
              />
            </li>
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_400xAUTO_crop_center-center_none_ns/Michelin-BW.svg"
                alt="Michelin-BW"
                width={132}
                height={83}
                className={imageCSS}
              />
            </li>
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_400xAUTO_crop_center-center_none_ns/Google-BW.svg"
                alt="Google-BW"
                width={132}
                height={83}
                className={imageCSS}
              />
            </li>
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_400xAUTO_crop_center-center_none_ns/Airbnb-BW.svg"
                alt="Airbnb-BW"
                width={132}
                height={83}
                className={imageCSS}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-rows-2 gap-5 items-center md:max-w-7xl mx-auto md:hidden ">
        <div>
            <Marquee direction="right"><ul className="grid grid-cols-5 mr-5 gap-5">
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_400xAUTO_crop_center-center_none_ns/Amazon-BW.svg"
                alt="Amazon-BW"
                width={132}
                height={83}
                className={imageCSS}
              />
            </li>
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_400xAUTO_crop_center-center_none_ns/Samsung-BW.svg"
                alt="Samsung"
                width={132}
                height={83}
                className={imageCSS}
              />
            </li>
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_400xAUTO_crop_center-center_none_ns/BMO-BW.svg"
                alt="BMO-BW"
                width={132}
                height={83}
                className={imageCSS}
              />
            </li>
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/_400xAUTO_crop_center-center_none_ns/Instacart_black.png"
                alt="Instacart-BW"
                width={132}
                height={83}
                className={imageCSS}
              />
            </li>
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_400xAUTO_crop_center-center_none_ns/Turo-BW.svg"
                alt="Turo-BW"
                width={132}
                height={83}
                className={imageCSS}
              />
            </li>
          </ul></Marquee>
          
        </div>
        <div>
            <Marquee><ul className="grid grid-cols-5 mr-5 gap-5">
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_400xAUTO_crop_center-center_none_ns/Nespresso-BW.svg"
                alt="Nespresso-BW"
                width={132}
                height={83}
                className={imageCSS}
              />
            </li>
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_400xAUTO_crop_center-center_none_ns/Bumble-BW.svg"
                alt="Bumble-BW"
                width={132}
                height={83}
                className={imageCSS}
              />
            </li>
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_400xAUTO_crop_center-center_none_ns/Michelin-BW.svg"
                alt="Michelin-BW"
                width={132}
                height={83}
                className={imageCSS}
              />
            </li>
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_400xAUTO_crop_center-center_none_ns/Google-BW.svg"
                alt="Google-BW"
                width={132}
                height={83}
                className={imageCSS}
              />
            </li>
            <li className={liCSS}>
              <Image
                src="https://planned-cms-staging.imgix.net/logos/_400xAUTO_crop_center-center_none_ns/Airbnb-BW.svg"
                alt="Airbnb-BW"
                width={132}
                height={83}
                className={imageCSS}
              />
            </li>
          </ul></Marquee>
          
        </div>
      </div>
    </section>
  );
}
