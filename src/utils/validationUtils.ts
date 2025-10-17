import i18n from 'i18next';
import { type BillingDetailsData, type FormErrors } from '../pages/user/payment/types';

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
    errors.username = i18n.t('validation.username_min_length');
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = i18n.t('validation.email_invalid');
    isValid = false;
  }

  if (!data.password || data.password.length < 6) {
    errors.password = i18n.t('validation.password_min_length');
    isValid = false;
  }

  if (!['customer', 'vendor'].includes(data.role)) {
    errors.role = i18n.t('validation.role_invalid');
    isValid = false;
  }

  return { isValid, errors };
};

export const validateBillingDetails = (data: BillingDetailsData) => {
  const errors: FormErrors = {};

  const requiredFields: (keyof BillingDetailsData)[] = [
    'first_name', 'last_name', 'country_region', 'street_address',
    'town_city', 'state', 'zip_code', 'phone', 'email'
  ];

  requiredFields.forEach(field => {
    if (!data[field] || (typeof data[field] === 'string' && data[field].trim() === '')) {
      errors[field] = i18n.t('validation.validation_required_field');
    }
  });

  if (data.email && !/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = i18n.t('validation_invalid_email');
  }

  if (data.phone && !/^[0-9\s+()-]+$/.test(data.phone)) {
    errors.phone = i18n.t('validation_invalid_phone');
  }

  if (data.zip_code && !/^\d{5}$/.test(data.zip_code)) {
    errors.zip_code = i18n.t('validation.validation_invalid_zip_code');
  }

  const isValid = Object.keys(errors).length === 0;
  return { isValid, errors };
};
