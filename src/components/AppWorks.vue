<template>
  <div id="works">
    <div class="my-work">
      <h2>my works</h2>
      <p>
        I have designed a variety of sites encapsulating
        <strong>HTML</strong>, <strong>CSS</strong> and
        <strong>javaScript</strong>. Some are projects from courses I have
        studied and others are hobby projects. Almost all my work is on
        <a href="https://github.com/Mada75" target="_blank">GitHub</a>
        to view and critique.
      </p>
    </div>
    <app-works-scroll />
  </div>
</template>

<script>
import AppWorksScroll from '@/components/AppWorksScroll.vue'

export default {
  components: {
    AppWorksScroll
  }
}
</script>
