"use client";
import { SiteCard } from "@/app/(dashboards)/dashboard/sites/components";
import { ConfirmModal, Modal } from "@/components/Modals";
import React from "react";
function SitesView() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        CLICK ME{" "}
      </button>
      <ConfirmModal
        isOpen={isOpen}
        message="Are you sure you wanna delete this ?"
        onCancel={() => setIsOpen(false)}
        onConfirm={() => {}}
      />
      <Modal onClose={() => setIsOpen2(false)} isOpen={isOpen2}>
        <div >
          <h3 className="mb-4 text-xl font-medium text-gray-900">
            Sign in to our platform
          </h3>
          <form className="space-y-6" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900 "
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-700 hover:underline ">
                Lost Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Login to your account
            </button>
            <div className="text-sm font-medium text-gray-500">
              Not registered?{" "}
              <a href="#" className="text-blue-700 hover:underline">
                Create account
              </a>
            </div>
          </form>
        </div>
      </Modal>
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

export default SitesView;
