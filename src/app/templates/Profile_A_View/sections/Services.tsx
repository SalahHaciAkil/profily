import { ProfileServiceCard } from "@/app/templates/components/ui";
import React from "react";

const array = [0, 0, 0, 0, 0, 0];
function Services() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-5 w-fit mx-auto lg:mx-0 self-start px-6 mb-6">
        <h5 className="text-primary-400">FEATURES</h5>
        <h1 className="text-6xl dark:text-slate-300 font-bold">What I Do</h1>
      </div>{" "}
      <div className="flex flex-row flex-wrap px-6 lg:gap-8">
        {array.map((_, index) => {
          return <ProfileServiceCard key={index} />;
        })}
      </div>
    </div>
  );
}

export default Services;
