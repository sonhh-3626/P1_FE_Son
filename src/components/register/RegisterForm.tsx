import { useTranslation } from 'react-i18next';

export default function RegisterForm() {
  const { t } = useTranslation();

  return (
    <form className="space-y-4">
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
        />
      </div>
      <div>
        <label htmlFor="register-email" className="block text-sm font-medium text-gray-700">
          {t('register_form.email_label')} <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="register-email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="register-password" className="block text-sm font-medium text-gray-700">
          {t('register_form.password_label')} <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          id="register-password"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <input
            id="customer-radio"
            name="user-type"
            type="radio"
            className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300"
            defaultChecked
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
