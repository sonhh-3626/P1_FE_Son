import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegBookmark } from "react-icons/fa";
import { validateCoupon } from '../../../services/couponService';

interface CouponInputProps {
  currentTotal: number;
  onCouponApplied: (discount: number, freeShipping: boolean, message: string) => void;
}

export default function CouponInput({ currentTotal, onCouponApplied }: CouponInputProps) {
  const { t } = useTranslation();
  const [couponCode, setCouponCode] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const handleApplyCoupon = async () => {
    if (!couponCode) {
      setMessage(t('couponInput.emptyCodeError'));
      setMessageType('error');
      return;
    }

  const result = await validateCoupon(couponCode, currentTotal);
    setMessage(result.message);
    setMessageType(result.isValid ? 'success' : 'error');
    onCouponApplied(result.discount, result.freeShipping, result.message);
  };

  return (
    <div className="bg-[#F7F7F7] p-4 rounded-md shadow-sm flex flex-col gap-3 border border-[#E5E5E5]">
      <div className="flex items-center gap-3">
        <FaRegBookmark className="text-red-500 text-xl flex-shrink-0" />
        <input
          type="text"
          id="coupon-input"
          className="flex-grow bg-[#F7F7F7] border border-gray-300 text-gray-900 focus:border-gray-400 px-3 py-4"
          placeholder={t('couponInput.placeholder')}
          value={couponCode}
          onChange={(e) => {
            const newCode = e.target.value;
            setCouponCode(newCode);
            if (newCode === '') {
              onCouponApplied(0, false, '');
              setMessage('');
              setMessageType('');
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleApplyCoupon();
            }
          }}
        />
      </div>
      {message && (
        <p className={`text-sm ${messageType === 'error' ? 'text-red-500' : 'text-green-500'}`}>
          {message}
        </p>
      )}
    </div>
  )
}
