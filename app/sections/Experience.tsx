/* eslint-disable react/no-unescaped-entities */
"use client";

import { useApi } from "../api/use-api";
import { H, Hprops } from "../components/H";
import { Section } from "../components/Section";
import React from "react";
import { ExperienceSection } from "../components/ExperienceSection";

type Experience = {
  id: number;
  title: string;
  center: string;
  location: string;
  duration: string;
  keyAchivements: string[];
  tags: string[];
  isLast: boolean;
};

type Section = {
  title: string;
  experience: Experience[];
};

export const Experience = ({ type }: { type: "experience" | "education" }) => {
  const section = useApi(type);
  const { experience } = section as Section;
  const title =
    type === "education" ? "section.education" : "section.work-experience";

  return (
    <Section styles="px-2 md:px-8 w-full max-w-screen-lg mx-auto relative -top-12 md:top-0">
      <div className="grid grid-cols-1">
        <div className="mb-2"></div>
        <div className="pb-2 flex flex-1 gap-2 ">
          <div className="flex-1">
            <H
              type={Hprops.h3}
              styles="pt-2 pb-4 font-bold text-gray-600"
              value={title}
            />
            {experience.map((exp, index) => (
              <ExperienceSection
                key={exp.id}
                {...exp}
                isLast={experience.length - 1 === index}
                isTag={type === "experience"}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="border-b w-full mb-4 mt-4"></div>
    </Section>
  );
};
