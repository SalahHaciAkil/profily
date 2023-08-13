import { settingI, homeI } from "@/assets/icons";
interface NavItem {
  name: string;
  icon: string;
  link: string;
}
export const NAV_LIST_ITEMS: NavItem[] = [
  {
    name: "Dashboard",
    icon: homeI,
    link: "/dashboard",
  },
  {
    name: "Experiences",
    icon: homeI,
    link: "/dashboard",
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
