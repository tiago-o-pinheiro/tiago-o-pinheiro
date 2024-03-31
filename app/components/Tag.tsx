import React from "react";

type TagProps = {
  value: string;
  isLast?: boolean;
  isTag?: boolean;
  color?: string;
};

export const Tag = ({ value, isLast, isTag, color }: TagProps) => {
  const styles = isTag
    ? "bg-indigo-500 text-white p-1 px-2 rounded text-sm"
    : "text-gray-400 dark:text-gray-300 text-sm";
  const content = isTag ? `${value}` : `${isLast ? value : `${value} /`}`;
  return <div className={styles}>{content}</div>;
};
