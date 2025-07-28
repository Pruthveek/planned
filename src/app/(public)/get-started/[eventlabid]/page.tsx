import Link from "next/link";
import React from "react";
import Image from "next/image";
import ImagineComponent from "@/components/Home/ImagineComponent";
export default function page() {
  return (
    <section>
      <div>
        <div className="bg-black rounded-3xl px-4 py-20 lg:py-40 mt-16 mx-4 stiky text-white flex flex-col items-center ">
          <p>
            Customer story &nbsp;•&nbsp;{" "}
            <span className="text-gray-400">1 min read</span>{" "}
          </p>
          <h1 className="text-center text-2xl lg:text-5xl mt-5 lg:max-w-3xl">
            View New York's best corporate event suppliers in action at
            EventLab1
          </h1>
        </div>
        <div className="flex flex-col items-center py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 max-w-5xl mx-4 pt-16 px-5">
            <div className=" space-y-8">
              <div className="w-auto max-w-sm">
                <h5 className="text-2xl">About</h5>
                <p className="text-xl opacity-70">
                  EventLab is an event series that invites corporate event
                  planners and sourcing professionals to network while
                  discovering the best event trends and suppliers.
                </p>
              </div>
              <div>
                <h5 className="text-2xl">Event size</h5>
                <p className="text-xl opacity-70">75 people</p>
              </div>
              <div>
                <h5 className="text-2xl">Location</h5>
                <p className="text-xl opacity-70">New York City, USA</p>
              </div>
            </div>
            <div className="col-span-2 space-y-16">
              <div className="bg-[#F1F2F3] space-y-8 p-6 rounded-2xl">
                <h5 className="text-2xl">What's in this article</h5>
                <div space-y-4>
                  <div>
                    <Link href="/" className="text-xl space-x-4 group">
                      <span className="text-2xl text-gray-400">→</span>
                      <span className="relative transition-colors group-hover:text-blue-500 border-b group-hover:border-0 border-gray-400">
                        EventLab intro
                      </span>
                    </Link>
                  </div>
                  <div>
                    <Link href="/" className="text-xl space-x-4 group">
                      <span className="text-2xl text-gray-400">→</span>
                      <span className="relative transition-colors group-hover:text-blue-500 border-b group-hover:border-0 border-gray-400">
                        EventLab results
                      </span>
                    </Link>
                  </div>
                  <div>
                    <Link href="/" className="text-xl space-x-4 group">
                      <span className="text-2xl text-gray-400">→</span>
                      <span className="relative transition-colors group-hover:text-blue-500 border-b group-hover:border-0 border-gray-400">
                        4 AM
                      </span>
                    </Link>
                  </div>
                  <div>
                    <Link href="/" className="text-xl space-x-4 group">
                      <span className="text-2xl text-gray-400">→</span>
                      <span className="relative transition-colors group-hover:text-blue-500 border-b group-hover:border-0 border-gray-400">
                        Book the coolest DJ for your next event
                      </span>
                    </Link>
                  </div>
                  <div>
                    <Link href="/" className="text-xl space-x-4 group">
                      <span className="text-2xl text-gray-400">→</span>
                      <span className="relative transition-colors group-hover:text-blue-500 border-b group-hover:border-0 border-gray-400">
                        Lume Studio
                      </span>
                    </Link>
                  </div>
                  <div>
                    <Link href="/" className="text-xl space-x-4 group">
                      <span className="text-2xl text-gray-400">→</span>
                      <span className="relative transition-colors group-hover:text-blue-500 border-b group-hover:border-0 border-gray-400">
                        Surprise attendees with an immersive venue
                      </span>
                    </Link>
                  </div>
                  <div>
                    <Link href="/" className="text-xl space-x-4 group">
                      <span className="text-2xl text-gray-400">→</span>
                      <span className="relative transition-colors group-hover:text-blue-500 border-b group-hover:border-0 border-gray-400">
                        Purslane
                      </span>
                    </Link>
                  </div>
                  <div>
                    <Link href="/" className="text-xl space-x-4 group">
                      <span className="text-2xl text-gray-400">→</span>
                      <span className="relative transition-colors group-hover:text-blue-500 border-b group-hover:border-0 border-gray-400">
                        Delicious food and drinks, guilt-free
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xl">
                  {" "}
                  In February 2023, EventLab gathered the best event
                  professionals and suppliers in New York City for an
                  exceptional networking event. This page highlights the venue
                  and vendors that made 75 busy corporate planners brave the
                  winter cold and turned the event into a night to remember.
                </p>
              </div>
              <div className="grid grid-col-1 md:grid-cols-3 gap-8">
                <div className="flex">
                  <p className="w-full text-center bg-[#F1F2F3] p-9 rounded-3xl ">
                    <span className="text-2xl font-bold">97</span>
                    <br />
                    <span className="text-lg text-[#545555]">RSVP guests</span>
                  </p>
                </div>
                <div className="flex">
                  <p className="w-full text-center bg-[#F1F2F3] p-9 rounded-3xl ">
                    <span className="text-2xl font-bold">75</span>
                    <br />
                    <span className="text-lg text-[#545555]">Attendees</span>
                  </p>
                </div>
                <div className="flex">
                  <p className="w-full text-center bg-[#F1F2F3] p-9 rounded-3xl ">
                    <span className="text-2xl font-bold">$32,000</span>
                    <br />
                    <span className="text-lg text-[#545555]">Budget</span>
                  </p>
                </div>
              </div>
              <div className="grid space-y-16">
                <div className="grid grid-cols-3 gap-8">
                  <div className="col-span-3 md:col-span-1">
                    <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
                      <Image
                        src="https://planned-cms-staging.imgix.net/_800xAUTO_crop_center-center_none_ns/4AM-Planned-live-entertainment-for-corporate-events.webp"
                        alt="eventimage"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm opacity-70">
                      Spencer Ludwig, one of 4am many talented artists
                    </p>
                  </div>
                  <div className="space-y-4 col-span-3 md:col-span-2">
                    <h5 className="text-xl font-semibold">
                      Live entertainment
                    </h5>
                    <p className="min-text-lg ">
                      4AM is a full-service talent management, DJ booking, event
                      production, and music curation. Bringing a Grammy-Award
                      winner DJ and trumpeter, they created a sense of
                      excitement and made every attendee4 reach out for their
                      phone to capture the moment. 4 AM's artists are available
                      everywhere in the US, and globally on demand.
                    </p>
                  </div>
                </div>
                <div className="bg-[#C2E6FF] space-y-4 py-8 rounded-2xl grid justify-center">
                  <h1 className=" max-w-md md:max-w-lg lg:max-w-xl text-xl md:text-3xl  text-primary text-center font-medium">
                    Book the coolest DJ for your next event
                  </h1>
                  <div className="text-center">
                    <Link
                      href="/"
                      className="inline-block px-5 py-2 text-sm font-medium text-white bg-black border-2 border-black rounded-md hover:bg-transparent hover:text-black transition"
                    >
                      Reach out to 4 AM
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
              card
          </div>
        </div>
      </div>
      <div><ImagineComponent /></div>
    </section>
  );
}
