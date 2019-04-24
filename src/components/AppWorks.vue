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
      <p>
        Click through to sample my work.
        <a
          href="https://appdividend.com/2018/07/04/how-to-create-hover-animation-in-vuejs/"
          >/how-to-create-hover-animation-in-vuejs/</a
        >
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
