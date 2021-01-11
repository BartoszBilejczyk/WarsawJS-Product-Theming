module.exports = () => {
  switch (process.env.VUE_APP_DEV_PRODUCT) {
    case 'google':
      return '_variables-google';
    case 'amazon':
      return '_variables-amazon';
    case 'facebook':
      return '_variables-facebook';
    default:
      return '_variables-google';
  }
};
