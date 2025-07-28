import EventBooking from "@/components/GetStated/EventBooking";
import HolidayParties from "@/components/GetStated/HolidayParties";
import PerfactEvent from "@/components/GetStated/PerfactEvent";
import PlanTheVison from "@/components/GetStated/PlanTheVison";
import PricingComponent from "@/components/GetStated/PricingComponent";
import StartYourEvent from "@/components/GetStated/StartYourEvent";
import WallofLove from "@/components/GetStated/WallOfLove";
import OfferCard from "@/components/layout/public/OfferCard";
import React from "react";

export default function GetStarted() {
  return (
    <>
      <div className="x-auto relative bg-[#F7F9FA]">
        <PerfactEvent />
        <PlanTheVison />
        <HolidayParties />
        <EventBooking />
        <PricingComponent />
        <WallofLove/>
        <StartYourEvent />
        <OfferCard/>
      </div>
    </>
  );
}
