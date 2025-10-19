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

export const validateRegister = (data: {
  username: string;
  email: string;
  password: string;
  role: string;
}) => {
  let errors: {
    username?: string;
    email?: string;
    password?: string;
    role?: string;
  } = {};
  let isValid = true;

  if (!data.username || data.username.trim().length < 6) {
    errors.username = i18n.t("validation.username_min_length");
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = i18n.t("validation.email_invalid");
    isValid = false;
  }

  if (!data.password || data.password.length < 6) {
    errors.password = i18n.t("validation.password_min_length");
    isValid = false;
  }

  if (!["customer", "vendor"].includes(data.role)) {
    errors.role = i18n.t("validation.role_invalid");
    isValid = false;
  }

  return { isValid, errors };
};
