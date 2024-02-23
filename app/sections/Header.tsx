import React from "react";
import { H, Hprops } from "../components/H";
import { P } from "../components/P";
import { Section } from "../components/Section";

export const Header = () => {
  return (
    <div>
      <div className="bg-indigo-400 h-40"></div>
      <Section styles="px-4 max-w-screen-lg mx-auto">
        <div className="flex gap-8 flex-col md:flex-row">
          <div className="relative md:-top-12 -top-20 bg-indigo-600 h-40 w-40 rounded-full ring-4 md:mx-0 mx-auto"></div>
          <div className="relative -top-20 text-center md:text-left md:top-0">
            <H type={Hprops.h1} styles="pt-2 font-bold">
              Tiago Pinheiro
            </H>
            <P styles="pl-2 text-xl text-gray-600 ">Frontend Developer</P>
          </div>
        </div>
      </Section>
    </div>
  );
};
