import ServiceStatCard from "@/components/ui/cards/ServiceStatCard";
import { serviceStats } from "@/data/serviceStats";
import { PiHandCoinsLight } from "react-icons/pi";

export default function ServiceSection() {
  return (
    <section className="flex justify-center w-full px-5 py-14 md:px-28 lg:px-24">
      <div className="flex flex-col justify-center items-center mx-5 border-t border-gray-300 max-w-7xl pt-40">
        <PiHandCoinsLight className="w-14 h-14 opacity-70"/>
        <h1 className="max-w-md text-[35px] md:text-[40px] text-primary text-center font-medium">
          World-class service that generates savings
        </h1>

        <div className="grid w-full grid-cols-1 divide-y divide-gray-300 pt-5 lg:w-4/5 lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:pt-10">
          {serviceStats.map((stat, index) => (
            <ServiceStatCard
              key={index}
              value={stat.value}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
