/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { H, Hprops } from "../components/H";
import { P } from "../components/P";
import { Section } from "../components/Section";
import { PiPushPinLight } from "react-icons/pi";
import React from "react";

type EducationSectionProps = {
  id: number;
  title: string;
  center: string;
  location: string;
  duration: string;
  tags: string[];
  isLast: boolean;
};

const education = [
  {
    id: 0,
    title: "FULL STACK WEB DEVELOPER REACT.JS",
    center: "FUNDACIÓ ESPLAI",
    location: "BARCELONA - SPAIN",
    duration: "2019",
    tags: [
      "React.js",
      "JavaScript",
      "API Rest",
      "Git",
      "Node.js",
      "MongoDB",
      "PostGres",
      "CSS",
      "HTML 5",
      "Jquery",
    ],
  },
  {
    id: 1,
    title: "ENVIROMENTAL SCIENCE",
    center: "INSTITUT LA GUINEUETA",
    location: "BARCELONA - SPAIN",
    duration: "2010 / 2012",
    tags: [
      "Environmental Science",
      "Ecology",
      "Climate Change",
      "Sustainability",
      "Environmental Policy",
      "Pest Control",
      "Pollution Control",
      "Natural Resource Management",
      "Environmental Law",
      "Environmental Education",
      "Water Quality",
      "Air Quality",
      "Soil Science",
    ],
  },
];

const Tag = ({ value, isLast }: { value: string; isLast: boolean }) => {
  return (
    <div className="text-gray-400 text-sm">{isLast ? value : `${value} /`}</div>
  );
};

const EducationSection = ({
  title,
  center,
  location,
  duration,
  tags,
  isLast,
}: EducationSectionProps) => {
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
          <P styles="text-gray-400 text-sm">{duration}</P>
        </div>

        <P styles="text-md text-gray-600">Skills acquired:</P>
        <div className="flex flex-wrap gap-4">
          {tags.map((tag: string, index: number) => (
            <Tag key={index} value={tag} isLast={tags.length - 1 === index} />
          ))}
        </div>
      </li>
      {isLast ? null : (
        <div className="border-b border-dashed w-full mb-4 mt-4"></div>
      )}
    </ul>
  );
};

export const Education = () => {
  return (
    <Section styles="px-2 md:px-8 w-full max-w-screen-lg mx-auto relative -top-12 md:top-0">
      <div className="grid grid-cols-1">
        <div className="mb-2"></div>
        <div className="pb-2 flex flex-1 gap-2 ">
          <div className="flex-1">
            <H type={Hprops.h3} styles="pt-2 pb-2 font-bold text-gray-600">
              Education
            </H>
            {education.map((item, index) => (
              <EducationSection
                key={item.id}
                {...item}
                isLast={education.length - 1 === index}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
