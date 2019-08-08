<template>
  <div class="splash-image" :style="styleObject">
    <span class="splash-image__content">
      <slot name="content" class="test"></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      styleObject: {
        'background-image': `url(' ${this.image} ')`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss'; // imports variable to this component
// splash image
.splash-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: no-repeat center;
  background-size: cover;
  height: 50vh;
}
.splash-image__content {
  text-transform: capitalize;
  font-variant: small-caps;
  font-size: 5em;
  letter-spacing: 2px;
  font-weight: bold;
  font-family: 'Georgia, serif';

  padding: 0 1rem;
  color: $font-light;
  cursor: default;
}
@media screen and (max-width: 800px) {
  .splash-image {
    height: 30vh;
  }
  .splash-image__content {
    font-size: 2.5em;
    text-align: center;
  }
}
</style>
