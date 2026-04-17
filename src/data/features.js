export const featureCategories = [
  { id: 'production', name: 'Book Production' },
  { id: 'distribution', name: 'Publishing & Distribution' },
  { id: 'support', name: 'Author Tools & Support' },
  { id: 'inventory', name: 'Inventory & Fulfillment' },
  { id: 'marketing', name: 'Digital & Offline Marketing' }
];

export const features = [
  {
    id: 'cover_design',
    category: 'production',
    name: 'Cover Design',
    description: 'Professional cover design for your book',
    tooltip: 'Choose from basic templates or get a premium custom illustrated cover',
    planValues: { bronze: 'Basic', silver: 'Custom', gold: 'Premium', diamond: 'Premium', platinum: 'Illustrated', rhodium: 'Illustrated', titanium: 'Illustrated' }
  },
  {
    id: 'isbn',
    category: 'distribution',
    name: 'ISBN Allocation',
    description: 'International Standard Book Number for global tracking',
    planValues: { bronze: true, silver: true, gold: true, diamond: true, platinum: true, rhodium: true, titanium: true }
  },
  {
    id: 'india_dist',
    category: 'distribution',
    name: 'India Distribution',
    description: 'Available on Amazon.in, Flipkart, etc.',
    planValues: { bronze: true, silver: true, gold: true, diamond: true, platinum: true, rhodium: true, titanium: true }
  },
  {
    id: 'global_dist',
    category: 'distribution',
    name: 'Global Distribution',
    description: 'Available on international platforms like Amazon.com, B&N',
    planValues: { bronze: false, silver: true, gold: true, diamond: true, platinum: true, rhodium: true, titanium: true }
  },
  {
    id: 'author_copies',
    category: 'inventory',
    name: 'Complimentary Copies',
    description: 'Free physical copies for the author',
    planValues: { bronze: '5', silver: '10', gold: '20', diamond: '30', platinum: '50', rhodium: '100', titanium: '200' }
  },
  {
    id: 'profit',
    category: 'support',
    name: 'Author Profit Share',
    description: 'Percentage of net profits given back to the author',
    planValues: { bronze: '100%', silver: '100%', gold: '100%', diamond: '100%', platinum: '100%', rhodium: '100%', titanium: '100%' }
  },
  {
    id: 'marketing',
    category: 'marketing',
    name: 'Marketing Campaign',
    description: 'Promotional efforts to boost sales',
    planValues: { bronze: false, silver: false, gold: 'Basic', diamond: 'Advanced', platinum: 'Aggressive PR', rhodium: 'Offline+Online', titanium: 'Global Omnichannel' }
  }
];
