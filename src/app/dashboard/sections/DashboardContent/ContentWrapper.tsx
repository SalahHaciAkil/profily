// import React from "react";

// function ContentWrapper({ children }: { children: React.ReactNode }) {
//   return <div className="p-3">{children}</div>;
// }

// export default ContentWrapper;
import React from "react";

function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="p-4 sm:ml-64 flex justify-center">
        <div className="mt-14 sm:mt-1 flex-1 max-w-7xl"></div>
      </div>
    </>
  );
}

export default ContentWrapper;
