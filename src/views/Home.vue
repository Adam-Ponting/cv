<template>
  <div>
    <app-nav />
    <app-splash />
    <app-welcome />
    <app-story />
    <app-skills />
    <splash-image />
    <app-works />
    <app-footer />
  </div>
</template>

<script>
import AppNav from "@/components/AppNav.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppStory from "@/components/AppStory.vue";
import AppSkills from "@/components/AppSkills.vue";
import AppWorks from "@/components/AppWorks.vue";
import AppSplash from "@/components/AppSplash.vue";
import AppWelcome from "@/components/AppWelcome.vue";
import SplashImage from "@/components/SplashImage.vue";
export default {
  components: {
    AppNav,
    AppFooter,
    AppStory,
    AppWorks,
    AppSplash,
    AppWelcome,
    AppSkills,
    SplashImage
  }
};
</script>
