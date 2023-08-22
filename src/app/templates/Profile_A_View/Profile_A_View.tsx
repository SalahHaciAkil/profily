"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./profile.module.css";

const ProfileDrawer = ({
  drawerAni,
  navBArElement,
}: {
  drawerAni: string;
  navBArElement: any;
}) => {
  return (
    <>
      <div
        id="drawer-navigation"
        className={`${drawerAni} fixed top-0 block left-0 z-40 h-screen p-4 md:hidden overflow-y-auto transition-transform bg-white w-4/6 dark:bg-black border-r-[1px] border-[#ffffff0d]`}
      >
        <div className="px-3.5 py-4 flex flex-col space-y-5">
          <img
            className="w-16 h-16 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
            alt="Large avatar"
          />
          <h5 className="leading-8 text-zinc-500">
            Inbio is a all in one personal portfolio WordPress theme. You can
            customize everything.
          </h5>
          <hr />
        </div>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {navBArElement.map((item: any) => {
              return (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center p-2 font-normal text-gray-900 rounded-lg group dark:text-slate-300"
                  >
                    <span className="ml-3 transition-transform translate-x-0 hover:translate-x-1 hover:font-normal">
                      {item}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="px-6 mt-10 space-y-6">
          <h5 className="dark:text-slate-300">FIND WITH ME </h5>
          <div className="flex space-x-5 -ml-1">
            <a href="#">
              <svg
                className="w-6 h-6 rounded-xl transition-all ease-in duration-200 hover:-translate-y-1 text-gray-800 dark:text-white "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <a href="#">
              <svg
                className="w-6 h-6 transition-all ease-in duration-200 hover:-translate-y-1 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 15 15"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  clip-rule="evenodd"
                />
                <path d="M3 5.012H0V15h3V5.012Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

interface prop {
  drawerFunc: any;
  navBArElement: any;
}
const ProfileNav = (props: prop) => {
  const testFunc = () => {
    props.drawerFunc();
  };

  return (
    <nav className="bg-gray-100 border-gray-200 dark:bg-black border-b-[1px] dark:border-b-[#ffffff0d]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <a href="/5" className="flex items-center py-2">
          <img
            className="w-16 h-16 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
            alt="Large avatar"
          />

          <span className="self-center text-lg ml-3 font-light whitespace-nowrap dark:text-white">
            PROFILE
          </span>
        </a>
        <button
          onClick={testFunc}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-light text-sm flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
            {props.navBArElement.map((item: string) => {
              return (
                <li key={item}>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded transition-all hover:text-primary-100 md:bg-transparent md:p-0 dark:hover:text-primary-100 dark:text-white md:dark:text-gray-400"
                    aria-current="page"
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

function Profile_A_View() {
  const navBArElement = [
    "HOME",
    "FEATURES",
    "PORTFOLIO",
    "TESTIMONIAL",
    "CLIENTS",
    "PRICING",
    "BLOG",
    "CONTACTS",
  ];
  const [drawerAni, setDrawerAni] = useState("-translate-x-[120%]");
  const [,] = useState("bg");
  const drawerFunc = () => {
    if (drawerAni.includes("-translate-x-0"))
      setDrawerAni("-translate-x-[120%]");
    else setDrawerAni("-translate-x-0");
  };
  return (
    <div className="bg-red-300">
      <ProfileNav drawerFunc={drawerFunc} navBArElement={navBArElement} />
      <ProfileDrawer drawerAni={drawerAni} navBArElement={navBArElement} />
    </div>
  );
}

export default Profile_A_View;
