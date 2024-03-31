/* eslint-disable react/no-unescaped-entities */
"use client";
import { H, Hprops } from "../components/H";
import { Section } from "../components/Section";
import React from "react";
import { useApi } from "../api/use-api";

type Section = {
  title: string;
  content: string;
};

export const Personal = () => {
  const section = useApi("personal");
  const { title, content } = section as Section;
  return (
    <Section styles="px-2 md:px-8 w-full max-w-screen-lg mx-auto relative -top-12 md:top-0">
      <H
        type={Hprops.h3}
        styles="py-2 font-bold text-gray-600 dark:text-white"
        value="section.personal"
      />
      <div
        className="md:pl-4 dark:text-gray-200"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </Section>
  );
};
