import React from 'react';
import { Check, Minus } from 'lucide-react';
import Button from '../common/Button';
import { getFeaturesByCategory, formatPrice } from '../../utils/helpers';

const FeatureRow = ({ feature, plans }) => (
  <div className="feature-row">
    <div className="feature-cell feature-name">
      {feature.name}
    </div>
    {plans.map(plan => {
      const val = feature.planValues[plan.id];
      return (
        <div key={plan.id} className="feature-cell">
          {val === true ? (
            <Check className="feature-check" size={20} />
          ) : val === false ? (
            <Minus className="feature-minus" size={20} />
          ) : (
            <span style={{ fontSize: 'var(--text-sm)' }}>{val}</span>
          )}
        </div>
      );
    })}
  </div>
);

const PlansTable = ({ plans }) => {
  const featureCategories = getFeaturesByCategory();

  return (
    <div className="plans-table-container">
      <div className="plans-table-header">
        <div className="plan-col-header empty-corner">
        </div>
        {plans.map(plan => (
          <div key={plan.id} className={`plan-col-header ${plan.featured ? 'featured' : ''}`}>
            {plan.featured && <div className="popular-badge-top">Most Popular</div>}
            <div>
              <h3 style={{ color: plan.color }}>{plan.name}</h3>
              <div className="plan-tagline">{plan.tagline}</div>
              <div className="plan-price-large">{formatPrice(plan.price.amount)}</div>
            </div>
            <Button href={plan.cta.link} variant={plan.featured ? 'primary' : 'outline'} size="sm" fullWidth>
              Compare
            </Button>
          </div>
        ))}
      </div>

      <div className="plans-table-body">
        {featureCategories.map(category => (
          <div key={category.id} className="feature-category-group">
            <div className="feature-category-header">
              {category.name}
            </div>
            {category.features.map(feature => (
              <FeatureRow key={feature.id} feature={feature} plans={plans} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansTable;
