import { SiteCard } from "@/app/(dashboards)/dashboard/sites/components";
import React from "react";
function Sites() {
  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-3 2xl:grid-cols-5 flex-wrap">
      {[...Array(5)].map((_, i) => (
        <div key={i}>
          <SiteCard
            name={"Personal site"}
            description={"This is my own site used to display my services"}
          />
        </div>
      ))}
    </div>
  );
}

export default Sites;
