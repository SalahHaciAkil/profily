import { ModeSwitcher } from "@/components/ui";
import { Profile_A_View } from "@/app/templates";
import Link from "next/link";
import React from "react";

function Profile() {
  // here we need to get the site raw data from the server, and decide which template to use
  return (
    <>
      <Profile_A_View />
    </>
  );
}

export default Profile;
