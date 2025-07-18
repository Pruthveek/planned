import Image from "next/image";

export default function ServiceComponent() {
  return (
    <section className=" flex justify-center w-full lg:px-24 mx-auto px-5 py-14  md:px-28 md:pt-20 lg:px24">
      <div className="flex flex-col justify-center items-center mx-5 border-t-1 border-gray-300 max-w-7xl">
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-20"
        >
          <path
            d="M29.3141 18.0959C28.0738 18.9801 26.5561 19.5002 24.9168 19.5002C20.7287 19.5002 17.3335 16.105 17.3335 11.9168C17.3335 7.72867 20.7287 4.3335 24.9168 4.3335C27.6316 4.3335 30.0132 5.76007 31.3529 7.90447M13.0002 43.5223H18.6558C19.3932 43.5223 20.1261 43.6101 20.8409 43.7856L26.8168 45.2377C28.1134 45.5536 29.4642 45.5843 30.7744 45.3299L37.3816 44.0444C39.127 43.7044 40.7326 42.8686 41.9909 41.6446L46.6656 37.0972C48.0006 35.8008 48.0006 33.6971 46.6656 32.3985C45.4637 31.2293 43.5604 31.0977 42.2006 32.0892L36.7525 36.064C35.9722 36.6344 35.0228 36.9415 34.0464 36.9415H28.7854L32.1341 36.9413C34.0216 36.9413 35.5505 35.454 35.5505 33.618V32.9533C35.5505 31.4287 34.4839 30.0994 32.964 29.7309L27.7954 28.4739C26.9543 28.2699 26.0929 28.1668 25.227 28.1668C23.1365 28.1668 19.3526 29.8976 19.3526 29.8976L13.0002 32.5541M43.3335 14.0835C43.3335 18.2717 39.9383 21.6668 35.7502 21.6668C31.562 21.6668 28.1668 18.2717 28.1668 14.0835C28.1668 9.89534 31.562 6.50016 35.7502 6.50016C39.9383 6.50016 43.3335 9.89534 43.3335 14.0835ZM4.3335 31.6335L4.3335 44.2002C4.3335 45.4136 4.3335 46.0203 4.56965 46.4838C4.77737 46.8915 5.10883 47.2229 5.51652 47.4307C5.97999 47.6668 6.58671 47.6668 7.80016 47.6668H9.53349C10.7469 47.6668 11.3537 47.6668 11.8171 47.4307C12.2248 47.2229 12.5563 46.8915 12.764 46.4838C13.0002 46.0203 13.0002 45.4136 13.0002 44.2002V31.6335C13.0002 30.42 13.0002 29.8133 12.764 29.3498C12.5563 28.9422 12.2248 28.6107 11.8171 28.403C11.3537 28.1668 10.7469 28.1668 9.5335 28.1668L7.80016 28.1668C6.58672 28.1668 5.97999 28.1668 5.51652 28.403C5.10883 28.6107 4.77737 28.9422 4.56965 29.3498C4.3335 29.8133 4.3335 30.42 4.3335 31.6335Z"
            stroke="#0A1013"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <h1 className=" max-w-md text-[35px] md:text-[40px]  text-primary text-center font-medium">
          World-class service that generates savings
        </h1>
        <div className="grid w-full grid-cols-1 divide-y-1 divide-gray-300 pt-5 lg:w-4/5 lg:grid-cols-3 lg:divide-x-1 lg:divide-y-0 lg:pt-10">
          <div className=" max-w-sm flex flex-col items-center pt-10 lg:py-0">
            <h2 className="rounded-[12px] bg-blue-500/10 p-[12px] text-6xl font-medium text-blue-500">
              2.5x
            </h2>
            <p className="text-12 sm:text-18 w-3/4 pb-12 pt-12 text-center lg:text-20">
              Source 2.5 times faster than traditional TMCs
            </p>
          </div>
          <div className="max-w-sm flex flex-col items-center pt-10 lg:py-0">
            <h2 className="rounded-[12px] bg-blue-500/10 p-[12px] text-6xl font-medium text-blue-500">
              12%
            </h2>
            <p className="text-12 sm:text-18 w-3/4 pb-12 pt-12 text-center lg:text-20">
              Save 12% on your entire T&E budget
            </p>
          </div>
          <div className=" max-w-sm flex flex-col items-center p-10 lg:py-0">
            <h2 className="rounded-[12px] bg-blue-500/10 p-[12px] text-6xl font-medium text-blue-500">
              9.6
            </h2>
            <p className="text-12 sm:text-18 w-3/4 pb-12 pt-12 text-center lg:text-20">
              9.6 users out of ten highly recommend our service
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
