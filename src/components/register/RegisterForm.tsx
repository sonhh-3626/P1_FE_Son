import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { validateRegister } from '../../utils/validationUtils';
import authService from '../../services/authService';
import { useToast } from '../../context/ToastContext';

export default function RegisterForm() {
  const { t } = useTranslation();
  const toast = useToast();

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [role, setRole] = useState<'customer' | 'vendor'>('customer');
  const [usernameError, setUsernameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setUsernameError('');
      setEmailError('');
      setPasswordError('');

      const { isValid, errors } = validateRegister({
        username,
        email,
        password,
        role,
      });

      if (!isValid) {
        setUsernameError(errors.username || '');
        setEmailError(errors.email || '');
        setPasswordError(errors.password || '');
        return;
      }

      try {
        const { user, token } = await authService.register({
          username, email, password, role
        });
        toast.push({
          type: "success",
          title: t('register_form.register_success_title'),
          message: t('register_form.register_success_message', { username: user.username }),
        });
      } catch (err: any) {
          toast.push({
            type: "error",
            title: t('register_form.register_failure_title'),
            message: err?.message || t('register_form.register_error_message'),
          });
      }
    };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <p className="text-gray-600 text-sm mb-4">
        {t('register_form.advantages_text')}
      </p>
      <div>
        <label htmlFor="register-username" className="block text-sm font-medium text-gray-700">
          {t('register_form.username_label')} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="register-username"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {usernameError && (
          <p className="mt-1 text-sm text-red-600">{usernameError}</p>
        )}
      </div>
      <div>
        <label htmlFor="register-email" className="block text-sm font-medium text-gray-700">
          {t('register_form.email_label')} <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="register-email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && (
          <p className="mt-1 text-sm text-red-600">{emailError}</p>
        )}
      </div>
      <div>
        <label htmlFor="register-password" className="block text-sm font-medium text-gray-700">
          {t('register_form.password_label')} <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          id="register-password"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && (
          <p className="mt-1 text-sm text-red-600">{passwordError}</p>
        )}
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <input
            id="customer-radio"
            name="user-type"
            type="radio"
            className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300"
            checked={role === 'customer'}
            onChange={() => setRole('customer')}
          />
          <label htmlFor="customer-radio" className="ml-2 block text-sm font-medium text-gray-700">
            {t('register_form.customer_radio')}
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="vendor-radio"
            name="user-type"
            type="radio"
            className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300"
            checked={role === 'vendor'}
            onChange={() => setRole('vendor')}
          />
          <label htmlFor="vendor-radio" className="ml-2 block text-sm font-medium text-gray-700">
            {t('register_form.vendor_radio')}
          </label>
        </div>
      </div>
      <p className="text-gray-600 text-xs">
        {t('register_form.privacy_policy_prefix')}{' '}
        <a href="#" className="text-purple-600 hover:text-purple-500">
          {t('register_form.privacy_policy_link')}
        </a>
        .
      </p>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
      >
        {t('auth.register')}
      </button>
    </form>
  )
}
