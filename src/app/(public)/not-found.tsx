import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Oops! This page doesn't exist." />
      </Head>

      <section className="flex flex-col items-center justify-center md:px-20 py-44 text-center bp:py-120">
        <div className="flex flex-col items-center space-y-[16px] lg:space-y-[32px]">
          <div>
            <h1 className="text-3xl md:text-6xl font-medium md:leading-10">404</h1>
            <h2 className="text-xl md:text-3xl md:leading-10">
              Oops! Nothing to see here.
            </h2>
          </div>

          <Image
            src="https://planned-marketing-git-get-started-gift-card-planned.vercel.app/img/404-img.svg"
            alt="404-page not found"
            height={120}
            width={370}
            className="h-[120px] w-[370px]"
          />

          <p className="text-sm md:text-base text-gray-500">
            Sometimes things don’t go as planned. Care to try again?
          </p>

          <Link href="/">
            <span className="bg-black text-white border-2 border-black rounded-md px-5 py-2 text-sm hover:bg-transparent hover:text-black transition cursor-pointer">
              Go to homepage
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
