import React from "react";

export const timelineData = [
  {
    title: "Day 1",
    content: (
      <TimelineItem
        imageSrc="https://planned-cms-staging.imgix.net/_1600xAUTO_crop_center-center_none_ns/Event-specialist.png"
        title="Meet with your event specialist"
        description="Submit a quick event brief and get matched with an event expert.
        They’ll immediately be in touch to give you a tour of the platform
        and iron out details before getting started"
      />
    ),
  },
  {
    title: "Day 2",
    content: (
      <TimelineItem
        imageSrc="https://planned-cms-staging.imgix.net/_1600xAUTO_crop_center-center_none_ns/day2.webp"
        title="Compare quotes"
        description="We’ll source hotels, caterers, entertainers, and everything in between. You’ll
receive 3 detailed quotes for each.
Compare offers and pricing side-by-side in our platform, discard or select
options, and leave feedback at anytime.
We won’t stop sourcing until you find your perfect match."
      />
    ),
  },
  {
    title: "Day 3",
    content: (
      <TimelineItem
        imageSrc="https://planned-cms-staging.imgix.net/_1600xAUTO_crop_center-center_none_ns/day3.webp"
        title="We negotiate prices and terms"
        description="Once you’ve made your choice, we negotiate the best price and inclusions on your behalf. We make sure the contract is to your advantage, and create a contract summary for you."
      />
    ),
  },
  {
    title: "Day 4",
    content: (
      <TimelineItem
        imageSrc="https://planned-cms-staging.imgix.net/_1600xAUTO_crop_center-center_none_ns/day4.webp"
        title="Manage your guests in Planned"
        description="Track progress in real time and access free planning tools.
RSVP forms, event site builders, guest management dashboards, checklists,
agendas—everything you need to keep you organized and your attendees
informed."
      />
    ),
  },
];

// Reusable timeline item
function TimelineItem({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-[20px] xl:gap-[32px] flex-col sm:flex-row sm:items-center flex-1 pb-[48px]">
      <div className="relative h-full bg-white rounded-[12px] aspect-[16/10] max-w-[568px] w-full overflow-hidden shadow-plan-event-card">
        <div className="relative h-full w-full overflow-hidden bg-cover bg-center bg-no-repeat">
          <div className="rounded-[10px] bg-white">
            <img
              src={imageSrc}
              alt="Timeline visual"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[8px] max-w-[500px] w-full">
        <h4 className="text-[18px] text-primary font-medium leading-[28px]">
          {title}
        </h4>
        <p className="text-[14px] text-secondary font-normal leading-[20px] xl:whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
}
