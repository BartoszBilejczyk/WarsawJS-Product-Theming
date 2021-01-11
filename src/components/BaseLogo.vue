<template>
  <img
    class="logo"
    :src="logoPath"
    alt="logo"
  />
</template>

<script>
  export default {
    name: 'BaseLogo',
    computed: {
      logoPath() {
        return require(`../assets/product-specific/${process.env.VUE_APP_DEV_PRODUCT}/logo.svg`);
      }
    }
  };
</script>

<style scoped lang="scss">
  .logo {
    width: $logo-base-width;
    height: auto;
  }
</style>
