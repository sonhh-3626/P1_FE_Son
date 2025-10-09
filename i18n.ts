import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  lng: "vi",
  resources: {
    en: {
      translation: {
        hello: "Hello"
      }
    },
    vi: {
      translation: {
        hello: "Xin chào"
      }
    }
  }
});

export default i18n;
