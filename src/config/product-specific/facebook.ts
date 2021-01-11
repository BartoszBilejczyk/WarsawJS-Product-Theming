import { Products } from '@/config/product-specific/app';

const config: Products = {
  products: [
    {
      id: 1,
      description: 'Add photos and share them with your' +
        ' friends. Become an influencer in your community.',
      title: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      id: 2,
      description: 'Create campaigns and manage ads through' +
        ' one, user-friendly dashboard',
      title: 'Facebook Ads Manager',
      url: 'https://facebook.com/adsmanager'
    }
  ]
};

export default config;
