import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./assets/translations/en.json";
import translationVI from "./assets/translations/vi.json";
const resources = {
    en: {
        translation: translationEN,
    },
    vi: {
        translation: translationVI,
    },
};

i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
        formatSeparator: ",",
    },
    
    keySeparator: false,
    resources,
});

export default i18n;    