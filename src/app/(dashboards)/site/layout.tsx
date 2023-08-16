import {
  ContentWrapper,
  Nav,
  RightNav,
} from "@/app/(dashboards)/dashboard/sections";
import { DASHBOARD_NAV_LIST_ITEMS } from "@/constants/dashboard";
import { SITE_NAV_LIST_ITEMS } from "@/constants/site-dashboard";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <RightNav navListItems={SITE_NAV_LIST_ITEMS} />
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
}
