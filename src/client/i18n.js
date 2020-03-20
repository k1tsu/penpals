import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJson from './translations/en.json';
import ptJson from './translations/pt.json';

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
