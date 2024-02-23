/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { H, Hprops } from "../components/H";
import { P } from "../components/P";
import { Section } from "../components/Section";

export const About = () => {
  return (
    <Section styles="px-2 md:px-8 w-full max-w-screen-lg mx-auto relative -top-12 md:top-0">
      <div className="grid grid-cols-1">
        <div className="mb-2"></div>
        <div className="pb-2">
          <H type={Hprops.h3} styles="pt-2 pb-4 font-bold text-gray-600">
            About me
          </H>
          <div className="md:pl-4">
            <P styles="text-md text-gray-600">
              I'm a Frontend Developer with over four years of experience,
              specializing in ReactJS. I love diving into the latest tech,
              whether it's styled-components, TypeScript, or playing around with
              Node.js and Next.js on the side.
            </P>
            <P styles="text-md text-gray-600">
              Outside of work, you'll find me tinkering with code, experimenting
              with new ideas, and occasionally dabbling in Python. I'm a quick
              learner who's always up for a challenge!
            </P>
            <P styles="text-md text-gray-600">
              Being a remote worker for more than three years, I've mastered the
              art of self-organization and thrive in collaborative team
              settings. I'm all about delivering top-notch results while keeping
              things fun and engaging.
            </P>
          </div>
        </div>
      </div>
      <div className="border-b w-full mb-4 mt-4"></div>
    </Section>
  );
};
