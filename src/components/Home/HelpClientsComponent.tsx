import Image from "next/image";

export default function HelpClientsComponent() {
  return (
    <section className="w-full lg:px-24 mx-auto px-5 py-14  md:px-28 md:pt-20 lg:px24">
      <div className="max-w-lg mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-medium text-gray-900 leading-tight">
          How we help our enterprise clients
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        <div className="w-full h-full flex justify-center md:justify-end">
          <Image
            src="https://planned-cms-staging.imgix.net/_1600xAUTO_crop_center-center_none_ns/World-Vision-Canada-Events-Planned.jpeg"
            alt="World Vision Volunteers"
            width={600}
            height={400}
            className="rounded-xl object-cover w-full max-w-sm"
          />
        </div>

        <div className="text-left md:max-w-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            “ Planned provides us with a curated portfolio of best-in-class
            vendors and venues that helps simplify our search and saves loads of
            time securing exactly what is needed to make our events amazing. ”
          </p>
          <p className="mt-6 text-base font-semibold text-gray-900">
            — Crystal Kuepfer
          </p>
          <p className="text-sm text-gray-500">
            Project Manager of Events at World Vision Canada
          </p>
        </div>
      </div>
    </section>
  );
}