"use client";

import Marquee from "react-fast-marquee";
import Link from "next/link";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const data = [
  {
    city: "New York",
    category: "Venues",
    name: "Contra Studios",
    image:
      "https://planned-cms-staging.imgix.net/_1600xAUTO_crop_center-center_none_ns/Event-Venue-New-York-_-Planned.webp",
  },
  {
    city: "Montreal",
    category: "Food & Beverage",
    name: "Société Bar",
    image:
      "https://planned-cms-staging.imgix.net/_1600xAUTO_crop_center-center_none_ns/Cocktail-Bar-Montreal-_-Planned.webp",
  },
  {
    city: "London",
    category: "Venues",
    name: "Century Club",
    image:
      "https://planned-cms-staging.imgix.net/_1600xAUTO_crop_center-center_none_ns/Rooftop-Venue-London-Planned.webp",
  },
  {
    city: "Atlanta",
    category: "AV",
    name: "Essay Video",
    image:
      "https://planned-cms-staging.imgix.net/_1600xAUTO_crop_center-center_none_ns/Photography-Studio-Atlanta-_-Planned.webp",
  },
  {
    city: "New York",
    category: "Equipment & Decor",
    name: "Floralies Events",
    image:
      "https://planned-cms-staging.imgix.net/_1600xAUTO_crop_center-center_none_ns/Event-Deco-New-York-_-planned.webp",
  },
  {
    city: "San Francisco",
    category: "Speakers",
    name: "Dr. Yvonne Darlene",
    image:
      "https://planned-cms-staging.imgix.net/_1600xAUTO_crop_center-center_none_ns/Event-Speaker-USA-_-Planned.webp",
  },
  {
    city: "Chicago",
    category: "Food & Beverage",
    name: "Brian Malarkey",
    image:
      "https://planned-cms-staging.imgix.net/_1600xAUTO_crop_center-center_none_ns/Food-Chef-Chicago-_-Planned-1.webp",
  },
  {
    city: "Sydney",
    category: "Venues",
    name: "Pullman Quay",
    image:
      "https://planned-cms-staging.imgix.net/_1600xAUTO_crop_center-center_none_ns/Event-venue-Sydney-_-Planned.webp",
  },
  {
    city: "Miami",
    category: "Experiences",
    name: "Aerial Artistry",
    image:
      "https://planned-cms-staging.imgix.net/_1600xAUTO_crop_center-center_none_ns/Experience-Event-Miami-_-Planned.webp",
  },
  {
    city: "New York",
    category: "Food & Beverage",
    name: "The Lush Life",
    image:
      "https://planned-cms-staging.imgix.net/_1600xAUTO_crop_center-center_none_ns/Cocktail-Party-New-York.webp",
  },
];

export default function EventSuppliersComponent() {
  return (
    <div className="mx-auto pt-20">
      <div className="lg:px-5">
        <section className="flex flex-col items-center rounded-2xl bg-black py-5 text-white md:rounded-[20px] md:px-32 md:py-32">
          <div className="px-5 text-center md:max-w-[660px]">
            <p className="mb-3 text-[12px] font-medium text-blue-500">
              More than just venues
            </p>
            <h2 className="text-[20px] lg:text-[40px] bp:text-[40px] bp2:text-700 text-primary font-medium leading-10 md:text-4xl">
              All your event suppliers in one marketplace
            </h2>
            <p className="mt-6 text-[15px] lg:text-[18px] bp2:text-200 text-secondary">
              Get access to a global network of 230,000+ venues, hotels,
              caterers, entertainers, and everything in between.
            </p>
          </div>

          {/* Mobile Marquee */}
          {/* md:hidden */}
          <div className="mt-10 w-full overflow-x-hidden max-w-7xl">
            <Marquee direction="right" speed={90}>
              <div className="flex space-x-5 py-10">
                {data.concat(data).map((item, index) => (
                  <div
                    key={index}
                    className="w-[200px] flex-shrink-0 rounded-xl bg-white/10 p-1 backdrop-blur-md odd:-translate-y-5 even:translate-y-5"
                  >
                    <div
                      className="relative aspect-[3/4] w-full h-full rounded-lg bg-cover bg-center flex flex-col justify-between"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="relative flex flex-col items-start p-1">
                        <p className="inline-block rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-black backdrop-blur-md">
                          {item.city}
                        </p>
                      </div>
                      <div className="relative flex flex-col items-start px-3 pb-2">
                        <p className="text-[12px] font-medium text-white">
                          {item.category}
                        </p>
                        <h3 className="text-[18px] font-semibold text-white whitespace-nowrap">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>

          {/* Desktop Parallax Grid */}
          {/* <div className="hidden md:block w-full mt-20">
            <ParallaxScroll images={data.map((d) => d.image)} />
          </div> */}

          <div className="mt-10">
            <Link
              href="/"
              className="text-[16px] items-center px-4 py-2 text-white bg-black border-2 border-white rounded-[5px] hover:bg-white hover:text-black transition"
            >
              Explore the marketplace
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function ParallaxScroll({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("h-[40rem] overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-6xl mx-auto gap-10 py-10 px-4">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <img
                src={el}
                className="h-80 w-full object-cover object-center rounded-lg"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <img
                src={el}
                className="h-80 w-full object-cover object-center rounded-lg"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <img
                src={el}
                className="h-80 w-full object-cover object-center rounded-lg"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
