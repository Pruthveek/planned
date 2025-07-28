"use client";

import Marquee from "react-fast-marquee";
import {
  useScroll,
  useTransform,
  useSpring,
  motion,
} from "framer-motion";
import { useRef } from "react";
import CustomButton from "@/components/ui/buttons/CoustomButton";
import { eventSuppliersData } from "@/data/eventSuppliersData";
import EventSupplierCard from "@/components/ui/cards/EventSupplierCard";

export default function EventSuppliersComponent() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // More dynamic parallax effect with spring smoothing
  const oddTranslate = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const evenTranslate = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const smoothOdd = useSpring(oddTranslate, {
    stiffness: 50,
    damping: 20,
  });
  const smoothEven = useSpring(evenTranslate, {
    stiffness: 50,
    damping: 20,
  });

  type EventSupplier = typeof eventSuppliersData[number];
  const columns: EventSupplier[][] = [[], [], [], [], []];
  eventSuppliersData.forEach((item, i) => {
    columns[i % 5].push(item);
  });

  return (
    <div className="mx-auto pt-20">
      <div className="lg:px-5">
        <section
          ref={containerRef}
          className="flex flex-col items-center rounded-2xl bg-black py-5 text-white md:rounded-[20px] md:px-32 md:py-32"
        >
          <div className="px-5 text-center md:max-w-[660px] pb-10">
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

          {/* Mobile - Horizontal Marquee */}
          <div className="lg:hidden mt-10 w-full overflow-x-hidden max-w-7xl">
            <Marquee direction="right" speed={90}>
              <div className="flex space-x-5 py-10">
                {eventSuppliersData.concat(eventSuppliersData).map((item, index) => (
                  <EventSupplierCard
                    key={index}
                    image={item.image}
                    name={item.name}
                    city={item.city}
                    category={item.category}
                  />
                ))}
              </div>
            </Marquee>
          </div>

          {/* Desktop - Staggered Scroll Columns */}
          <div className="hidden lg:grid grid-cols-5 gap-3 mt-16 max-w-7xl w-full">
            {columns.map((column, colIndex) => (
              <motion.div
                key={colIndex}
                style={{
                  y: colIndex % 2 === 0 ? smoothEven : smoothOdd,
                }}
                className="flex flex-col"
              >
                {column.map((item, index) => (
                  <EventSupplierCard
                    key={`${colIndex}-${index}`}
                    image={item.image}
                    name={item.name}
                    city={item.city}
                    category={item.category}
                  />
                ))}
              </motion.div>
            ))}
          </div>

          <div className="mt-20 lg:mt-40">
            <CustomButton
              text="Explore the marketplace"
              href="/"
              variant="secondary"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
