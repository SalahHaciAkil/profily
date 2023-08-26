import { ProfileServiceCard } from "@/app/templates/components/ui";
import React from "react";

const array = [0, 0, 0, 0, 0];
function Services() {
  return (
    <>
      {array.map((item, index) => {
        return <ProfileServiceCard key={index} />;
      })}
    </>
  );
}

export default Services;
