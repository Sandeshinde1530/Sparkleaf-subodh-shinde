export const plans = [
  {
    id: 'basic',
    name: 'BASIC PACKAGE',
    price: { amount: 5999, currency: 'INR', display: '₹5,999' },
    color: '#4CAF50', // Green
    headerGradient: 'linear-gradient(90deg, #66BB6A, #388E3C)',
    features: [
      { text: 'ISBN Registration', type: 'isbn' },
      { text: 'Basic Cover Design', type: 'design' },
      { text: 'Formatting', type: 'format' },
      { text: 'Amazon Listing', type: 'amazon' }
    ],
    footer: {
      title: "1 AUTHOR'S COPY INCLUDED",
      subtitle: "Remaining copies managed by\nSparkLeaf Publications for distribution."
    }
  },
  {
    id: 'standard',
    name: 'STANDARD PACKAGE',
    price: { amount: 14999, currency: 'INR', display: '₹14,999' },
    color: '#1E88E5', // Blue
    headerGradient: 'linear-gradient(90deg, #42A5F5, #1565C0)',
    isPopular: true,
    features: [
      { text: 'ISBN Registration', type: 'isbn' },
      { text: 'Premium Cover Design', type: 'design' },
      { text: 'Formatting', type: 'format' },
      { text: 'Amazon Listing', type: 'amazon' },
      { text: 'Author Support', type: 'support' }
    ],
    footer: {
      title: "5 AUTHOR COPIES INCLUDED",
      subtitle: "Remaining copies managed by\nSparkLeaf Publications for distribution."
    }
  },
  {
    id: 'advanced',
    name: 'ADVANCED PACKAGE',
    price: { amount: 19999, currency: 'INR', display: '₹19,999' },
    color: '#673AB7', // Purple
    headerGradient: 'linear-gradient(90deg, #9575CD, #512DA8)',
    features: [
      { text: 'ISBN Registration', type: 'isbn' },
      { text: 'Premium Cover Design', type: 'design' },
      { text: 'Formatting', type: 'format' },
      { text: 'Amazon Listing', type: 'amazon' },
      { text: 'Priority Support', type: 'support' }
    ],
    footer: {
      title: "5 AUTHOR COPIES INCLUDED",
      subtitle: "Additional printed copies included.\nRemaining copies managed by\nSparkLeaf Publications for distribution."
    }
  },
  {
    id: 'premium',
    name: 'PREMIUM PACKAGE',
    price: { amount: 24999, currency: 'INR', display: '₹24,999' },
    color: '#E65100', // Orange
    headerGradient: 'linear-gradient(90deg, #FF9800, #E65100)',
    features: [
      { text: 'ISBN Registration', type: 'isbn' },
      { text: 'Custom Cover Design', type: 'design' },
      { text: 'Editing + Formatting', type: 'format' },
      { text: 'Amazon Listing', type: 'amazon' },
      { text: 'Priority Publishing', type: 'star' },
      { text: 'Basic Marketing Support', type: 'marketing' }
    ],
    footer: {
      title: "5 AUTHOR COPIES INCLUDED",
      subtitle: "Remaining copies managed by\nSparkLeaf Publications for distribution."
    }
  }
];

export const ghostwritingPlan = {
  id: 'ghostwriting',
  name: '+1 GHOSTWRITING PACKAGE',
  price: { display: '₹29,999 - ₹59,999' },
  description: 'For individuals who have ideas but need professional writing support.',
  color: '#2E7D32',
  features: [
    { text: 'Complete Book Writing (based on your idea)' },
    { text: 'Research & Structuring' },
    { text: 'Editing & Formatting' },
    { text: 'Custom Cover Design' },
    { text: 'ISBN Registration' },
    { text: 'Amazon Publishing' }
  ],
  footer: {
    title: "5 AUTHOR COPIES INCLUDED",
    subtitle: "Remaining copies managed\nby SparkLeaf Publications\nfor distribution."
  }
};
