import React from 'react';
import ScrollReveal from '../components/common/ScrollReveal';
import InquiryForm from '../components/forms/InquiryForm';

const Contact = () => {
  return (
    <div className="page-container">
      <ScrollReveal>
        <section className="section container">
          <h1 style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>Contact Us</h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-10)' }}>
            <div>
              <h3>Get in Touch</h3>
              <p>We'd love to hear from you. Fill out the form below or use our contact details.</p>
              
              <div style={{ marginTop: 'var(--space-6)' }}>
                <InquiryForm />
              </div>
            </div>
            <div>
              <h3>Contact Details</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
                <li><strong>Email:</strong> support@sparkleafpublication.in</li>
                <li><strong>Phone:</strong> +91 87884 46390</li>
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Contact;
