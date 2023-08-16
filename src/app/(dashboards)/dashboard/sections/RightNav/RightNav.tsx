import React from "react";

import { NavLink } from "@/app/(dashboards)/types";
import {
  Divider,
  NavListGroup,
  NavListItem,
} from "@/app/(dashboards)/dashboard/sections/RightNav/components";

interface Props {
  navListItems: NavLink[];
}

function RightNav({ navListItems }: Props) {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-3 transition-transform -translate-x-full border-r  sm:translate-x-0 bg-secondary-100"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-secondary-100">
        <ul className="space-y-2">
          {navListItems.map((item) => (
            <>
              {item?.type === "group" && (
                <NavListGroup
                  name="Settings"
                  list={item.links!}
                  icon={navListItems[0].icon}
                />
              )}
              {item?.type === "divider" && <Divider text={item.name} />}
              {!item?.type && (
                <NavListItem
                  key={item.name}
                  name={item.name}
                  icon={item.icon}
                  link={item.link}
                />
              )}
            </>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default RightNav;
// "use client";
// import React from "react";
// import { navListItems } from "@/constants/dashboard";
// import {
//   AppName,
//   Divider,
//   NavListItem,
// } from "@/app/dashboard/sections/RightNav/components";

// function DropDownItems(props: any) {
//   const [isOpen, setIsOpen] = React.useState(false);

//   const toggleDropDown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative inline-block group w-full">
//       <button
//         type="button"
//         onClick={toggleDropDown}
//         className="flex w-full gap-2 p-3 text-white hover:bg-slate-700 cursor-pointer"
//       >
//         {props.title}
//       </button>
//       <ul
//         className={`${
//           isOpen ? "h-fit" : "h-0 overflow-hidden"
//         }  py-1 shadow-lg transition-[height]  duration-300 opacity-100 group-hover:opacity-100`}
//       >
//         {props.items.map((item: any, index: number) => (
//           <NavListItem
//             key={index}
//             name={item.name}
//             icon={item.icon}
//             link={item.link}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }

// function RightNav() {
//   return (
//     <div className="right-nav hidden sm:block w-[260px] bg-slate-800 h-full overflow-auto">
//       <AppName />
//       <Divider text="user interface" />
//       <DropDownItems title="title" items={navListItems} />
//       <DropDownItems title="title" items={navListItems} />
//       {/* <ul className="list-item ps-2">
//         {navListItems.map((item) => (
//           <NavListItem
//             key={item.name}
//             icon={item.icon}
//             name={item.name}
//             link={item.link}
//           />
//         ))}
//       </ul> */}
//     </div>
//   );
// }

// export default RightNav;
