"use client";
import React from "react";
import { H, Hprops } from "../components/H";
import { P } from "../components/P";
import { Section } from "../components/Section";
import Image from "next/image";
import profilePicture from "../assets/profile.png";
import { useApi } from "../api/use-api";

type Section = {
  name: string;
  position: string;
};

export const Header = () => {
  const section = useApi("resume");
  const { name, position } = section as Section;

  return (
    <div>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-40"></div>
      <Section styles="px-4 max-w-screen-lg mx-auto">
        <div className="flex gap-8 flex-col md:flex-row">
          <div className="relative md:-top-12 -top-20 bg-blue-500 h-40 w-40 rounded-full ring-4 md:mx-0 mx-auto ring-blue-500">
            <Image
              src={profilePicture}
              alt="Tiago Pinheiro"
              className=" h-40 w-40 rounded-full object-cover"
            />
          </div>
          <div className="relative -top-20 text-center md:text-left md:top-0">
            <H type={Hprops.h1} styles="pt-2 font-bold text-gray-700">
              {name}
            </H>
            <P styles="pl-2 text-xl text-gray-600 ">{position}</P>
          </div>
        </div>
      </Section>
    </div>
  );
};
