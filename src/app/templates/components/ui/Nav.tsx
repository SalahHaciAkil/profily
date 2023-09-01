import { ModeSwitcher } from "@/components/ui";
import Image from "next/image";

interface prop {
  drawerFunc: () => void;
  navLinks: string[];
}
const Nav = (props: prop) => {
  const testFunc = () => {
    props.drawerFunc();
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-30 lg:px-4  bg-gray-100 border-gray-200 dark:bg-black border-b-[1px] dark:border-b-[#ffffff0d] ">
      <div className="max-w-screen-xl flex justify-between items-center mx-auto p-1">
        <a
          href="/5"
          className="flex items-center  py-2 p-8 lg:p-2 mb-4 lg-mb-0"
        >
          <Image
            width={50}
            height={50}
            className="w-16 h-16 rounded-full "
            src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
            alt="Large avatar"
          />

          <span className="self-center text-lg ml-3 font-light whitespace-nowrap dark:text-white">
            PROFILE
          </span>
        </a>

        <div
          className="hidden xl:block w-fit"
          id="navbar-default"
        >
          <ul className="font-light text-sm flex items-center md:space-x-8 dark:border-gray-700">
            {props.navLinks.map((item: string) => {
              return (
                <li key={item}>
                  <a
                    href="#"
                    className="block py-3 text-gray-700 transition-colors hover:text-primary-100 dark:hover:text-primary-100 dark:text-gray-400"
                    aria-current="page"
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={testFunc}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          <ModeSwitcher />
        </div>
      </div>
    </nav>
  );
};
export default Nav;
