export enum Colors {
  BLACK = "black",
  CURRENT = "current",
  TRANSPARENT = "transparent",
  INHERIT = "inherit",
  WHITE = "white",
  SLATE = "slate",
  GRAY = "gray",
  RED = "red",
  AMBER = "amber",
  YELLOW = "yellow",
  EMERALD = "emerald",
  SKY = "sky",
  INDIGO = "indigo",
}

export enum TONE {
  "tone-50" = "-50",
  "tone-100" = "-100",
  "tone-200" = "-200",
  "tone-300" = "-300",
  "tone-400" = "-400",
  "tone-500" = "-500",
  "tone-600" = "-600",
  "tone-700" = "-700",
  "tone-800" = "-800",
  "tone-900" = "-900",
  "tone-550" = "-550",
}

type GetColorsProps = {
  type?: string;
  color: string;
  tone?: string;
};

export const getColors = ({ type, color, tone }: GetColorsProps) => {
  const elementType = type ? type + "-" : "";
  const elementTone = tone ? "" + tone : "-50";
  return `${elementType}${color}${elementTone}`;
};
