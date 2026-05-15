import React from 'react';
import ScrollReveal from '../components/common/ScrollReveal';

const Terms = () => {
  return (
    <div className="page-container">
      <section className="hero-section" style={{ background: 'var(--gradient-hero)', color: 'white', padding: 'var(--space-20) var(--space-4)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-4)' }}>Terms & Conditions</h1>
          <p style={{ fontSize: 'var(--text-xl)', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)', padding: 'var(--space-16) var(--space-4)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
          <ScrollReveal>
            <div className="legal-content">
              <h2>1. Use of Services</h2>
              <p>By accessing the SparkLeaf website and utilizing our services, you agree to comply with and be bound by these terms. Our services are intended for authors looking to publish their original work.</p>

              <h2>2. Publishing Services</h2>
              <p>Our publishing packages include various services such as cover design, formatting, ISBN allocation, and distribution. The exact services depend on the package selected by the author.</p>

              <h2>3. Payment Policy</h2>
              <p>All payments are strictly non-refundable once work on the manuscript has commenced. The Publisher reserves the right to suspend services in the event of non-payment.</p>

              <h2>4. Copyright</h2>
              <p>The Author retains full copyright ownership of the Work at all times. SparkLeaf is granted only limited publishing and distribution rights.</p>

              <h2>5. Project Timeline</h2>
              <p>Estimated timeline: 15 to 30 working days from receipt of approved manuscript and full payment.</p>

              <h2 id="publishing-agreement">6. Publishing Agreement Reference</h2>
              <p>By engaging SparkLeaf's publishing services, you agree to the terms of our standard Publishing Agreement. A copy of the full agreement will be shared with you upon onboarding. For any questions, contact us at support@sparkleafpublication.in.</p>

              <h2>7. Governing Law</h2>
              <p>These terms are governed by the laws of the Republic of India. Disputes are to be resolved via good-faith negotiation, followed by arbitration under the Arbitration and Conciliation Act, 1996.</p>

              <h2>8. Contact for Legal Concerns</h2>
              <p>
                Email: support@sparkleafpublication.in<br />
                Phone: +91 87884 46390
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Terms;
