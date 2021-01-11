import axios from 'axios';

if (process.env.NODE_ENV === 'development') {
  axios.defaults.headers.common['x-product-origin'] = process.env.VUE_APP_DEV_PRODUCT;
}
