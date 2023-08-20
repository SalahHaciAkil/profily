import {
  AboutMeView,
  EducationsView,
  ExperiencesView,
  ProjectsView,
  ServicesView,
  SettingsView,
  SkillsView,
} from "@/app/(dashboards)/site/[id]/[section]/sections";
import React from "react";
// this page is /site/[id]/[section]/page.tsx

const SECTIONS_VIEW = {
  services: ServicesView,
  projects: ProjectsView,
  educations: EducationsView,
  "about-me": AboutMeView,
  experiences: ExperiencesView,
  skills: SkillsView,
  settings: SettingsView,
};

interface SiteProps {
  params: {
    id: string;
    section:
      | "services"
      | "projects"
      | "educations"
      | "about-me"
      | "experiences"
      | "skills"
      | "settings";
  };
}

function Site({ params }: SiteProps) {
  const { id, section } = params;
  const SectionView = SECTIONS_VIEW[section];

  if (!SectionView) {
    throw new Error(`Not Found Route: ${section}`);
  }
  return (
    <div>
      <h1>
        <SectionView />
      </h1>
    </div>
  );
}

export default Site;
