"use client";
import React from "react";
import Link from "next/link";
import { P } from "../components/P";
import { Section } from "../components/Section";
import {
  PiAtThin,
  PiLinkedinLogoThin,
  PiBriefcaseLight,
  PiHouseLight,
} from "react-icons/pi";
import { useApi } from "../api/use-api";

type Section = {
  name: string;
  email: {
    title: string;
    value: string;
  };
  location: {
    title: string;
    value: string;
  };
  workPermit: {
    title: string;
    value: string[];
  };
  social: {
    linkedIn: {
      title: string;
      value: string;
    };
  };
};

const Tags = ({ tag, isLast }: { tag: string; isLast: boolean }) => {
  return `${tag} ${isLast ? "" : "/ "}`;
};

export const Links = () => {
  const section = useApi("resume");
  const { name, email, location, workPermit, social } = section as Section;

  return (
    <Section styles="md:px-4 px-2 relative -top-14 md:-top-6 max-w-screen-lg mx-auto">
      <div className="flex flex-col sm:flex-row md:flex md:gap-8 md:justify-between pt-4 md:divide-x md:divide-gray-200">
        <div className="md:pl-4 md:pb-0 pb-4">
          <P styles="text-gray-600">{social.linkedIn.title}</P>
          <div className="flex font-mono text-gray-400 gap-2">
            <PiLinkedinLogoThin className="text-xl" />
            <Link
              href={social.linkedIn.value}
              target="_blank"
              className="text-sm"
            >
              LinkedIn
            </Link>
          </div>
        </div>
        <div className="md:pl-4 md:pb-0 pb-4">
          <P styles="text-gray-600">{email.title}</P>
          <div className="flex font-mono text-gray-400 gap-2">
            <PiAtThin className="text-xl" />
            <Link
              href="mailto:tiagoliver@protonmail.com"
              target="_blank"
              className="text-sm"
            >
              {email.value}
            </Link>
          </div>
        </div>
        <div className="md:pl-4 md:pb-0 pb-4">
          <P styles="text-gray-600">{location.title}</P>
          <div className="flex font-mono text-gray-400 gap-2">
            <PiHouseLight className="text-xl" />
            <P styles="text-sm ">{location.value}</P>
          </div>
        </div>
        <div className="md:pl-4 md:pb-0 pb-4">
          <P styles="text-gray-600">{workPermit.title}</P>
          <div className="flex font-mono text-gray-400 gap-2">
            <PiBriefcaseLight className="text-xl" />
            <P styles="text-sm ">
              {workPermit.value.map((value, index) => (
                <Tags
                  key={index}
                  tag={value}
                  isLast={workPermit.value.length - 1 === index}
                />
              ))}
            </P>
          </div>
        </div>
      </div>
    </Section>
  );
};
