"use client";
import React from "react";
import { Section } from "../components/Section";
import { H, Hprops } from "../components/H";
import { P } from "../components/P";
import { useApi } from "../api/use-api";
import { Separator } from "../components/Separator";

type Skill = {
  name: string;
  category: string;
};

type SkillListProps = {
  title: string;
  list: Skill[];
};

const SkillList = ({ list, title }: SkillListProps) => {
  return (
    <div className="pl-2 md:pl-0">
      <H type={Hprops.h4} styles="pb-2 text-gray-600  font-semibold">
        {title}
      </H>
      <ul className="pl-4">
        {list.map((skill, index) => (
          <li key={index} className="list-disc">
            <P styles="text-gray-400 font-mono">{skill.name}</P>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const SkillsSection = () => {
  const list = useApi("skills");
  const categoryName = [
    ...new Set(list.map(({ category }) => category)),
  ] as string[];

  return (
    <Section styles="px-2 md:px-8 w-full max-w-screen-lg mx-auto relative -top-12 md:top-0">
      <H
        type={Hprops.h3}
        styles="py-2 font-bold text-gray-600"
        value="section.technical-skills"
      />
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 md:pl-4">
        {categoryName.map((item: string, index: number) => (
          <SkillList
            key={index}
            title={item}
            list={list.filter(({ category }) => category === item)}
          />
        ))}
      </div>
      <Separator />
    </Section>
  );
};
