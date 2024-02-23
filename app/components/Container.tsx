import { ReactNode } from "react";

type Styles = {
  styles?: string;
  children: ReactNode;
};

export const Container = ({ styles, children }: Styles) => {
  const className = styles ? styles : "md:container md:mx-auto";
  return <div className={className}>{children}</div>;
};
