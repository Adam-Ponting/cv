<template>
  <div>
    <app-test />
    <app-welcome />
    <app-my-story />
    <app-my-skills />
    <app-intro />
    <app-story />
    <app-works />
  </div>
</template>

<script>
import AppIntro from "@/components/AppIntro.vue";
import AppStory from "@/components/AppStory.vue";
import AppWorks from "@/components/AppWorks.vue";
import AppTest from "@/components/AppTest.vue";
import AppWelcome from "@/components/AppWelcome.vue";
import AppMyStory from "@/components/AppMyStory.vue";
import AppMySkills from "@/components/AppMySkills.vue";
export default {
  components: {
    AppIntro,
    AppStory,
    AppWorks,
    AppTest,
    AppWelcome,
    AppMyStory,
    AppMySkills
  }
};
</script>

<style scoped lang="scss"></style>
