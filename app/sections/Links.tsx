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

export const Links = () => {
  return (
    <Section styles="md:px-4 px-2 relative -top-14 md:-top-6 max-w-screen-lg mx-auto">
      <div className="flex flex-col sm:flex-row md:flex md:gap-8 md:justify-between pt-4 md:divide-x md:divide-gray-200">
        <div className="md:pl-4 md:pb-0 pb-4">
          <P styles="text-gray-600">LinkeIn</P>
          <div className="flex font-mono text-gray-400 gap-2">
            <PiLinkedinLogoThin className="text-xl" />
            <Link
              href="https://www.linkedin.com/in/tiago-pinheiro-freitas/"
              target="_blank"
              className="text-sm"
            >
              Tiago Oliver
            </Link>
          </div>
        </div>
        <div className="md:pl-4 md:pb-0 pb-4">
          <P styles="text-gray-600">Email</P>
          <div className="flex font-mono text-gray-400 gap-2">
            <PiAtThin className="text-xl" />
            <Link
              href="mailto:tiagoliver@protonmail.com"
              target="_blank"
              className="text-sm"
            >
              tiagoliver@protonmail.com
            </Link>
          </div>
        </div>
        <div className="md:pl-4 md:pb-0 pb-4">
          <P styles="text-gray-600">Location</P>
          <div className="flex font-mono text-gray-400 gap-2">
            <PiHouseLight className="text-xl" />
            <P styles="text-sm ">Barcelona - Spain</P>
          </div>
        </div>
        <div className="md:pl-4 md:pb-0 pb-4">
          <P styles="text-gray-600">Work permit</P>
          <div className="flex font-mono text-gray-400 gap-2">
            <PiBriefcaseLight className="text-xl" />
            <P styles="text-sm ">Europe / South America</P>
          </div>
        </div>
      </div>
    </Section>
  );
};
