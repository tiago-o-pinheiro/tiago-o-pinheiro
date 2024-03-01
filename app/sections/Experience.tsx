/* eslint-disable react/no-unescaped-entities */
"use client";

import { useApi } from "../api/use-api";
import { H, Hprops } from "../components/H";
import { P } from "../components/P";
import { Section } from "../components/Section";
import React from "react";

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

const Tag = ({ value }: { value: string }) => {
  return (
    <div className="bg-indigo-500 text-white p-1 px-2 rounded text-sm">
      {value}
    </div>
  );
};

type Section = {
  title: string;
  experience: Experience[];
};

const ExperienceSection = ({
  title,
  center,
  location,
  duration,
  keyAchivements,
  tags,
  isLast,
}: Experience) => {
  return (
    <ul className="md:pl-4">
      <li>
        <div className=" gap-2 items-center font-mono pb-2">
          <H type={Hprops.h5} styles="font-bold text-gray-600 font-mono">
            {title}
          </H>
          <div className="flex md:gap-2 item-start md:items-end flex-col md:flex-row font-mono">
            <P styles="text-gray-600">{center}</P>
            <P styles="text-gray-600 hidden md:block">/</P>
            <P styles="text-gray-600 gap-2">{location}</P>
          </div>
          <P styles="text-gray-400 text-sm mb-0">{duration}</P>
        </div>

        <ul className="list-disc pl-4 text-gray-600 pb-4">
          {keyAchivements.map((achivement: string, index: number) => (
            <li key={index}>{achivement}</li>
          ))}
        </ul>

        <P styles="text-md text-gray-600">Related Tags:</P>
        <div className="flex flex-wrap gap-4">
          {tags.map((tag: string, index: number) => (
            <Tag key={index} value={tag} />
          ))}
        </div>
      </li>
      {isLast ? null : (
        <div className="border-b border-dashed w-full mb-4 mt-4"></div>
      )}
    </ul>
  );
};

export const Experience = () => {
  const section = useApi("experience");
  const { title, experience } = section as Section;
  return (
    <Section styles="px-2 md:px-8 w-full max-w-screen-lg mx-auto relative -top-12 md:top-0">
      <div className="grid grid-cols-1">
        <div className="mb-2"></div>
        <div className="pb-2 flex flex-1 gap-2 ">
          <div className="flex-1">
            <H type={Hprops.h3} styles="py-2 font-bold text-gray-600">
              {title}
            </H>
            {experience.map((exp, index) => (
              <ExperienceSection
                key={exp.id}
                {...exp}
                isLast={experience.length - 1 === index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="border-b w-full mb-4 mt-4"></div>
    </Section>
  );
};
