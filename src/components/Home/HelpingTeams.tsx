import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { logoRowOne, logoRowTwo } from "@/data/helpingTeamsData";

const liCSS =
  "flex items-center justify-center rounded-2xl border-1 border-gray-300 py-10 md:py-0 px-5";
const imageCSS = "object-cover w-[110px] lg:w-[132px] max-w-sm";

const LogoList = ({ logos }: { logos: typeof logoRowOne }) => (
  <ul className="grid grid-cols-5 gap-5">
    {logos.map((logo) => (
      <li key={logo.name} className={liCSS}>
        <Image
          src={logo.src}
          alt={logo.name}
          width={132}
          height={83}
          className={imageCSS}
        />
      </li>
    ))}
  </ul>
);

export default function HelpingTeams() {
  return (
    <section className="w-full mx-auto px-5 py-14 md:px-28 md:pt-20 lg:px24">
      <div className="max-w-lg mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-medium text-gray-900 leading-tight">
          Helping teams plan events around the world
        </h2>
      </div>
      <div className="md:grid grid-rows-2 gap-5 items-center md:max-w-7xl mx-auto hidden">
        <div><LogoList logos={logoRowOne} /></div>
        <div><LogoList logos={logoRowTwo} /></div>
      </div>

      <div className="grid grid-rows-2 gap-5 items-center md:max-w-7xl mx-auto md:hidden">
        <div>
          <Marquee direction="right" gradient={false}>
            <LogoList logos={logoRowOne} />
          </Marquee>
        </div>
        <div>
          <Marquee gradient={false}>
            <LogoList logos={logoRowTwo} />
          </Marquee>
        </div>
      </div>
    </section>
  );
}

