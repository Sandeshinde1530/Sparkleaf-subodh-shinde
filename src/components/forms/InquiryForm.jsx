import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import FormInput from './FormInput';
import Button from '../common/Button';
import { inquirySchema, sanitize } from '../../utils/validation';
import { getPlans } from '../../utils/helpers';
import './InquiryForm.css';

const InquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState('');
  const location = useLocation();
  const plans = getPlans();

  const planOptions = [
    { value: '', label: 'Select a plan' },
    ...plans.map(p => ({ value: p.id, label: `${p.name} - ${new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(p.price.amount)}` }))
  ];

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(inquirySchema),
    defaultValues: {
      planId: '',
      consent: false
    }
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const planParam = params.get('plan');
    if (planParam && plans.some(p => p.id === planParam)) {
      setValue('planId', planParam);
    }
  }, [location, plans, setValue]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setApiError('');
    
    // Sanitize inputs
    const cleanData = {
      ...data,
      fullName: sanitize(data.fullName),
      message: sanitize(data.message)
    };

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form Submitted:', cleanData);
      setSuccess(true);
    } catch (err) {
      setApiError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <motion.div 
        className="inquiry-form-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="toast-success">
          <CheckCircle2 size={24} />
          <div>
            <strong>Success!</strong>
            <p style={{ margin: 0 }}>Your inquiry has been submitted. Our team will contact you shortly.</p>
          </div>
        </div>
        <Button variant="outline" onClick={() => setSuccess(false)} fullWidth>Submit Another Inquiry</Button>
      </motion.div>
    );
  }

  return (
    <div className="inquiry-form-container">
      {apiError && <div className="toast-error">{apiError}</div>}
      
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormInput
          id="fullName"
          label="Full Name"
          {...register('fullName')}
          error={errors.fullName?.message}
          required
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
          <FormInput
            id="email"
            type="email"
            label="Email Address"
            {...register('email')}
            error={errors.email?.message}
            required
          />
          <FormInput
            id="phone"
            type="tel"
            label="Phone Number"
            placeholder="10-digit number"
            {...register('phone')}
            error={errors.phone?.message}
          />
        </div>

        <FormInput
          id="planId"
          type="select"
          label="Interested Plan"
          options={planOptions}
          {...register('planId')}
          error={errors.planId?.message}
          required
        />

        <FormInput
          id="message"
          type="textarea"
          label="Additional Requirements / Message"
          {...register('message')}
          error={errors.message?.message}
        />

        <FormInput
          id="consent"
          type="checkbox"
          label="I agree to the privacy policy and consent to being contacted regarding my inquiry."
          {...register('consent')}
          error={errors.consent?.message}
          required
        />

        <div style={{ marginTop: 'var(--space-8)' }}>
          <Button type="submit" variant="primary" size="lg" fullWidth loading={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InquiryForm;
