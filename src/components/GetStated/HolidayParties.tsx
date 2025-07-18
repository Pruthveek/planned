"use client";

import React, { useState } from "react";
import DashedBorderTag from "../ui/dashed-border-tag";
import HolidayPartiesCard from "./HolidayPartiesCard";
import { holidayPartiesCardData } from "@/data/holidayPartiesCardData";
import { AnimatePresence, motion } from "framer-motion";

const CARDS_PER_PAGE = 4;

export default function HolidayParties() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(holidayPartiesCardData.length / CARDS_PER_PAGE);

  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const currentCards = holidayPartiesCardData.slice(
    startIndex,
    startIndex + CARDS_PER_PAGE
  );

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <section className="py-16 flex flex-col items-center">
      {/* Heading */}
      <div className="gap-5 flex flex-col items-center ">
        <DashedBorderTag tag={"Event Stories"} />
        <div className="flex flex-col items-center max-w-lg text-center gap-2">
          <h1 className="text-primary text-2xl xl:text-4xl font-medium leading-[40px] xl:leading-[48px] whitespace-pre-line">
            From offsites to holiday parties
            <br />
            —we’ve planned it all
          </h1>
          <p className="text-secondary text-base leading-6 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur. Varius suscipit tellus
            ultricies tempus tristique dictum.
          </p>
        </div>
      </div>

      {/* Cards Grid with Animation */}
      <div className="px-4 grid xl:grid-cols-2 xl:grid-rows-2 gap-8 mt-10 min-h-[500px]4">
        <AnimatePresence mode="wait">
          {currentCards.map((items,index) => (
            <motion.div
              key={items.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <HolidayPartiesCard
                bgsrc={items.bgsrc}
                logosrc={items.logosrc}
                statistic={items.statistic}
                statistictext={items.statistictext}
                text={items.text}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-3 py-1.5 border rounded text-sm disabled:opacity-50"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 17 15"
            fill="none"              
            transform="scale(-1,1)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="animated-arrow  svelte-9qliu"
              d="M3 7H10.5"
              stroke="#41494D"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
            <path
              className="animated-arrow arrow-head  svelte-9qliu"
              d="M7.25 10.5L10.75 7L7.25 3.5"
              stroke="#41494D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        {generatePageNumbers().map((page, index) => {
          if (page === "...") {
            return (
              <span key={index} className="px-2 text-gray-400 text-sm">
                ...
              </span>
            );
          }
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(Number(page))}
              className={`px-3 py-1.5 border rounded text-sm ${
                currentPage === page
                  ? "bg-primary text-white border-primary"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-3 py-1.5 border rounded text-sm disabled:opacity-50 group"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="animated-arrow  svelte-9qliu"
              d="M3 7H10.5"
              stroke="#9CA5A9"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
            <path
              className="animated-arrow arrow-head  svelte-9qliu"
              d="M7.25 10.5L10.75 7L7.25 3.5"
              stroke="#9CA5A9"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
}