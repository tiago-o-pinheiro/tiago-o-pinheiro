import { ReactNode } from "react";
import React from "react";
import { useTranslation } from "../hooks/use-translation";

type CompomentProps = {
  children?: ReactNode;
  styles?: string;
  value?: string;
};

export const P = ({ styles = "", children, value }: CompomentProps) => {
  const translation = useTranslation({ key: value });
  const className = `${styles} mb-2`;

  if (translation) {
    return <p className={className}>{translation}</p>;
  }

  return <p className={className}>{children}</p>;
};
