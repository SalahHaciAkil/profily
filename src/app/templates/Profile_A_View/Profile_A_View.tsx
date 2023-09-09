"use client";
import {
  Intro,
  Services,
  Portfolio,
  Skills,
  Contact
} from "@/app/templates/Profile_A_View/sections";
import { SectionWrapper } from "@/app/templates/components";
import MainWrapper from "@/app/templates/components/MainWrapper";
import { LeftNav, Nav } from "@/app/templates/components/ui";
import { PROFILE_NAV_LINKS } from "@/constants/templates";
import React, { useState } from "react";

function Profile_A_View() {
  const [drawerAni, setDrawerAni] = useState("-translate-x-[120%]");
  const drawerFunc = () => {
    if (drawerAni.includes("-translate-x-0"))
      setDrawerAni("-translate-x-[120%]");
    else setDrawerAni("-translate-x-0");
  };
  return (
    <>
      <Nav drawerFunc={drawerFunc} navLinks={PROFILE_NAV_LINKS} />
      <LeftNav drawerAni={drawerAni} navLinks={PROFILE_NAV_LINKS} />
      <MainWrapper>
        <SectionWrapper>
          <Intro />
        </SectionWrapper>
        <SectionWrapper>
          <Services />
        </SectionWrapper>
        <SectionWrapper>
          <Portfolio />
        </SectionWrapper>
        <SectionWrapper>
          <Skills />
        </SectionWrapper>
        <SectionWrapper>
          <Contact />
        </SectionWrapper>
      </MainWrapper>
    </>
  );
}

export default Profile_A_View;
