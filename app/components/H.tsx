import { ReactNode } from "react";
import React from "react";
import { useTranslation } from "../hooks/use-translation";

type CompomentProps = {
  color?: string;
  children?: ReactNode;
  type: Hprops;
  styles?: string;
  value: string;
};

enum Sizes {
  h1 = "text-4xl",
  h2 = "text-3xl",
  h3 = "text-2xl",
  h4 = "text-xl",
  h5 = "text-lg",
}

export enum Hprops {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
}

export const H = ({
  color = "",
  type,
  styles,
  children,
  value,
}: CompomentProps) => {
  const translation = useTranslation(value);
  const className = `${color} ${styles} ${Sizes[Hprops[type]]} mb-2 font-sans`;
  const UI = Hprops[type];

  if (translation) {
    return <UI className={className}>{translation}</UI>;
  }

  return <UI className={className}>{children}</UI>;
};
