import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LoginForm from '../../../components/login/LoginForm';
import RegisterForm from '../../../components/register/RegisterForm';
import { useAuth } from '../../../context/AuthContext';

export default function AuthPage() {
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = useState(true);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 text-lg font-semibold ${isLogin ? 'text-[##111827]' : 'text-gray-500'}`}
            onClick={() => setIsLogin(true)}
          >
            {t('auth.login')}
          </button>
          <button
            className={`px-4 py-2 text-lg font-semibold ${!isLogin ? 'text-[##111827]' : 'text-gray-500'}`}
            onClick={() => setIsLogin(false)}
          >
            {t('auth.register')}
          </button>
        </div>

        {isLogin ? (
          <LoginForm />
        ) : (
          <RegisterForm />
        )}
      </div>
    </div>
  );
}
