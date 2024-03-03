/* eslint-disable react/no-unescaped-entities */
"use client";
import { H, Hprops } from "../components/H";
import { Section } from "../components/Section";
import React from "react";
import { useApi } from "../api/use-api";
import { P } from "../components/P";

export const Languagues = () => {
  const section = useApi("languages");

  return (
    <Section styles="px-2 md:px-8 w-full max-w-screen-lg mx-auto relative -top-12 md:top-0">
      <H
        type={Hprops.h3}
        styles="py-2 font-bold text-gray-600"
        value="section.languages"
      />

      <div className="flex flex-col md:flex-row justify-between sm:flex-row pt-4 px-2 md:px-0 md:divide-x md:divide-gray-200 md:justify-start">
        {section.map(({ name, proficiency }) => (
          <div
            key={name}
            className="md:px-4 flex font-mono text-gray-400 gap-2"
          >
            <P styles="font-mono text-gray-500 font-bold">{name}</P>
            <P styles="font-mono text-gray-400">/</P>
            <P styles="font-mono text-gray-400">{proficiency}</P>
          </div>
        ))}
      </div>
      <div className="border-b w-full mb-4 mt-4"></div>
    </Section>
  );
};
