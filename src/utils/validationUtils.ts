import i18n from "i18next";

export const validateLogin = (username: string, password: string) => {
  let errors: { username?: string; password?: string } = {};
  let isValid = true;

  if (username.length < 6) {
    errors.username = i18n.t('validation.username_min_length');
    isValid = false;
  }

  if (password.length < 6) {
    errors.password = i18n.t('validation.password_min_length');
    isValid = false;
  }

  return { isValid, errors };
};
