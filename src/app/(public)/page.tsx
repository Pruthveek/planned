import EfficientEventComponent from "@/components/Home/EfficientEventComponent";
import AutomateSourceComponent from "@/components/Home/AutomateSourceComponent";
import ServiceComponent from "@/components/Home/ServiceComponent";
import EventSuppliersComponent from "@/components/Home/EventSuppliersComponent";
import HelpClientsComponent from "@/components/Home/HelpClientsComponent";
import HelpingTeams from "@/components/Home/HelpingTeams";
import InspirationComponent from "@/components/Home/InspirationComponent";
import ImagineComponent from "@/components/Home/ImagineComponent";
import FeatureSection from "@/components/Home/FeatureSection";
import { homeFeatures } from "@/data/homeFeatures";
export default function Home() {
  return (
    <div>
      <EfficientEventComponent />
      <AutomateSourceComponent />
      {homeFeatures.map((section, idx) => (
        <FeatureSection key={idx} {...section} />
      ))}
      <ServiceComponent />
      <EventSuppliersComponent />
      <HelpClientsComponent />
      <HelpingTeams />
      <InspirationComponent />
      <ImagineComponent />
    </div>
  );
}