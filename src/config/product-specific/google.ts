import { Products } from '@/config/product-specific';

const config: Products = {
  products: [
    {
      id: 1,
      description: 'Keep all your emails in one place.',
      title: 'Gmail',
      url: 'https://gmail.com'
    },
    {
      id: 2,
      description: 'Analyse how users behave on your websites.',
      title: 'Google Analytics',
      url: 'https://analytics.google.com'
    },
    {
      id: 3,
      description: 'Create a database for your product. ' +
        'Add many Firebase services easily.',
      title: 'Firebase',
      url: 'https://firebase.google.com'
    }
  ]
};

export default config;
