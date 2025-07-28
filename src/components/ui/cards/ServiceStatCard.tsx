import React from "react";

interface ServiceStatCardProps {
  value: string;
  description: string;
}

const ServiceStatCard: React.FC<ServiceStatCardProps> = ({ value, description }) => {
  return (
    <div className="max-w-sm flex flex-col items-center pt-10 lg:py-0 p-10">
      <h2 className="rounded-[12px] bg-blue-500/10 p-[12px] text-6xl font-medium text-blue-500">
        {value}
      </h2>
      <p className="text-12 sm:text-18 w-3/4 pt-12 text-center lg:text-20">
        {description}
      </p>
    </div>
  );
};

export default ServiceStatCard;