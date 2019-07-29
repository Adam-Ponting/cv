<template>
  <div class="story">
    <img :src="this.$options.bg3" class="story__image" alt="Photo of Adam" />
    <div class="story__details" id="story">
      <h1 class="slot-heading">my story</h1>
      <p class="slot-intro">
        Hello, and welcome to my website. My name is
        <strong>Adam</strong> and this site is a portfolio of some work I have
        done. I have had an interest in web development since the days of
        dial-up modems and have taught myself the skills I need to allow me to
        start in this industry. <br />I understand the client
        <strong>experience</strong> is central to business needs and I enjoy
        working in a team and interacting with people of different capabilities.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  bg3:
    'https://firebasestorage.googleapis.com/v0/b/adp-cv.appspot.com/o/home%2Fportrait.jpg?alt=media&token=b8506399-40fc-48bc-9595-f635a35c51e0'
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss'; // imports variable to this component

.story {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
}
.story__image,
.story__details {
  flex: 1;
  width: 50%;
}
.story__details {
  padding-left: 1rem;
}
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
  .story {
    display: block;
  }
  .story__image,
  .story__details {
    width: 100%;
  }
  .story__details {
    padding-left: 0;
    padding-top: 1rem;
  }

  .slot-heading {
    font-size: 2rem;
  }
  .slot-intro {
    font-size: 1rem;
  }
}
</style>
