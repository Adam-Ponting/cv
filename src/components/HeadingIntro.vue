<template>
  <div>
    <slot name="heading"></slot>
    <hr class="divider" />
    <slot name="intro"></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss'; // imports variable to this component
.slot-heading {
  color: $font-primary;
  display: block;
  font-variant: small-caps;
  font-weight: bold;
  letter-spacing: 0.2rem;
  padding: 1rem;
  text-align: center;
  text-transform: capitalize;
  &:before {
    content: '-';
  }
}
.divider {
  border: 2px solid $interact;
  width: 50px;
}

.slot-intro {
  padding: 1rem;
  display: block;
  text-align: center;
}
@media screen and (max-width: 800px) {
  .slot-heading {
    font-size: 2rem;
    padding: 0.5rem;
  }
  .slot-intro {
    font-size: 1rem;
    padding: 1rem;
  }
}
</style>
