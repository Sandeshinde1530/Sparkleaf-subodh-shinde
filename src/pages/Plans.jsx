import React from 'react';
import ScrollReveal from '../components/common/ScrollReveal';
import PlansComparison from '../components/plans/PlansComparison';

const Plans = () => {
  return (
    <div className="page-container">
      <ScrollReveal>
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <PlansComparison />
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Plans;
