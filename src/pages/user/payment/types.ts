export interface BillingDetailsData {
  first_name: string;
  last_name: string;
  company_name?: string;
  country_region: string;
  street_address: string;
  apartment_suite?: string;
  town_city: string;
  state: string;
  zip_code: string;
  phone: string;
  email: string;
  create_account: boolean;
  ship_to_a_different_address: boolean;
  order_notes?: string;
}

export type FormErrors = {
  [K in keyof BillingDetailsData]?: string;
};

export interface BillingDetailsRef {
  validateAndGetFormData: () => { data: BillingDetailsData | null, isValid: boolean };
}
