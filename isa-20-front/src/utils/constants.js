export const PagePath = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/regiter',
  CHANGE_PASSWORD: '/change-password',
  UPDATE_USER: '/update-user',
};

export const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
export const phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export const emailTaken = 'Email you chose is taken. Please choose another one';
export const createdUserMessage = 'Profile successfuly created';
export const wrongPassword =
  'Password is wrong, please enter the correct password';
export const userUpdatedMessage = 'Profile successfully updated';
