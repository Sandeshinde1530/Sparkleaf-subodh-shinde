export const featureCategories = [
  { id: 'production', name: 'Book Production' },
  { id: 'services', name: 'Writing & Editing Services' },
  { id: 'distribution', name: 'Publishing & Distribution' },
  { id: 'support', name: 'Author Tools & Support' },
  { id: 'inventory', name: 'Inventory & Fulfillment' },
  { id: 'marketing', name: 'Digital & Offline Marketing' }
];

export const features = [
  {
    id: 'ghostwriting',
    category: 'services',
    name: 'Ghostwriting',
    description: 'Complete professional book writing based on your ideas',
    planValues: { basic: false, standard: false, advanced: false, premium: false, ghostwriting: true }
  },
  {
    id: 'editing',
    category: 'services',
    name: 'Editing & Formatting',
    description: 'Professional editing and manuscript formatting',
    planValues: { basic: false, standard: false, advanced: false, premium: true, ghostwriting: true }
  },
  {
    id: 'cover_design',
    category: 'production',
    name: 'Cover Design',
    description: 'Professional cover design for your book',
    tooltip: 'Choose from basic templates or get a premium custom illustrated cover',
    planValues: { basic: 'Basic', standard: 'Premium', advanced: 'Premium', premium: 'Custom', ghostwriting: 'Custom' }
  },
  {
    id: 'isbn',
    category: 'distribution',
    name: 'ISBN Allocation',
    description: 'International Standard Book Number for global tracking',
    planValues: { basic: true, standard: true, advanced: true, premium: true, ghostwriting: true }
  },
  {
    id: 'india_dist',
    category: 'distribution',
    name: 'India Distribution',
    description: 'Available on Amazon.in, Flipkart, etc.',
    planValues: { basic: true, standard: true, advanced: true, premium: true, ghostwriting: true }
  },
  {
    id: 'global_dist',
    category: 'distribution',
    name: 'Global Distribution',
    description: 'Available on international platforms like Amazon.com, B&N',
    planValues: { basic: false, standard: false, advanced: false, premium: false, ghostwriting: false }
  },
  {
    id: 'author_copies',
    category: 'inventory',
    name: 'Complimentary Copies',
    description: 'Free physical copies for the author',
    planValues: { basic: '1', standard: '5', advanced: '5+', premium: '5', ghostwriting: '5' }
  },
  {
    id: 'profit',
    category: 'support',
    name: 'Author Profit Share',
    description: 'Percentage of net profits given back to the author',
    planValues: { basic: '100%', standard: '100%', advanced: '100%', premium: '100%', ghostwriting: '100%' }
  },
  {
    id: 'marketing',
    category: 'marketing',
    name: 'Marketing Campaign',
    description: 'Promotional efforts to boost sales',
    planValues: { basic: false, standard: false, advanced: false, premium: 'Basic', ghostwriting: false }
  }
];
