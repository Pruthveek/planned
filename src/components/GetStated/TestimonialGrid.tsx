"use client";

import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "@/data/testimonialsData";

export default function TestimonialGrid() {
  const [showAll, setShowAll] = useState(false);
  const [columns, setColumns] = useState(1); // 1 by default (mobile)

  // Handle responsive columns based on screen width
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width >= 1024) setColumns(3); // lg and up
      else if (width >= 768) setColumns(2); // md to lg
      else setColumns(1); // mobile
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const maxItems = showAll ? Infinity : 3;

  // Dynamically split data into `columns` arrays
  const splitData = (data: typeof testimonialsData, cols: number) => {
    const result = Array.from({ length: cols }, () => []);
    data.forEach((item, i) => {
      return result[i % cols].push(item);
    });
    return result;
  };

  const splitColumns = splitData(testimonialsData, columns);

  return (
    <div className="px-4 py-16 max-w-6xl mx-auto">
      <div className={`grid grid-cols-1 ${columns === 2 ? "md:grid-cols-2" : ""} ${columns === 3 ? "lg:grid-cols-3" : ""} gap-6`}>
        {splitColumns.map((column, idx) => (
          <div key={idx} className="flex flex-col gap-6">
            {column.slice(0, maxItems).map((item) => (
              <TestimonialCard key={item.id} testimonial={item} />
            ))}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm px-4 py-2 bg-black text-white rounded-md shadow-md hover:opacity-90 transition"
        >
          <span className="inline-flex items-center gap-2">
            <img
              src="https://planned-marketing-git-get-started-gift-card-planned.vercel.app/img/home/create-event/star.png"
              alt="Star"
              width={15}
              height={15}
            />
            {showAll ? "9.6 CSAT rated | View less ↑" : "9.6 CSAT rated | View more ↓"}
          </span>
        </button>
      </div>
    </div>
  );
}