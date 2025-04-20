import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { LanguageCode } from "../types/language";

export function useLanguage() {
  const { i18n } = useTranslation();

  const currentLanguage: LanguageCode = i18n.language as LanguageCode;

  const changeLanguage = useCallback(
    (lang: LanguageCode) => {
      i18n.changeLanguage(lang);
    },
    [i18n]
  );

  return { currentLanguage, changeLanguage };
}
