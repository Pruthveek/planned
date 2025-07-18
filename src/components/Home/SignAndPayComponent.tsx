import Link from "next/link";
import Image from "next/image";

export default function SignAndPayComponent() {
  return (
    <section className="flex justify-center w-full lg:px-24 mx-auto px-5 py-14  md:px-28 md:pt-20 lg:px24">
      <div className="hidden md:flex flex-col lg:flex-row items-center gap-12 max-w-7xl w-full">
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <Image
            src="https://planned-cms-staging.imgix.net/_2000xAUTO_crop_center-center_none_ns/easy-payments@2x.png"
            alt="easy-payments"
            width={750}
            height={750}
            className="w-full h-auto rounded-3xl object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <p className="text-sm font-medium text-blue-500 mb-2">
            Skip contracting
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            Sign and pay through Planned
          </h2>
          <p className="text-base text-gray-700 mb-4">
            No more waiting on legal. No more last-minute contract request.
          </p>
          <ul className="list-disc pl-5 text-base text-gray-700 space-y-2 mb-6">
            <li>
              Sign and pay through Planned, with your preferred payment method
            </li>
            <li>Permit Planned to execute contracts on your behalf</li>
            <li>
              Automatically push your addendum to all contracts shared through
              Planned
            </li>
          </ul>
          <Link
            href="/"
            className="inline-block px-5 py-2 text-sm font-medium text-white bg-black border-2 border-black rounded-md hover:bg-transparent hover:text-black transition"
          >
            Learn more
          </Link>
        </div>
      </div>
      <div className="md:hidden flex flex-col lg:flex-row items-center gap-12 max-w-7xl w-full">
        <div className="w-full lg:w-1/2 text-center">
          <p className="text-sm font-medium text-blue-500 mb-2">
            Skip contracting
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            Sign and pay through Planned
          </h2>
        </div>
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <Image
            src="https://planned-cms-staging.imgix.net/_2000xAUTO_crop_center-center_none_ns/easy-payments@2x.png"
            alt="easy-payments"
            width={750}
            height={750}
            className="w-full h-auto rounded-3xl object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 ">
          <p className="text-base text-gray-700 mb-4">
            No more waiting on legal. No more last-minute contract request.
          </p>
          <ul className="list-disc pl-5 text-base text-gray-700 space-y-2 mb-6">
            <li>
              Sign and pay through Planned, with your preferred payment method
            </li>
            <li>Permit Planned to execute contracts on your behalf</li>
            <li>
              Automatically push your addendum to all contracts shared through
              Planned
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
