import React from "react";

type SeparatorProps = {
  type?: "solid" | "dashed" | "dotted" | "double";
};

export const Separator = ({ type }: SeparatorProps) => {
  const style = type ? `border-${type}` : "";
  return <div className={`border-b ${style} w-full mb-4 mt-4`}></div>;
};
