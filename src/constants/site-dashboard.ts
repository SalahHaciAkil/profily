import { NavLink } from "@/app/(dashboards)/types";
import { settingI, homeI } from "@/assets/icons";

export const SITE_NAV_LIST_ITEMS: NavLink[] = [
  {
    name: "Dashboard",
    icon: homeI,
    link: "/dashboard",
  },
  {
    name: "Work Experiences",
    type: "divider",
  },
  {
    name: "Experiences",
    icon: homeI,
    link: "/dashboard",
    type: "group",
    links: [
      {
        name: "Work Experiences",
        icon: homeI,
        link: "/dashboard",
      },
      {
        name: "Educations",
        icon: homeI,
        link: "/dashboard",
      },
    ],
  },
  {
    name: "Educations",
    icon: homeI,
    link: "/dashboard",
  },
  {
    name: "Projects",
    icon: homeI,
    link: "/dashboard",
  },
  {
    name: "Awards",
    icon: homeI,
    link: "/dashboard",
  },
  {
    name: "Publications",
    icon: homeI,
    link: "/dashboard",
  },
  {
    name: "Settings",
    icon: settingI,
    link: "/dashboard/settings",
  },
];
