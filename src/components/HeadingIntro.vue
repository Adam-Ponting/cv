<template>
  <div>
    <slot name="heading"></slot>
    <slot name="intro"></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss'; // imports variable to this component
.slot-heading {
  color: $font-attention;
  display: inline-block;
  font-variant: small-caps;
  font-weight: bold;
  letter-spacing: 0.2rem;
  text-transform: capitalize;
  &:before {
    content: '-';
  }
}
.slot-intro {
  display: inline;
}
@media screen and (max-width: 800px) {
  .slot-heading {
    font-size: 2rem;
  }
  .slot-intro {
    font-size: 1rem;
    line-height: 1.2rem;
  }
}
</style>
