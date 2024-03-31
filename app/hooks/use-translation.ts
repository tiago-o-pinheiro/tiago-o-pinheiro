import { useGlobalContext } from "../store/GlobalStore";
import en from "../translations/en.json";
import es from "../translations/es.json";
import pt from "../translations/pt.json";

type Language = {
  [key: string]: string;
};

type UseTranslationProps = {
  [key: string]: Language;
};

const LANGUAGES: UseTranslationProps = {
  en,
  es,
  pt,
};

export const useTranslation = (key: string) => {
  const { language } = useGlobalContext();
  const selectedLanguage = LANGUAGES[language.lang];

  if (selectedLanguage && selectedLanguage[key]) {
    return selectedLanguage[key];
  } else {
    return false;
  }
};
