"use client";
import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [showEventType, setShowEventType] = useState(false);
  const [showRole, setShowRole] = useState(false);

  return (
    <footer className="py-4 bg-black text-white  md:mx-4 md:mb-4 flex justify-center item-center gap-8 rounded-2xl relative z-[9999]">
    <div className="w-full p-2 flex flex-col gap-8 rounded-2xl max-w-7xl">
      <div className="flex">
        <Image
          src="https://planned-marketing-git-get-started-gift-card-planned.vercel.app/img/logo-footer.svg"
          alt="footer_logo"
          height={28}
          width={28}
        ></Image>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-12">
        <div className="col-span-2 lg:col-span-2 flex flex-col gap-6 max-w-sm">
          <p className="text-gray-400">
            Subscribe to our newsletter to get the latest Planned news, product
            updates, and industry insights delivered straight to your inbox.
          </p>
          <div className="flex w-full max-w-sm gap-1">
            <input
              type="email"
              placeholder="Email address"
              className="bg-[#424242] text-white px-2 rounded-md w-full outline-0 focus:outline outline-white"
            />
            <button className="items-center px-4 py-1 text-white bg-black border-2 border-white rounded-[5px] hover:bg-white hover:text-black transition">
              Subscribe
            </button>
          </div>
          <div className="flex gap-4 mt-4 text-xl">
            <Link href="https://www.facebook.com/weareplanned">
              <Image
                src="https://planned-cms-staging.imgix.net/icons/_2000xAUTO_crop_center-center_none_ns/facebook.svg"
                alt="footer_logo"
                height={28}
                width={28}
              ></Image>
            </Link>
            <Link href="https://www.linkedin.com/company/itsplanned/">
              <Image
                src="https://planned-cms-staging.imgix.net/icons/_2000xAUTO_crop_center-center_none_ns/linkedin.svg"
                alt="footer_logo"
                height={28}
                width={28}
              ></Image>
            </Link>
            <Link href="https://x.com/weareplanned">
              <Image
                src="https://planned-cms-staging.imgix.net/icons/_2000xAUTO_crop_center-center_none_ns/twitter.svg"
                alt="footer_logo"
                height={28}
                width={28}
              ></Image>
            </Link>
            <Link href="https://www.instagram.com/weareplanned/">
              <Image
                src="https://planned-cms-staging.imgix.net/icons/_2000xAUTO_crop_center-center_none_ns/ig.svg"
                alt="footer_logo"
                height={28}
                width={28}
              ></Image>
            </Link>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h4 className="font-semibold mb-2">Solutions</h4>

          <div className="mb-4">
            <button
              className="flex items-center justify-between w-full font-medium"
              onClick={() => setShowEventType(!showEventType)}
            >
              <span>Event type</span>
              {showEventType ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {showEventType && (
              <ul className="mt-2 text-sm text-gray-400 space-y-1">
                <li>Holiday party</li>
                <li>Conference & workshops</li>
                <li>Client presentations</li>
                <li>Internal meeting</li>
                <li>Team building</li>
              </ul>
            )}
          </div>

          <div>
            <button
              className="flex items-center justify-between w-full font-medium"
              onClick={() => setShowRole(!showRole)}
            >
              <span>Your role</span>
              {showRole ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {showRole && (
              <ul className="mt-2 text-sm text-gray-400 space-y-1">
                <li>For workplace managers</li>
                <li>For procurement teams</li>
                <li>For finance teams</li>
                <li>Become a supplier</li>
              </ul>
            )}
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-semibold mb-2">Product</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Event sourcing</li>
            <li>Planning tools</li>
            <li>Visibility & control</li>
            <li>Contracting & payments</li>
            <li>Pricing</li>
            <li>Book a demo</li>
            <li>What's new</li>
          </ul>
        </div>

        {/* Resources + Company */}
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="text-sm text-gray-400 space-y-1 mb-6">
            <li>Blog</li>
            <li>Case studies</li>
            <li>Event templates</li>
            <li>Security center</li>
          </ul>
          <h4 className="font-semibold mb-2">Marketplace</h4>
          <ul className="text-sm text-gray-400 space-y-1 mb-6">
            <li>Browse the marketplace</li>
          </ul>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-16 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500 gap-2">
        <p>
          The all–in–one sourcing, planning, & payment platform for all your
          corporate events.
        </p>
        <div className="flex flex-col lg:flex-row gap-4">
          <a href="#">Suppliers terms</a>
          <a href="#">Terms of use</a>
          <a href="#">Privacy policy</a>
          <span>© 2025 Planned</span>
        </div>
      </div>
      </div>
      </footer>
  );
}
