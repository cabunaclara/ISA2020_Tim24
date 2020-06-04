import { emailRegex } from '../utils/constants';
import i18n from '../i18n/i18n';

export const validateEmail = (email) =>
  emailRegex.test(email) && !!email.length ? '' : i18n.t('errorMessages.email');

export const validatePassword = (password) =>
  password.length >= 6 ? '' : i18n.t('errorMessages.password');
