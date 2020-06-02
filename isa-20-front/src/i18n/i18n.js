import i18n from 'i18next';
import enTranslations from './localization/en';

i18n.init({
  resources: {
    en: {
      translations: enTranslations,
    },
  },

  fallbackLng: 'en',
  ns: ['translations'],
  defaultNS: 'translations',
});

export default i18n;
