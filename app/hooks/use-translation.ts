import { useGlobalContext } from "../store/GlobalStore";
import en from "../translations/en.json";
import es from "../translations/es.json";
import pt from "../translations/pt.json";

type UseTranslationProps = {
  key: string | undefined;
};

const LANGUAGUES = {
  en,
  es,
  pt,
};

export const useTranslation = ({ key }: UseTranslationProps) => {
  const { language } = useGlobalContext();

  return LANGUAGUES[language.lang][key] || false;
};
