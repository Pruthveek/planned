// components/TestimonialCard.tsx
import React from "react";
import Image from "next/image";
import { Testimonial } from "@/data/testimonialsData";

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: Props) {
  if (testimonial.image) {
    return (
      <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white p-1">
        <Image
          src={testimonial.image}
          alt="testimonial"
          width={400}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>
    );
  }

  if (testimonial.quote.includes("CSAT")) {
    return (
      <div className="bg-black bg-[url(https://planned-marketing-git-get-started-gift-card-planned.vercel.app/img/home/create-event/cast-star.png)] bg-cover bg-center bg-no-repeat rounded-xl text-white p-6 text-center shadow-md ">
        <div className="text-xl inline-flex gap-2">
            <img
              src="https://planned-marketing-git-get-started-gift-card-planned.vercel.app/img/home/create-event/star.png"
              alt="Star"
              width={25}
              height={15}
            /> <p className="text-[28px] font-medium leading-[28px] font-3d ">9.6 CSAT</p></div>
        <p className="text-sm text-gray-300">rated by hundreds of planners</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
      <div>
        <h3 className="font-semibold text-[16px]">{testimonial.title}</h3>
        <p className="text-xs text-gray-500">
          <span className="font-semibold">{testimonial.author}</span> &nbsp;•&nbsp; {testimonial.role}
        </p>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i}><Image src="https://planned-marketing-git-get-started-gift-card-planned.vercel.app/img/home/create-event/rating-star.png" alt="Star" height={15} width={15}></Image></span>
        ))}
      </div>
      <div className="dashed-border border-dashed border-gray-200 border-t-[1px] w-full "></div>
      <p className="text-sm text-gray-600">{testimonial.quote}</p>
    </div>
  );
}
