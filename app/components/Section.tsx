import React from "react";
import { ReactNode } from "react";

type Styles = {
  styles?: string;
  children: ReactNode;
};

export const Section = ({ styles, children }: Styles) => {
  const className = styles ? styles : "mb-2";
  return <section className={className}>{children}</section>;
};
