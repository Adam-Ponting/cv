<template>
  <div class="splash-image">
    <span class="splash-image__content">
      <slot name="splashContent"></slot>
    </span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss'; // imports variable to this component

// splash image
.splash-image {
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('https://firebasestorage.googleapis.com/v0/b/adp-cv.appspot.com/o/home%2Fsunset.jpg?alt=media&token=999208b6-d3c1-40a5-939b-5ba9478581fb')
    no-repeat center;
  background-size: cover;
  height: 50vh;
}
.splash-image__content {
  text-transform: capitalize;
  font-variant: small-caps;
  font-size: 5em;
  letter-spacing: 2px;
  font-weight: bold;
  padding: 0 1rem;
  color: $font-light;
  cursor: default;
}
@media screen and (max-width: 800px) {
  .splash-image {
    height: 30vh;
  }
  .splash-image__content {
    font-size: 2em;
  }
}
</style>
