import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { validateLogin } from '../../utils/validationUtils';
import { useAppDispatch } from '../../redux/store';
import { loginStart, loginFailure } from '../../redux/features/userSlice';
import authService from '../../services/authService';
import { useAuth } from '../../context/AuthContext';
import { type User } from '../../types/User';

export default function LoginForm() {
  const { t } = useTranslation();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [usernameError, setUsernameError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [loginError, setLoginError] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const { login } = useAuth();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { isValid, errors } = validateLogin(username, password);

    setUsernameError(errors.username || '');
    setPasswordError(errors.password || '');
    setLoginError(null);

    if (isValid) {
      dispatch(loginStart());
      try {
        const { user, token } = await authService.login({ email: username, password });
        login(user as User);
        alert('Login successful!');
      } catch (error: any) {
        dispatch(loginFailure(error.message || t('login_form.login_failed')));
        setLoginError(error.message || t('login_form.login_failed'));
      }
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <p className="text-gray-600 text-sm mb-4">
        {t('login_form.account_prompt')}
      </p>
      <div>
        <label htmlFor="login-username" className="block text-sm font-medium text-gray-700">
          {t('login_form.username_email_label')} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="login-username"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {usernameError && <p className="mt-2 text-sm text-red-600">{usernameError}</p>}
      </div>
      <div>
        <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">
          {t('login_form.password_label')} <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          id="login-password"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p className="mt-2 text-sm text-red-600">{passwordError}</p>}
      </div>
      {loginError && <p className="mt-2 text-sm text-red-600">{loginError}</p>}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            {t('login_form.remember_me')}
          </label>
        </div>
        <a href="#" className="text-sm text-purple-600 hover:text-purple-500">
          {t('login_form.lost_password')}
        </a>
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
      >
        {t('login_form.log_in_button')}
      </button>
    </form>
  );
}
