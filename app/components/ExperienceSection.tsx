import React from "react";
import { H, Hprops } from "./H";
import { P } from "./P";
import { Tag } from "./Tag";

type ExperienceSectionProps = {
  id: number;
  title: string;
  center: string;
  location: string;
  duration: string;
  keyAchivements?: string[];
  tags: string[];
  isLast: boolean;
  isTag?: boolean;
};

export const ExperienceSection = ({
  title,
  center,
  location,
  duration,
  keyAchivements,
  tags,
  isLast,
  isTag = false,
}: ExperienceSectionProps) => {
  return (
    <ul className="md:pl-4">
      <li>
        <div className="gap-2 items-center font-mono pb-2">
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

        {keyAchivements && (
          <ul className="list-disc pl-4 text-gray-600 pb-4">
            {keyAchivements.map((achivement: string, index: number) => (
              <li key={index}>{achivement}</li>
            ))}
          </ul>
        )}

        <P
          styles="text-md text-gray-600"
          value="component.experience.skills-acquired"
        />
        <div className="flex flex-wrap gap-2">
          {tags.map((tag: string, index: number) => (
            <Tag
              key={index}
              value={tag}
              isLast={tags.length - 1 === index}
              isTag={isTag}
            />
          ))}
        </div>
      </li>
      {isLast ? null : (
        <div className="border-b border-dashed w-full mb-4 mt-4"></div>
      )}
    </ul>
  );
};
