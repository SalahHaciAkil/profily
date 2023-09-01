import React from "react";
interface Props {
  children: React.ReactNode;
}

function SectionWrapper({ children }: Props) {
  return (
    <div className="border-b-[2px] dark:border-b-[#ffffff0d] mb-20">
      <div className="mb-[3rem]">{children}</div>
    </div>
  );
}

export default SectionWrapper;
