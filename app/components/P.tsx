import { ReactNode } from "react";
import { Colors, TONE } from "../theme/palette";

type CompomentProps = {
  children: ReactNode;
  styles?: string;
};

export const P = ({ styles = "", children }: CompomentProps) => {
  const className = `${styles} mb-2`;
  return <p className={className}>{children}</p>;
};
