"use client";
import { useGlobalContext } from "../store/GlobalStore";
import about from "./about.json";
import education from "./education.json";
import experience from "./experience.json";
import resume from "./resume.json";

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
      education: CommonProps[];
    };
  };
  experience: {
    [key: string]: {
      title: string;
      experience: CommonProps[];
    };
  };
  resume: Profile;
};

const SECTION: SectionProps = {
  about,
  education,
  experience,
  resume,
};

type SectionKey = "about" | "education" | "experience" | "resume";

export const useApi = (section: SectionKey) => {
  const { language } = useGlobalContext();
  return SECTION[section][language.lang ?? "en"];
};
