<template>
  <div class="app__wrapper">
    <div class="app">
      <div class="app__item">
        <div class="app__options">
          <BaseLogo small class="clickable" />
          <h1>Products</h1>
          <div class="app__options-list">
            <div
              class="app__options-item"
              v-for="product in products"
              :key="product.id"
            >
              <div class="app__options-heading">{{ product.title }}</div>
              <div class="app__options-description">{{ product.description }}</div>
              <a
                :href="product.url"
                target="_blank"
                rel="noopener noreferrer"
                class="app__options-button"
              >
                Discover
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="Product Illustration"
        class="app__illustration"
        :src="imagePath"
      />
      <div class="app__circle app__circle-one" />
      <div class="app__circle app__circle-two" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue';

  import BaseLogo from '@/components/BaseLogo.vue';

  import config from '@/config/product-specific';

  export default defineComponent({
    name: 'App',
    components: {
      BaseLogo
    },
    props: {
      isOpen: {
        type: Boolean,
        default: false
      }
    },
    setup() {
      const imagePath = computed(() => {
        return require(`./assets/product-specific/${process.env.VUE_APP_DEV_PRODUCT}/illustration.png`);
      });

      const products = computed(() => config.products);

      return {
        imagePath,
        products
      };
    }
  });
</script>

<style lang="scss" scoped>
  .app {
    height: 100%;
    padding: 60px 100px;

    &__item {
      height: 100%;
      width: 50%;
      z-index: 2;
      position: relative;
      box-shadow: 0 10px 80px rgba(0, 0, 0, 0.12);
      background: #fafafa;
      padding: global-vars(ui-default-measure3x);
      border-radius: $base-border-radius;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    &__options {
      width: 100%;

      .logo {
        position: absolute;
        top: global-vars(ui-default-measure5x);
        left: global-vars(ui-default-measure5x);
      }
    }

    &__options {
      &-list {
        display: flex;
        align-items: stretch;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: global-vars(ui-default-measure5x);

        button {
          margin-bottom: global-vars(ui-default-measure2x);
        }
      }

      &-item {
        width: calc(33.33% - #{global-vars(ui-default-measure3x)});
        min-width: 220px;
        max-width: 350px;
        margin: global-vars(ui-default-measure);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07);
        border-radius: $base-border-radius * 2;
        padding: global-vars(ui-default-measure4x)
          global-vars(ui-default-measure2x);
        cursor: pointer;
        transition: 0.2s ease;

        &:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.17);
        }
      }

      &-heading {
        font-size: 20px;
        line-height: global-vars(ui-default-measure3x);
        font-weight: 600;
        margin-bottom: global-vars(ui-default-measure2x);
      }

      &-description {
        font-size: 13px;
        line-height: global-vars(ui-default-measure2x);
        font-weight: 500;
        color: color(product-text-on-light);
        margin-bottom: global-vars(ui-default-measure4x);
      }

      &-button {
        font-size: 14px;
        font-weight: 700;
        box-shadow: local-vars(button, box-shadow);
        background: local-vars(button, background);
        padding: local-vars(button, padding);
        border-radius: local-vars(button, border-radius);
        color: local-vars(button, color);
        border: local-vars(button, border);
      }
    }

    &__slots {
      width: 100%;
    }

    &__wrapper {
      height: 100vh;
      width: 100vw;
      background: color(product-background);
      position: relative;
      overflow: hidden;
    }

    &__illustration {
      position: absolute;
      width: 42%;
      left: 55%;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
    }

    &__circle {
      position: absolute;
      z-index: 1;
      border-radius: 50%;
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      background: color(product-primary);

      &-one {
        width: 300px;
        height: 390px;
        top: -80px;
        left: -80px;
        transform: rotate(40deg);
      }

      &-two {
        width: 252px;
        height: 360px;
        bottom: -200px;
        left: 40%;
        transform: rotate(70deg);
        transition: 0.3s;

        &--active {
          left: 90%;
        }
      }
    }
  }
</style>
