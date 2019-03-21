<template>
  <div>
    <app-intro />
    <app-story />
    <app-works />
  </div>
</template>

<script>
import AppIntro from "@/components/AppIntro.vue";
import AppStory from "@/components/AppStory.vue";
import AppWorks from "@/components/AppWorks.vue";
export default {
  components: {
    AppIntro,
    AppStory,
    AppWorks
  }
};
</script>

<style scoped lang="scss"></style>
