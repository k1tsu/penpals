import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJson from './i18n/en.json';
import ptJson from './i18n/pt.json';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        common: enJson
      },
      pt: {
        common: ptJson
      }
    },
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
