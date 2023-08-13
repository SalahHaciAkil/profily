import React from "react";

function Dummy() {
  return (
    <>
      <div className="h-full flex gap-4">
        <div className="left-navigation hidden sm:block w-[280px] bg-black shadow-2xl h-full"></div>
        <div className="right-content h-full w-full flex-1 bg-red-600"></div>
      </div>
    </>
  );
}

export default Dummy;
