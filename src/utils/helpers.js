import { plans } from '../data/plans';
import { features, featureCategories } from '../data/features';
import { addons } from '../data/addons';

export const getPlans = () => plans;

export const getPlanById = (id) => plans.find(p => p.id === id);

export const getFeaturesByCategory = () => {
  return featureCategories.map(category => ({
    ...category,
    features: features.filter(f => f.category === category.id)
  }));
};

export const formatPrice = (amount, currency = 'INR') => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0
  }).format(amount);
};

export const getFeatureValue = (planId, featureId) => {
  const feature = features.find(f => f.id === featureId);
  return feature?.planValues[planId] ?? false;
};

export const getPlanHighlights = (planId) => {
  const plan = getPlanById(planId);
  return plan?.highlights || [];
};

export const getAddons = () => addons;
