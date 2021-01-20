export interface Product {
  id: number;
  description: string;
  title: string;
  url: string;
}

export interface Products {
  products: Product[];
}

// eslint-disable-next-line
const config = require(`@/config/product-specific/${process.env.VUE_APP_DEV_PRODUCT}`);

export default config.default;
