import Image from "next/image";
import CustomButton from "@/components/ui/buttons/CoustomButton";

interface FeatureSectionProps {
  imageUrl: string;
  imageAlt: string;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  buttonText: string;
  buttonHref: string;
  reverse?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  imageUrl,
  imageAlt,
  tag,
  title,
  description,
  bullets,
  buttonText,
  buttonHref,
  reverse = false,
}) => {
  return (
    <section className="flex justify-center w-full px-4 py-12 md:px-12 lg:px-24">
      <div className={`hidden md:flex flex-col lg:flex-row items-center gap-12 max-w-7xl w-full ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <div className="w-full lg:w-1/2">
          <p className="text-sm font-medium text-blue-500 mb-2">{tag}</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">{title}</h2>
          <p className="text-base text-gray-700 mb-4">{description}</p>
          <ul className="list-disc pl-5 text-base text-gray-700 space-y-2 mb-6">
            {bullets.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <CustomButton text={buttonText} href={buttonHref} variant="primary" />
        </div>

        <div className="w-full lg:w-1/2 flex-shrink-0">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={750}
            height={750}
            className="w-full h-auto rounded-3xl object-cover"
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-8 max-w-7xl w-full text-center">
        <div>
          <p className="text-sm font-medium text-blue-500 mb-2">{tag}</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">{title}</h2>
        </div>

        <div>
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={750}
            height={750}
            className="w-full h-auto rounded-3xl object-cover"
          />
        </div>

        <div>
          <p className="text-base text-gray-700 mb-4">{description}</p>
          <ul className="list-disc pl-5 text-base text-gray-700 space-y-2 mb-6 text-left">
            {bullets.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <CustomButton text={buttonText} href={buttonHref} variant="primary" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
