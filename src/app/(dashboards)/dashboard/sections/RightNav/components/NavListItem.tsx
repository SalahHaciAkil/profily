import { NavLink } from "@/app/(dashboards)/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavListItem(props: NavLink) {
  return (
    <li>
      <Link
        href={props.link!}
        className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group"
      >
        {props.icon && (
          <Image
            src={props.icon || ""}
            alt="setting icon"
            width={22}
            height={22}
          />
        )}
        <span className="ml-3">{props.name}</span>
      </Link>
    </li>
  );
}

export default NavListItem;
