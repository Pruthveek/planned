import Image from "next/image";
import Link from "next/link";

export default function AutomateSourceComponent() {
  return (
    <section className="w-full flex justify-center lg:px-24 mx-auto px-5 py-14  md:px-28 md:pt-20 lg:px24">
      <div className="max-w-7xl px-4 py-12 md:px-12 lg:px-24 flex justify-center bg-[#EBF5FF] rounded-3xl">
        <div className=" hidden md:flex flex-col md:flex-row items-center gap-12 max-w-7xl w-full">

        <div className="w-full lg:w-1/2">
          <Image
            src="https://planned-cms-staging.imgix.net/Planned-AI-Sourcing.gif"
            alt="Planned-AI-Sourcing"
            width={800}
            height={450}
            className="w-full h-auto rounded-3xl object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <p className="bg-[#F4A000] text-[#FEEAC1] inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
            New feature
            <svg
              className="h-4 w-4"
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.62945 5.07468C4.58419 5.1262 4.30041 5.65976 3.99884 6.26033C3.2525 7.74642 3.17618 7.82274 1.69009 8.56908C1.08952 8.87065 0.55601 9.15443 0.504436 9.19969C0.383938 9.30541 0.383938 9.54662 0.504436 9.65233C0.555956 9.69759 1.08952 9.98137 1.69009 10.2829C3.17618 11.0293 3.2525 11.1056 3.99884 12.5917C4.30041 13.1923 4.58419 13.7258 4.62945 13.7773C4.73516 13.8978 4.97638 13.8978 5.08209 13.7773C5.12735 13.7258 5.41113 13.1923 5.7127 12.5917C6.45904 11.1056 6.53536 11.0293 8.02145 10.2829C8.62201 9.98137 9.15553 9.69759 9.2071 9.65233C9.3276 9.54662 9.3276 9.30541 9.2071 9.19969C9.15553 9.15443 8.62201 8.87065 8.02145 8.56908C6.53536 7.82274 6.45904 7.74642 5.7127 6.26033C5.41113 5.65976 5.12735 5.1262 5.08209 5.07468C5.03684 5.02316 4.93503 4.98096 4.85577 4.98096C4.77651 4.98096 4.6747 5.02316 4.62945 5.07468Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.02132 1.78929C8.99362 1.82082 8.81994 2.14738 8.63537 2.51494C8.17859 3.42446 8.13189 3.47117 7.22236 3.92795C6.8548 4.11251 6.52828 4.2862 6.49672 4.3139C6.42297 4.3786 6.42297 4.52622 6.49672 4.59093C6.52825 4.61862 6.8548 4.79231 7.22236 4.97687C8.13189 5.43365 8.17859 5.48036 8.63537 6.38988C8.81994 6.75744 8.99362 7.08396 9.02132 7.11553C9.08602 7.18928 9.23365 7.18928 9.29835 7.11553C9.32605 7.08396 9.49973 6.75744 9.6843 6.38988C10.1411 5.48036 10.1878 5.43365 11.0973 4.97687C11.4649 4.79231 11.7914 4.61862 11.823 4.59093C11.8967 4.52622 11.8967 4.3786 11.823 4.3139C11.7914 4.2862 11.4649 4.11251 11.0973 3.92795C10.1878 3.47117 10.1411 3.42446 9.6843 2.51494C9.49973 2.14738 9.32605 1.82082 9.29835 1.78929C9.27065 1.75776 9.20834 1.73193 9.15983 1.73193C9.11133 1.73193 9.04902 1.75776 9.02132 1.78929Z"
                fill="currentColor"
              />
            </svg>
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            Automate your sourcing with AI
          </h2>
          <p className="text-base text-gray-700 mb-6">
            We use ChatGPT to automate the back-and-forth with suppliers and
            ensure every planner receives at least three quotes for all their
            event's needs. This saves users up to 15h per event.
          </p>
          <Link
            href="/"
            className="inline-block px-5 py-2 text-sm font-medium text-white bg-black border-2 border-black rounded-md hover:bg-transparent hover:text-black transition"
          >
            Book a demo
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:hidden md:flex-row items-center gap-5 max-w-7xl w-full">
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <p className="bg-[#F4A000] text-[#FEEAC1] inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
            New feature
            <svg
              className="h-4 w-4"
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.62945 5.07468C4.58419 5.1262 4.30041 5.65976 3.99884 6.26033C3.2525 7.74642 3.17618 7.82274 1.69009 8.56908C1.08952 8.87065 0.55601 9.15443 0.504436 9.19969C0.383938 9.30541 0.383938 9.54662 0.504436 9.65233C0.555956 9.69759 1.08952 9.98137 1.69009 10.2829C3.17618 11.0293 3.2525 11.1056 3.99884 12.5917C4.30041 13.1923 4.58419 13.7258 4.62945 13.7773C4.73516 13.8978 4.97638 13.8978 5.08209 13.7773C5.12735 13.7258 5.41113 13.1923 5.7127 12.5917C6.45904 11.1056 6.53536 11.0293 8.02145 10.2829C8.62201 9.98137 9.15553 9.69759 9.2071 9.65233C9.3276 9.54662 9.3276 9.30541 9.2071 9.19969C9.15553 9.15443 8.62201 8.87065 8.02145 8.56908C6.53536 7.82274 6.45904 7.74642 5.7127 6.26033C5.41113 5.65976 5.12735 5.1262 5.08209 5.07468C5.03684 5.02316 4.93503 4.98096 4.85577 4.98096C4.77651 4.98096 4.6747 5.02316 4.62945 5.07468Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.02132 1.78929C8.99362 1.82082 8.81994 2.14738 8.63537 2.51494C8.17859 3.42446 8.13189 3.47117 7.22236 3.92795C6.8548 4.11251 6.52828 4.2862 6.49672 4.3139C6.42297 4.3786 6.42297 4.52622 6.49672 4.59093C6.52825 4.61862 6.8548 4.79231 7.22236 4.97687C8.13189 5.43365 8.17859 5.48036 8.63537 6.38988C8.81994 6.75744 8.99362 7.08396 9.02132 7.11553C9.08602 7.18928 9.23365 7.18928 9.29835 7.11553C9.32605 7.08396 9.49973 6.75744 9.6843 6.38988C10.1411 5.48036 10.1878 5.43365 11.0973 4.97687C11.4649 4.79231 11.7914 4.61862 11.823 4.59093C11.8967 4.52622 11.8967 4.3786 11.823 4.3139C11.7914 4.2862 11.4649 4.11251 11.0973 3.92795C10.1878 3.47117 10.1411 3.42446 9.6843 2.51494C9.49973 2.14738 9.32605 1.82082 9.29835 1.78929C9.27065 1.75776 9.20834 1.73193 9.15983 1.73193C9.11133 1.73193 9.04902 1.75776 9.02132 1.78929Z"
                fill="currentColor"
              />
            </svg>
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 text-center">
            Automate your sourcing with AI
          </h2>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="https://planned-cms-staging.imgix.net/Planned-AI-Sourcing.gif"
            alt="Planned-AI-Sourcing"
            width={800}
            height={450}
            className="w-full h-auto rounded-3xl object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <p className="text-base text-gray-700 mb-6 text-center">
            We use ChatGPT to automate the back-and-forth with suppliers and
            ensure every planner receives at least three quotes for all their
            event's needs. This saves users up to 15h per event.
          </p>
          <Link
            href="/"
            className="inline-block px-5 py-2 text-sm font-medium text-white bg-black border-2 border-black rounded-md hover:bg-transparent hover:text-black transition"
          >
            Book a demo
          </Link>
        </div>
      </div>
      </div>
      
    </section>
  );
}
