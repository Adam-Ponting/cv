<template>
  <div class="app-works" id="Works">
    <div class="works">
      <h2>- my works</h2>
      <div>
        <p>
          I have designed a variety of sites encapsulating HTML, CSS and
          JavaScript. Some are simpler one page views while others interact with
          databases, allowing registered users to create, read, update and
          delete data.
        </p>
        <p>Click through to sample my work.</p>
      </div>
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

<style scoped lang="scss">
@import "src/assets/css/colorscheme.scss";

.app-works {
  display: flex;
  flex-direction: column;
  background: $bglight;
  color: $bglightfont;
}
.works {
  display: flex;
  flex-direction: row;
  // justify-content: space-between;
  align-items: center;
  padding: 1em 4em;
}
.works > h2 {
  flex: 1 1 20%;
  text-transform: capitalize;
  text-align: center;
}
.works > div {
  flex: 1 1 80%;
  padding: 0 1em;
}
.apps {
  display: flex;
  flex-direction: row;
  background: $bgdark;
  color: $bgdarkfont;
  justify-content: space-evenly;
}
.apps div {
  flex: 1 0 1px;
  text-align: center;
  width: 100px;
  height: 100px;
  border: 1px solid greenyellow;
}
@media screen and (max-width: 768px) {
  .works {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em 3em;
  }
}
</style>
