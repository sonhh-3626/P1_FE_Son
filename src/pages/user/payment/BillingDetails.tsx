import React, { useState, useCallback, useImperativeHandle, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import LabelForm from "../../../components/common/LabelForm";
import InputField from "../../../components/common/InputField";
import { validateBillingDetails } from '../../../utils/validationUtils';
import { type BillingDetailsData, type FormErrors, type BillingDetailsRef } from './types';
import CheckboxField from '../../../components/common/CheckboxField';

const initialFormState: BillingDetailsData = {
  first_name: '',
  last_name: '',
  company_name: '',
  country_region: 'United States (US)',
  street_address: '',
  apartment_suite: '',
  town_city: '',
  state: 'California',
  zip_code: '',
  phone: '',
  email: '',
  create_account: false,
  ship_to_a_different_address: false,
  order_notes: '',
};

const BillingDetails = forwardRef<BillingDetailsRef, {}>(({}, ref) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<BillingDetailsData>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value, type } = e.target;
    let finalValue: any = value;

    if (type === 'checkbox') {
      finalValue = (e.target as HTMLInputElement).checked;
    }

    setFormData(prev => ({
      ...prev,
      [id]: finalValue,
    }));

    if (errors[id as keyof BillingDetailsData]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  }, [errors]);

  useImperativeHandle(ref, () => ({
    validateAndGetFormData: () => {
      const { isValid, errors: newErrors } = validateBillingDetails(formData);
      setErrors(newErrors);

      return {
        data: isValid ? formData : null,
        isValid,
      };
    },
  }));

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{t('billing_details_title')}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField id="first_name" title={t('first_name')} isRequired value={formData.first_name} onChange={handleChange} error={errors.first_name} />
        <InputField id="last_name" title={t('last_name')} isRequired value={formData.last_name} onChange={handleChange} error={errors.last_name} />
      </div>

      <InputField id="company_name" title={t('company_name')} value={formData.company_name ?? ''} onChange={handleChange} error={errors.company_name} />

      <InputField
        id="country_region"
        title={t('country_region')}
        isRequired
        isSelect
        options={['United States (US)', 'Vietnam', 'Other']}
        value={formData.country_region}
        onChange={handleChange}
        error={errors.country_region}
      />

      <div className="mb-4">
        <LabelForm htmlFor="street_address" title={t('street_address')} isRequired={true} />
        <input
          type="text"
          id="street_address"
          placeholder={t('house_number_street_name')}
          className={`mt-1 block w-full border ${errors.street_address ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-2 mb-2`}
          onChange={handleChange}
          value={formData.street_address}
        />
        {errors.street_address && <p className="text-red-500 text-xs mt-1">{errors.street_address}</p>}
        <input
          type="text"
          id="apartment_suite"
          placeholder={t('apartment_suite_optional')}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          onChange={handleChange}
          value={formData.apartment_suite}
        />
      </div>

      <InputField id="town_city" title={t('town_city')} isRequired value={formData.town_city} onChange={handleChange} error={errors.town_city} />

      <InputField
        id="state"
        title={t('state')}
        isRequired
        isSelect
        options={['California', 'Texas', 'New York']}
        value={formData.state}
        onChange={handleChange}
        error={errors.state}
      />

      <InputField id="zip_code" title={t('zip_code')} isRequired value={formData.zip_code} onChange={handleChange} error={errors.zip_code} />
      <InputField id="phone" title={t('phone')} isRequired value={formData.phone} onChange={handleChange} error={errors.phone} />
      <InputField id="email" title={t('email_address')} isRequired value={formData.email} type="email" onChange={handleChange} error={errors.email} />

      <CheckboxField id="create_account" title={t('create_an_account')} checked={formData.create_account} handleChange={handleChange}/>
      <CheckboxField id="ship_to_a_different_address" title={t('ship_to_a_different_address')} checked={formData.ship_to_a_different_address} handleChange={handleChange} />

      <InputField
        id="order_notes"
        title={t('order_notes')}
        type="textarea"
        placeholder={t('order_notes_placeholder')}
        value={formData.order_notes}
        onChange={handleChange}
        error={errors.order_notes}
      />
    </div>
  )
});

export default BillingDetails;
