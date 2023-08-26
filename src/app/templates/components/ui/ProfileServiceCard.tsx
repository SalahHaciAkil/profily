import React from "react";

function ProfileServiceCard() {
  return (
    <div className="group w-[90%] md:w-[45%] mx-auto lg:mx-auto lg:w-[31%] h-auto rounded-xl mt-10 shadow-boxShadow transition ease-in-out bg-gradient-none hover:bg-gradient-to-tl to-[#7334f3c7] from-[#c53c3cf2] dark:bg-black dark:border-none dark:shadow-darkBoxShadow dark:hover:bg-none duration-500">
      <div className="flex flex-col space-y-7 w-full h-full p-16 transition ease-in-out shadow-insetBoxShadow dark:group-hover:shadow-hoverInsetDarkBoxShadow group-hover:-translate-y-2 group-hover:shadow-none group-hover dark:shadow-insetDarkBoxShadow duration-300">
        <svg
          className="w-10 h-10 text-primary-400  dark:text-primary-500 transition ease-in-out dark:group-hover:text-primary-400 group-hover:text-white duration-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 14h12M1 4h12M6.5 16.5h1M2 1h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
          />
        </svg>

        <h5 className="text-2xl font-semibold transition ease-in-out tracking-tight group-hover:text-white text-gray-900 dark:text-white duration-500">
          Need a help in Claim?
        </h5>

        <p className=" font-normal text-gray-500 transition ease-in-out group-hover:text-white dark:text-gray-400 duration-500">
          Go to this step by step guideline process on how to certify for your
          weekly benefits:
        </p>

        <div className="anima">
          <svg
            className="opacity-0 transition ease-in-out group-hover:opacity-100 group-hover:text-slate-200 w-6 h-6 text-primary-500 duration-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ProfileServiceCard;
