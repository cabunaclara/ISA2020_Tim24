import { emailRegex, phoneNumberRegex } from '../utils/constants';
import i18n from '../i18n/i18n';

export const validateEmail = (email) =>
  emailRegex.test(email) && !!email.length ? '' : i18n.t('errorMessages.email');

export const validatePassword = (password, text = 'Password ') =>
  password.length >= 6 ? '' : i18n.t('errorMessages.password', { text });

export const validateFirstName = (name) =>
  name.length >= 2 ? '' : i18n.t('errorMessages.firstName');

export const validateLastName = (name) =>
  name.length >= 2 ? '' : i18n.t('errorMessages.lastName');

export const validateCity = (city) =>
  city.length ? '' : i18n.t('errorMessages.city');

export const validateAddress = (address) =>
  address.length ? '' : i18n.t('errorMessages.address');

export const validateCountry = (country) =>
  country.length ? '' : i18n.t('errorMessages.country');

export const validatePhoneNumber = (phoneNumber) =>
  phoneNumberRegex.test(phoneNumber) && phoneNumber.length
    ? ''
    : i18n.t('errorMessages.phoneNumber');

export const validateConfirmPassword = (password, confirmedPassword) =>
  password === confirmedPassword
    ? ''
    : i18n.t('errorMessages.confirmedPassword');

export const validateSocialSecurityNumber = (socialSecurityNumber) =>
  socialSecurityNumber.length
    ? ''
    : i18n.t('errorMessages.socialSecurityNumber');
