import Link from "next/link";
import Image from "next/image";

export default function SmartEvents() {
  return (
    <section className="w-full px-4 py-12 md:px-12 lg:px-24 flex justify-center">
      <div className="hidden md:flex flex-col lg:flex-row items-center gap-12 max-w-7xl w-full">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <p className="text-sm font-medium text-blue-500 mb-2">Suppliers marketplace</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            Smart and easy sourcing for all your events
          </h2>
          <p className="text-base text-gray-700 mb-4">
            We use ChatGPT to automate the back-and-forth with suppliers and ensure every planner receives at least three quotes for all their event's needs. This saves users up to 15h per event.
          </p>
          <ul className="list-disc pl-5 text-base text-gray-700 space-y-2 mb-6">
            <li>
              Source from 230,000+ venues, caterers, AV, and more on Planned's marketplace
            </li>
            <li>Push your preferred suppliers with negotiated rates</li>
            <li>
              Leverage automated quote collections to make sure planners always get the best price
            </li>
          </ul>
          <Link
            href="/"
            className="inline-block px-5 py-2 text-sm font-medium text-white bg-black border-2 border-black rounded-md hover:bg-transparent hover:text-black transition"
          >
            Learn more
          </Link>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <Image
            src="https://planned-cms-staging.imgix.net/home/_2000xAUTO_crop_center-center_none_ns/Feature1_find_suppliers.jpg"
            alt="Planned-AI-Sourcing"
            width={750}
            height={750}
            className="w-full h-auto rounded-3xl object-cover"
          />
        </div>
      </div>
      <div className="md:hidden flex flex-col lg:flex-row items-center gap-12 max-w-7xl w-full">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center">
          <p className="text-sm font-medium text-blue-500 mb-2">Suppliers marketplace</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            Smart and easy sourcing for all your events
          </h2>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <Image
            src="https://planned-cms-staging.imgix.net/home/_2000xAUTO_crop_center-center_none_ns/Feature1_find_suppliers.jpg"
            alt="Planned-AI-Sourcing"
            width={750}
            height={750}
            className="w-full h-auto rounded-3xl object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          
          <p className="text-base text-gray-700 mb-4">
            We use ChatGPT to automate the back-and-forth with suppliers and ensure every planner receives at least three quotes for all their event's needs. This saves users up to 15h per event.
          </p>
          <ul className="list-disc pl-5 text-base text-gray-700 space-y-2 mb-6">
            <li>
              Source from 230,000+ venues, caterers, AV, and more on Planned's marketplace
            </li>
            <li>Push your preferred suppliers with negotiated rates</li>
            <li>
              Leverage automated quote collections to make sure planners always get the best price
            </li>
          </ul>
          <div className="text-center">
            <Link
            href="/"
            className="inline-block px-5 py-2 text-sm font-medium text-white bg-black border-2 border-black rounded-md hover:bg-transparent hover:text-black transition"
          >
            Learn more
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

