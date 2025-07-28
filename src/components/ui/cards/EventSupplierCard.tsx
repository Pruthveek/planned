import React from "react";

interface EventSupplierCardProps {
  image: string;
  name: string;
  category: string;
  city: string;
}

const EventSupplierCard: React.FC<EventSupplierCardProps> = ({
  image,
  name,
  category,
  city,
}) => {
  return (
    <div className="min-w-[200px] lg:min-w-[125px] flex-shrink-0 rounded-xl bg-[#2B2B2B] hover:bg-transparent group p-1.5 backdrop-blur-md odd:-translate-y-2 even:translate-y-2">
      <div className="overflow-hidden rounded-xl">
        <div
          className="relative aspect-[3/4] w-full h-full rounded-lg bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* Top-left city badge */}
          <div className="absolute top-2 left-2 z-10">
            <p className="inline-block rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-black backdrop-blur-md">
              {city}
            </p>
          </div>

          {/* Bottom-left category and name */}
          <div className="absolute bottom-2 left-2 z-10">
            <p className="text-[12px] font-medium text-white">{category}</p>
            <h3 className="text-[18px] font-semibold text-white whitespace-nowrap">
              {name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSupplierCard;
