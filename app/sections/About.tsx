/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { H, Hprops } from "../components/H";
import { Section } from "../components/Section";
import { useApi } from "../api/use-api";

type Section = {
  title: string;
  content: string;
};

export const About = () => {
  const section = useApi("about");
  const { content } = section as Section;

  return (
    <Section styles="px-2 md:px-8 w-full max-w-screen-lg mx-auto relative -top-12 md:top-0">
      <div className="grid grid-cols-1">
        <div className="pb-2">
          <H
            type={Hprops.h3}
            styles="pt-2 pb-4 font-bold text-gray-600 dark:text-white"
            value="section.about-me"
          />
          <div
            className="md:pl-4 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
      <div className="border-b w-full mb-4 mt-4"></div>
    </Section>
  );
};
