<template>
  <div class="hello">
    <section class="story" id="story">
      <img :src="this.$options.bg3" class="story__image" alt="Photo of Adam" />

      <article class="text">
        <heading-intro>
          <template v-slot:heading>
            <h1 class="slot-heading">my story</h1>
          </template>
          <template v-slot:intro>
            <p class="slot-intro">
              Hello, and welcome to my website. My name is
              <strong>Adam</strong> and this site is a portfolio of some work I
              have done. I have had an interest in web development since the
              days of dial-up modems and have taught myself the skills I need to
              allow me to start in this industry. <br />I understand the client
              <strong>experience</strong> is central to business needs and I
              enjoy working in a team and interacting with people of different
              capabilities.
            </p>
          </template>
        </heading-intro>
      </article>
    </section>
  </div>
</template>

<script>
import HeadingIntro from '@/components/HeadingIntro.vue'

export default {
  bg3:
    'https://firebasestorage.googleapis.com/v0/b/adp-cv.appspot.com/o/home%2Fportrait.jpg?alt=media&token=b8506399-40fc-48bc-9595-f635a35c51e0',
  components: {
    HeadingIntro
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss'; // imports variable to this component
.hello {
  width: 100%;
  background: $bg-dark;
}

.story {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.story__details {
  flex: 1;
}
.story__image {
  width: 400px;
  height: auto;
  border-radius: 50%;
  border: 1px solid white;
  box-shadow: 0 0 15px 0 black;
}
.story__details {
  padding-left: 1rem;
}
@media screen and (max-width: 800px) {
  .story {
    display: block;
    padding: 2rem 1rem;
  }
  .story__image {
    display: block;
    width: 200px;
    height: auto;
    border-radius: 50%;
    margin: 0 auto;
  }
  .story__details {
    padding-left: 0;
    padding-top: 1rem;
  }
}
</style>
