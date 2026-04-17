import React from 'react';
import ScrollReveal from '../components/common/ScrollReveal';
import Button from '../components/common/Button';
import PlansComparison from '../components/plans/PlansComparison';

const Home = () => {
  return (
    <div className="home-page">
      <ScrollReveal direction="none" duration={1.2}>
        <section className="hero" style={{ 
          minHeight: '80vh', 
          background: 'var(--gradient-hero)', 
          color: 'var(--white)',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: 'var(--space-4)', color: 'white' }}>Bring Your Story to Life</h1>
            <p style={{ fontSize: 'var(--text-xl)', opacity: 0.9, maxWidth: '600px', margin: '0 auto var(--space-8)' }}>
              India's premier self-publishing platform offering affordable book publishing plans with 100% author profits.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button href="/plans" variant="primary" size="lg">Explore Plans</Button>
              <Button href="/contact" variant="outline-white" size="lg">Contact Us</Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section bg-gray-50">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-12)' }}>Why Choose SparkLeaf?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-8)' }}>
              {[
                { title: '100% Author Profits', desc: 'You keep 100% of your earnings. We don\'t take a cut.' },
                { title: 'Print-on-Demand', desc: 'No inventory costs. Books are printed as they are ordered.' },
                { title: 'Dedicated Manager', desc: 'A dedicated project manager assists you at every step.' },
                { title: 'Global Distribution', desc: 'Reach readers worldwide through Amazon, Flipkart, and more.' }
              ].map((benefit, i) => (
                <div key={i} className="card card-elevated">
                  <h3 style={{ marginBottom: 'var(--space-2)' }}>{benefit.title}</h3>
                  <p style={{ color: 'var(--gray-600)' }}>{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section">
          <PlansComparison />
        </section>
      </ScrollReveal>

      <ScrollReveal direction="up">
        <section className="section" style={{ background: 'var(--gradient-dark)', color: 'white', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-6)', color: 'white' }}>Ready to Publish Your Book?</h2>
            <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)', opacity: 0.9 }}>Join thousands of successful authors who brought their stories to life with us.</p>
            <Button href="/contact?plan=gold" variant="primary" size="lg">Get a Free Quote</Button>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Home;
