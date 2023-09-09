import React from "react";

function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center bg-gray-100 dark:bg-black">
      <div className="max-w-7xl w-full">{children}</div>
    </div>
  );
}

export default MainWrapper;
