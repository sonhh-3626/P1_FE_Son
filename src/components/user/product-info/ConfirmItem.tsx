import React from 'react';
import { FaCreditCard, FaShieldAlt } from 'react-icons/fa';

const ConfirmItem: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border-1 border-[#E5E7EB] shadow-sm p-2 my-5">
      <div className="flex items-start py-3 border-b border-gray-200">
        <FaCreditCard className="text-gray-500 text-2xl mr-8 mt-2 ml-4" />
        <div>
          <h3 className="font-bold text-gray-800 text-lg">Payment.</h3>
          <p className="text-gray-600 text-sm">
            Payment upon receipt of goods, Payment by card in the department, Google Pay, Online card, -5% discount in case of payment
          </p>
        </div>
      </div>

      <div className="flex items-start py-3">
        <FaShieldAlt className="text-gray-500 text-2xl mr-8 mt-2 ml-4" />
        <div>
          <h3 className="font-bold text-gray-800 text-lg">Warranty.</h3>
          <p className="text-gray-600 text-sm">
            The Consumer Protection Act does not provide for the return of this product of proper quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmItem;
