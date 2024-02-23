/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { H, Hprops } from "../components/H";
import { P } from "../components/P";
import { Section } from "../components/Section";
import { PiPushPinLight } from "react-icons/pi";
import React from "react";

type ExperienceSectionProps = {
  id: number;
  jobTitle: string;
  company: string;
  location: string;
  duration: string;
  keyAchivements: string[];
  tags: string[];
  isLast: boolean;
};

const workExperience = [
  {
    id: 0,
    jobTitle: "FRONTEND DEVELOPER",
    company: "IMMFLY GROUP",
    location: "BARCELONA - SPAIN",
    duration: "MARCH 2023 / CURRENT",
    keyAchivements: [
      "Developed and maintained responsive web applications using ReactJS, resulting in improved user experience and increased engagement.",
      "Collaborated with cross-functional teams to design and implement new features.",
      "Implemented best practices for code quality, including unit testing and code reviews.",
      "Migrate of legacy codebase to TypeScript, enhancing maintainability and scalability of the application.",
      "Implement new features and components using StyledComponent as styling tool.",
      "Strong understanding of RESTful API principles, with hands-on experience in integrating frontend applications with backend services.",
    ],
    tags: [
      "React.js",
      "StyledComponents",
      "TypeScript",
      "Git",
      "Remote Work",
      "Jest",
      "CSS",
      "JavaScript",
      "API REST",
      "AGILE",
    ],
  },
  {
    id: 1,
    jobTitle: "FRONTEND DEVELOPER",
    company: "QIDA HOMECARE",
    location: "BARCELONA - SPAIN",
    duration: "JUNE 2019 / FEBRUARY 2022",
    keyAchivements: [
      "Develop and maintain responsive web applications using ReactJS, leveraging modern best practices to ensure optimal user experience and engagement.",
      "Collaborate closely with cross-functional teams, including designers and backend developers, to conceptualize, design, and implement new features and functionalities.",
      "Implement and enforce best practices for code quality, including comprehensive unit testing, code reviews, and documentation.",
      "Proficiency in creating PDF documents with Odoo, leveraging Qweb templating engine to generate dynamic and customizable reports.",
      "Experience working with MobX State Tree for state management, ensuring efficient data flow and application state synchronization.",
      "Strong understanding of RESTful API principles, with hands-on experience in integrating frontend applications with backend services.",
    ],
    tags: [
      "React.js",
      "StyledComponents",
      "Odoo",
      "Git",
      "Remote Work",
      "Jest",
      "CSS",
      "JavaScript",
      "AGILE",
      "Qweb",
      "Python",
      "Mobx",
      "API REST",
      "React-hook-form",
    ],
  },
  {
    id: 1,
    jobTitle: "TEAM LEADER",
    company: "SELLYTEL GROUP SPAIN",
    location: "BARCELONA - SPAIN",
    duration: "NOVEMBER 2013 / MARCH 2017",
    keyAchivements: [
      "Successfully led a diverse team of 10 members from various cultural backgrounds and countries, fostering a collaborative and inclusive work environment.",
      "Streamlined support operations by implementing efficient scheduling systems, resulting in improved team productivity and timely resolution of customer queries.",
      "Mentored team members in resolving complex technical issues related to Google Workspace services, enhancing their troubleshooting skills.",
      "Facilitated regular team meetings and performance evaluations, providing constructive feedback and recognition to team members.",
      "Developed and implemented standardized procedures and documentation for common support issues, reducing escalations and enhancing the overall customer experience.",
      "Acted as a liaison between frontline support agents and upper management, effectively communicating team accomplishments, challenges, and resource requirements",
    ],
    tags: [
      "Google Workspace",
      "Support Management",
      "Team Leadership",
      "Cross-functional Collaboration",
      "Troubleshooting",
      "Training and Development",
      "Performance Evaluation",
      "Customer Satisfaction",
      "Process Improvement",
      "Communication Skills",
      "Technical Support",
      "Problem Solving",
      "Workflow Optimization",
      "Service Delivery",
    ],
  },
];

const Tag = ({ value }: { value: string }) => {
  return (
    <div className="bg-indigo-500 text-white p-1 px-2 rounded text-sm">
      {value}
    </div>
  );
};

const ExperienceSection = ({
  jobTitle,
  company,
  location,
  duration,
  keyAchivements,
  tags,
  isLast,
}: ExperienceSectionProps) => {
  return (
    <ul className="md:pl-4">
      <li>
        <div className=" gap-2 items-center font-mono pb-2">
          <H type={Hprops.h5} styles="font-bold text-gray-600 font-mono">
            {jobTitle}
          </H>
          <div className="flex md:gap-2 item-start md:items-end flex-col md:flex-row font-mono">
            <P styles="text-gray-600">{company}</P>
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
  return (
    <Section styles="px-2 md:px-8 w-full max-w-screen-lg mx-auto relative -top-12 md:top-0">
      <div className="grid grid-cols-1">
        <div className="mb-2"></div>
        <div className="pb-2 flex flex-1 gap-2 ">
          <div className="flex-1">
            <H type={Hprops.h3} styles="py-2 font-bold text-gray-600">
              Work Experience
            </H>
            {workExperience.map((experience, index) => (
              <ExperienceSection
                key={experience.id}
                {...experience}
                isLast={workExperience.length - 1 === index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="border-b w-full mb-4 mt-4"></div>
    </Section>
  );
};
