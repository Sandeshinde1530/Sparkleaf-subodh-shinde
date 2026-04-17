import React from 'react';
import ScrollReveal from '../components/common/ScrollReveal';

const About = () => {
  return (
    <div className="page-container">
      <ScrollReveal>
        <section className="section container" style={{ textAlign: 'center' }}>
          <h1 style={{ marginBottom: 'var(--space-6)' }}>About SparkLeaf Publication</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: 'var(--text-lg)', color: 'var(--gray-600)' }}>
            SparkLeaf was founded with a clear mission: to democratize publishing. We believe every story deserves to be told, and authors should retain creative control and the profits they rightfully earn.
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section" style={{ background: 'var(--gray-50)' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8)' }}>
            <div className="card card-elevated">
              <h3>Our Mission</h3>
              <p style={{ color: 'var(--gray-600)' }}>To provide authors with professional, transparent, and affordable self-publishing services without compromising on quality or reach.</p>
            </div>
            <div className="card card-elevated">
              <h3>Our Vision</h3>
              <p style={{ color: 'var(--gray-600)' }}>To become the most trusted platform for independent authors across India, fostering a vibrant literary ecosystem.</p>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default About;
