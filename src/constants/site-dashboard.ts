import { NavLink } from "@/app/(dashboards)/types";
import { settingI, homeI } from "@/assets/icons";

export const SITE_NAV_LIST_ITEMS: NavLink[] = [
  {
    name: "About Me",
    icon: homeI,
    link: "/site:siteId/about-me",
  },

  // {
  //   name: "Experiences",
  //   icon: homeI,
  //   link: "/dashboard",
  //   type: "group",
  //   links: [
  //     {
  //       name: "Work Experiences",
  //       icon: homeI,
  //       link: "/dashboard",
  //     },
  //     {
  //       name: "Educations",
  //       icon: homeI,
  //       link: "/dashboard",
  //     },
  //   ],
  // },
  {
    name: "Services",
    icon: homeI,
    link: "/site:siteId/services",
  },
  {
    name: "Projects",
    icon: homeI,
    link: "/site:siteId/projects",
  },
  {
    name: "Skills",
    icon: homeI,
    link: "/site:siteId/skills",
  },
  {
    name: "Cv",
    type: "divider",
  },
  {
    name: "Experiences",
    icon: homeI,
    link: "/site:siteId/experiences",
  },
  {
    name: "Educations",
    icon: homeI,
    link: "/site:siteId/educations",
  },
  {
    name: "---",
    type: "divider",
  },

  {
    name: "Settings",
    icon: settingI,
    link: "/site:siteId/settings",
  },
];
