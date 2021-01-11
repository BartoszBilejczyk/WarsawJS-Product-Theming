// eslint-disable-next-line @typescript-eslint/no-var-requires
const getVariablePath = require('./src/config/product-specific/styling');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/global/_mixins.scss";
          @import "@/styles/global/_variables.scss";
          @import "@/styles/global/${getVariablePath()}.scss";
          @import "@/styles/global/_functions.scss";
        `
      }
    }
  }
};
