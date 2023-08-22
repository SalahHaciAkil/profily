import React from "react";

function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <div className="max-w-7xl w-full">{children}</div>
    </div>
  );
}

export default MainWrapper;
