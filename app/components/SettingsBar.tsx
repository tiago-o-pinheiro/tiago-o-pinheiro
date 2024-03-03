"use client";
import React, { useState } from "react";
import {
  PiTranslateThin,
  PiPrinterThin,
  PiMoonThin,
  PiMoonFill,
} from "react-icons/pi";
import { useGlobalContext } from "../store/GlobalStore";

const LANGUAGES = [
  {
    id: "en",
    value: "en",
  },
  {
    id: "es",
    value: "es",
  },
  {
    id: "pt",
    value: "pt",
  },
];

const LangSelector = ({}) => {
  const { language } = useGlobalContext();
  return (
    <div className="absolute bg-white text-gray-400 p-2 rounded-sm shadow-lg top-8 right-18 flex divide-x divide-gray-200">
      {LANGUAGES.map(({ id, value }) => (
        <div
          key={id}
          className={`cursor-pointer px-1 text-xs ${
            id === language.lang ? "font-bold" : "font-normal"
          }`}
          onClick={() => language.set(id)}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export const SettingsBar = () => {
  const [lang, setLang] = useState<boolean>(false);
  const [theme, setTheme] = useState<"dark" | "light">("light");

  return (
    <div className="h-8 flex justify-end bg-gradient-to-r from-green-400 to-blue-500">
      <div className="flex w-auto px-4 p-2 divide-x divide-gray-200 items-center text-white">
        <div className="px-4 cursor-pointer" onClick={() => setLang(!lang)}>
          <PiTranslateThin />
          {lang && <LangSelector />}
        </div>
        <div className="px-4 cursor-pointer">
          {theme === "light" ? (
            <PiMoonThin onClick={() => setTheme("dark")} />
          ) : (
            <PiMoonFill onClick={() => setTheme("light")} />
          )}
        </div>
        <div className="px-4 cursor-pointer">
          <PiPrinterThin />
        </div>
      </div>
    </div>
  );
};
