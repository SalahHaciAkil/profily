import React from "react";
interface Props {
  children: React.ReactNode;
}

function SectionWrapper({ children }: Props) {
  return <div className="">{children}</div>;
}

export default SectionWrapper;
