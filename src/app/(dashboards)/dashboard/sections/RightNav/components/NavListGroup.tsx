"use client";
import { NavListItem } from "@/app/(dashboards)/dashboard/sections/RightNav/components";
import { NavLink } from "@/app/(dashboards)/types";
import Image from "next/image";
import React from "react";
import { downArrowI } from "@/assets/icons";
interface Props {
  icon?: string;
  name: string;
  list: NavLink[];
}
function NavListGroup({ icon, list, name }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <li>
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="flex items-center w-full p-2 text-base  transition duration-75 rounded-lg group text-white hover:bg-gray-700"
        >
          <Image src={icon || ""} alt="icon" width={22} height={22} />
          <span className="flex-1 ml-3 text-left whitespace-nowrap">
            {name}
          </span>
          <Image src={downArrowI} alt="icon" width={22} height={22} />
        </button>
        {open && (
          <ul className="py-2 space-y-2">
            {list.map((item: NavLink) => (
              <>
                <NavListItem
                  name={item.name}
                  link={item.link}
                  key={item.name}
                />
              </>
            ))}
          </ul>
        )}
      </li>
    </>
  );
}

export default NavListGroup;
