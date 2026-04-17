import React from 'react';
import ScrollReveal from '../components/common/ScrollReveal';
import { getAddons } from '../utils/helpers';
import * as Icons from 'lucide-react';
import Button from '../components/common/Button';

const Addons = () => {
  const addons = getAddons();

  return (
    <div className="page-container">
      <ScrollReveal>
        <section className="section container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            <h2>Add-on Services</h2>
            <p style={{ color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto' }}>
              Enhance your publishing package with our specialized a-la-carte services.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-8)' }}>
            {addons.map(addon => {
              const IconComponent = Icons[addon.icon];
              return (
                <div key={addon.id} className="card card-outlined" style={{ display: 'flex', flexDirection: 'column' }}>
                  {IconComponent && <IconComponent size={32} color="var(--leaf-500)" style={{ marginBottom: 'var(--space-4)' }} />}
                  <h3 style={{ marginBottom: 'var(--space-2)' }}>{addon.name}</h3>
                  <p style={{ color: 'var(--gray-600)', flex: 1, marginBottom: 'var(--space-4)' }}>{addon.description}</p>
                  <Button variant="outline" size="sm" href={`/contact?addon=${addon.id}`}>Learn More</Button>
                </div>
              );
            })}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Addons;
