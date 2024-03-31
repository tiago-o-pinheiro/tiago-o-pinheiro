"use client";
import { useGlobalContext } from "../store/GlobalStore";
import about from "./about.json";
import education from "./education.json";
import experience from "./experience.json";
import resume from "./resume.json";
import personal from "./personal.json";
import languages from "./languages.json";
import skills from "./skills.json";

type CommonProps = {
  id: number;
  title: string;
  center: string;
  location: string;
  duration: string;
  keyAchivements?: string[];
  tags: string[];
};

type Profile = {
  [key: string]: {
    name: string;
    position: string;
    email: {
      title: string;
      value: string;
    };
    location: {
      title: string;
      value: string;
    };
    workPermit: {
      title: string;
      value: string[];
    };
    social: {
      linkedIn: {
        title: string;
        value: string;
      };
    };
  };
};

type Language = {
  name: string;
  proficiency: string;
};

type Skill = {
  name: string;
  category: string;
};

type Languagues = {
  [key: string]: Language[];
};

type Skills = {
  [key: string]: Skill[];
};

type SectionProps = {
  about: {
    [key: string]: {
      title: string;
      content: string;
    };
  };
  education: {
    [key: string]: {
      title: string;
      experience: CommonProps[];
    };
  };
  experience: {
    [key: string]: {
      title: string;
      experience: CommonProps[];
    };
  };
  personal: {
    [key: string]: {
      title: string;
      content: string;
    };
  };
  languages: Languagues;
  skills: Skills;
  resume: Profile;
};

const SECTION: SectionProps = {
  about,
  education,
  experience,
  personal,
  resume,
  languages,
  skills,
};

type SectionKey =
  | "about"
  | "education"
  | "experience"
  | "resume"
  | "personal"
  | "languages"
  | "skills";

export const useApi = (section: SectionKey) => {
  const { language } = useGlobalContext();
  return SECTION[section][language.lang ?? "en"];
};
