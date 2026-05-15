import React from 'react';
import ScrollReveal from '../components/common/ScrollReveal';

const Privacy = () => {
  return (
    <div className="page-container">
      <section className="hero-section" style={{ background: 'var(--gradient-hero)', color: 'white', padding: 'var(--space-20) var(--space-4)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-4)' }}>Privacy Policy</h1>
          <p style={{ fontSize: 'var(--text-xl)', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
            Your data is safe with us. Here's how we handle it.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)', padding: 'var(--space-16) var(--space-4)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
          <ScrollReveal>
            <div className="legal-content">
              <h2>1. Data We Collect</h2>
              <p>We collect basic contact information such as your name, email address, and phone number when you submit an enquiry through our contact forms. We do not collect or store any payment data directly on our website.</p>

              <h2>2. How We Use It</h2>
              <p>Your data is used primarily to respond to your publishing enquiries and to communicate with you regarding your selected package and manuscript progress.</p>

              <h2>3. Data Storage & Security</h2>
              <p>Your personal information is stored securely. We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction.</p>

              <h2>4. Third-Party Sharing</h2>
              <p>We do not sell your data to any third parties. However, selected third-party platforms (such as Amazon or Flipkart) may receive your book's metadata for distribution purposes as part of our publishing service.</p>

              <h2>5. Your Rights</h2>
              <p>You have the right to request access to, correction of, or deletion of your personal data. You may request deletion of your data at any time by emailing us at support@sparkleafpublication.in.</p>

              <h2>6. Contact</h2>
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

export default Privacy;
