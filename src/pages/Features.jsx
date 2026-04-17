import React from 'react';
import ScrollReveal from '../components/common/ScrollReveal';
import { getFeaturesByCategory } from '../utils/helpers';
import { Check } from 'lucide-react';
import Button from '../components/common/Button';

const Features = () => {
  const categories = getFeaturesByCategory();

  return (
    <div className="page-container">
      <ScrollReveal>
        <section className="section container" style={{ textAlign: 'center' }}>
          <h2>Feature Details</h2>
          <p style={{ color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto var(--space-12)' }}>
            A deep dive into everything included in our publishing platform.
          </p>
        </section>
      </ScrollReveal>

      {categories.map((cat, index) => (
        <ScrollReveal key={cat.id}>
          <section className="section" style={{ background: index % 2 === 0 ? 'var(--gray-50)' : 'var(--white)' }}>
            <div className="container">
              <h3 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-8)', color: 'var(--leaf-700)', borderBottom: '2px solid var(--gray-200)', paddingBottom: 'var(--space-2)' }}>
                {cat.name}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-6)' }}>
                {cat.features.map(feature => (
                  <div key={feature.id} className="card" style={{ padding: 'var(--space-4)' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                      <Check size={20} color="var(--leaf-500)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong style={{ display: 'block', marginBottom: 'var(--space-1)' }}>{feature.name}</strong>
                        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)' }}>{feature.description}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      ))}

      <ScrollReveal>
        <section className="section container" style={{ textAlign: 'center' }}>
          <Button href="/plans" variant="primary" size="lg">Compare in Detail</Button>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Features;
