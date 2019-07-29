<template>
  <div class="works" id="works">
    <heading-intro>
      <template v-slot:heading>
        <h1 class="slot-heading">my works</h1>
      </template>
      <template v-slot:intro>
        <p class="slot-intro">
          I have designed a variety of sites encapsulating
          <strong>HTML</strong>, <strong>CSS</strong> and
          <strong>javaScript</strong>. Some are projects from courses I have
          studied and others are hobby projects. Almost all my work is on
          <a href="https://github.com/Mada75" target="_blank">GitHub</a>
          to view and critique.
        </p>
      </template>
    </heading-intro>

    <app-works-scroll />
  </div>
</template>

<script>
import AppWorksScroll from '@/components/AppWorksScroll.vue'
import HeadingIntro from '@/components/HeadingIntro.vue'

export default {
  components: {
    AppWorksScroll,
    HeadingIntro
  }
}
</script>

<style lang="scss" scoped>
.works {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}
</style>
