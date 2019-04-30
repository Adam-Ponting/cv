<template>
  <div id="works">
    <div class="my-work">
      <h2>my works</h2>
      <p>
        I have designed a variety of sites encapsulating HTML, CSS and
        JavaScript. Some are simpler one page views while others interact with
        databases, allowing registered users to create, read, update and delete
        data.
      </p>
    </div>
    <app-works-scroll />
  </div>
</template>

<script>
import AppWorksScroll from "@/components/AppWorksScroll.vue";

export default {
  components: {
    AppWorksScroll
  }
};
</script>
