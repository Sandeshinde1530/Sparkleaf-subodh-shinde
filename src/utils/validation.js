import * as yup from 'yup';

export const sanitize = (input) => {
  if (typeof input !== 'string') return input;
  return input.replace(/[<>]/g, '');
};

const phoneRegExp = /^[6-9]\d{9}$/;

export const inquirySchema = yup.object().shape({
  fullName: yup.string().required('Full name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().required('Email is required').email('Invalid email address'),
  phone: yup.string().matches(phoneRegExp, 'Phone number must be a valid 10-digit Indian number').nullable().transform(value => (value === '' ? null : value)),
  planId: yup.string().required('Please select a plan'),
  message: yup.string().optional(),
  consent: yup.boolean().oneOf([true], 'You must agree to the privacy policy')
});
