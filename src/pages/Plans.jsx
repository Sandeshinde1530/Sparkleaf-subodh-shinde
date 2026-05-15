import React from 'react';
import ScrollReveal from '../components/common/ScrollReveal';
import PlansGrid from '../components/plans/PlansGrid';
import GhostwritingCard from '../components/plans/GhostwritingCard';
import { ghostwritingPlan } from '../data/plans';
import { Globe, ShieldCheck, Rocket } from 'lucide-react';
import './Plans.css';

const Plans = () => {
  return (
    <div className="page-container poster-layout">
      {/* Top Header matching poster */}
      <section className="poster-header">
        <div className="container">
          <h2 className="poster-subtitle">SPARKLEAF PUBLICATIONS</h2>
          <h1 className="poster-title">PUBLISHING PACKAGES</h1>
          <p className="poster-tagline">
            <span>Your Story.</span> <span>Our Platform.</span> <span>A Global Impact.</span>
          </p>
        </div>
      </section>

      {/* 2x2 Grid */}
      <ScrollReveal>
        <section className="section" style={{ background: 'var(--gray-50)', paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}>
          <div className="container">
            <PlansGrid />
          </div>
        </section>
      </ScrollReveal>

      {/* Ghostwriting Section */}
      <ScrollReveal>
        <section className="section" style={{ background: 'var(--gray-50)', paddingTop: '0', paddingBottom: 'var(--space-12)' }}>
          <div className="container">
            <GhostwritingCard plan={ghostwritingPlan} />
          </div>
        </section>
      </ScrollReveal>

      {/* Benefits Bar */}
      <section className="benefits-bar">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefit-item">
              <Globe size={48} color="currentColor" />
              <h3>Wider Reach</h3>
            </div>
            <div className="benefit-item">
              <ShieldCheck size={48} color="currentColor" />
              <h3>Professional Support</h3>
            </div>
            <div className="benefit-item">
              <Rocket size={48} color="currentColor" />
              <h3>Your Success, Our Mission</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
