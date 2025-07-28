import React from "react";
import CustomButton from "@/components/ui/buttons/CoustomButton";

interface ImagineCardProps {
  label: string;
  title: string;
  buttonText: string;
  buttonHref: string;
  variant: "primary" | "secondary" | "tertiary";
  reverse?: boolean;
}

const ImagineCard: React.FC<ImagineCardProps> = ({
  label,
  title,
  buttonText,
  buttonHref,
  variant,
  reverse = false,
}) => {
  return (
    <div
      className={`px-10 py-16 md:px-14 md:py-16 text-center md:max-w-[660px] rounded-2xl bg-white/25 backdrop-blur-2xl shadow-xl/30 flex flex-col justify-between ${
        reverse ? "md:order-last" : ""
      }`}
    >
      <div>
        <p className="text-sm md:text-md font-medium text-blue-500 mb-3">
          {label}
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-[40px]  leading-10">
          {title}
        </h2>
      </div>
      <div className="mt-10">
        <CustomButton text={buttonText} href={buttonHref} variant={variant} />
      </div>
    </div>
  );
};

export default ImagineCard;
