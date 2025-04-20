// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import kzCommon from "./locales/kz/common.json";
import ruCommon from "./locales/ru/common.json";
import { LanguageCode } from "./types/language";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: LanguageCode.RU,
    supportedLngs: [LanguageCode.KZ, LanguageCode.RU],
    resources: {
      KZ: { common: kzCommon },
      RU: { common: ruCommon },
    },
    ns: ["common"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
