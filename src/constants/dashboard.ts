import { NavLink } from "@/app/(dashboards)/types";
import { settingI, homeI, sitesI } from "@/assets/icons";

export const DASHBOARD_NAV_LIST_ITEMS: NavLink[] = [
  {
    name: "Main",
    icon: homeI,
    link: "/dashboard",
  },
  {
    name: "Sites",
    icon: sitesI,
    link: "/dashboard/sites",
  },
  {
    name: "Settings",
    icon: settingI,
    link: "/dashboard/settings",
  },
];
