import { PROJECT_NAME } from "@/constants/main";
import React from "react";

function AppName() {
  return (
    <div className="flex ms-3 p-3 shadow-2xl">
      <h1 className="text-2xl font-bold text-gray-200">{PROJECT_NAME}</h1>
    </div>
  );
}

export default AppName;
