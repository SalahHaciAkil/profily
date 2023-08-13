import { ContentWrapper, Nav, RightNav } from "@/app/dashboard/sections";

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
      <RightNav />
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
}