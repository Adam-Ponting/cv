<template>
  <div>
    <nav-bar />
    <app-background-image>
      <template v-slot:splashContent>
        <span>Adam Ponting</span>
      </template>
    </app-background-image>
    <!--     <app-splash />
    -->
    <app-welcome />
    <app-story />
    <app-skills />
    <splash-image />
    <app-works />
    <app-footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import AppBackgroundImage from '@/components/AppBackgroundImage.vue'

import AppFooter from '@/components/AppFooter.vue'
import AppStory from '@/components/AppStory.vue'
import AppSkills from '@/components/AppSkills.vue'
import AppWorks from '@/components/AppWorks.vue'
import AppWelcome from '@/components/AppWelcome.vue'
import SplashImage from '@/components/SplashImage.vue'
export default {
  components: {
    NavBar,
    AppBackgroundImage,
    AppFooter,
    AppStory,
    AppWorks,
    AppWelcome,
    AppSkills,
    SplashImage
  }
}
</script>
