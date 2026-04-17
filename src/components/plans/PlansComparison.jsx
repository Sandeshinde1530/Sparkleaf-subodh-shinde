import React from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import PlansTable from './PlansTable';
import PlanCard from './PlanCard';
import { getPlans } from '../../utils/helpers';
import './PlansComparison.css';

const PlansComparison = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const plans = getPlans();

  return (
    <div className="container">
      <div className="plan-comparison-header">
        <h2>Compare Our Publishing Plans</h2>
        <p>Find the perfect fit for your book. From foundational publishing to global omnichannel reach, we have a plan for every author's journey.</p>
      </div>

      {isDesktop ? (
        <PlansTable plans={plans} />
      ) : (
        <div className="plans-mobile-list">
          {plans.map(plan => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PlansComparison;
