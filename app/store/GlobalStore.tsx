"use client";
import React, {
  Dispatch,
  createContext,
  useContext,
  useState,
  SetStateAction,
} from "react";

export type GlobalContextProps = {
  language: {
    lang: string;
    set: Dispatch<SetStateAction<string>>;
  };
  theme: {
    type: string;
    set: Dispatch<SetStateAction<string>>;
  };
};

export const GlobalContext = createContext<any>({});

export const GlobalStore: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>("light");
  const [lang, setLang] = useState<string>("en");

  const context = {
    language: {
      lang,
      set: setLang,
    },
    theme: {
      type: theme,
      set: setTheme,
    },
  };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  return context;
};
