import { SiteCard } from "@/app/(dashboards)/dashboard/sites/components";
import React from "react";
function Sites() {
  return (
    <>
      <form>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 pl-10 text-sm rounded-lg  bg-white placeholder-gray-400 text-secondary outline-none border-opacity-50 border-primary-200 focus:border-b-2"
            placeholder="Search..."
            required
          />
        </div>
      </form>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 flex-wrap mt-4">
        {/* {[...Array(5)].map((_, i) => ( */}
        <div>
          <SiteCard
            name={"Personal site"}
            description={"This is my own site used to display my services"}
            thumbnailUrl="https://tse3.mm.bing.net/th?id=OIP.IaUnm6JD3StW_ea8WMVjZgHaE3&pid=Api&P=0&h=180"
          />
        </div>
        <div>
          <SiteCard
            name={"Personal site"}
            description={"This is my own site used to display my services"}
            thumbnailUrl="https://wallpapercave.com/wp/wp2610264.jpg"
          />
        </div>
        <div>
          <SiteCard
            name={"Personal site"}
            description={"This is my own site used to display my services"}
            thumbnailUrl="http://1.bp.blogspot.com/-rFBL3dgBBLk/UGja5PBDX5I/AAAAAAAAAAc/DjrONvG2eVc/s1600/Bugs-Bunny-warner-brothers-animation-71632_1024_768.jpg"
          />
        </div>
        {/* ))} */}
      </div>
    </>
  );
}

export default Sites;
