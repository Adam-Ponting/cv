<template>
  <div>
    <app-background-image :image="this.$options.bg1">
      <template v-slot:content>
        <span>Adam Ponting</span>
      </template>
    </app-background-image>
    <app-welcome />
    <app-story />
    <app-background-image :image="this.$options.bg3"></app-background-image>
    <app-skills />
    <app-background-image :image="this.$options.bg2"></app-background-image>
    <app-works />
  </div>
</template>

<script>
import AppBackgroundImage from '@/components/AppBackgroundImage.vue'
import AppStory from '@/components/AppStory.vue'
import AppSkills from '@/components/AppSkills.vue'
import AppWorks from '@/components/AppWorks.vue'
import AppWelcome from '@/components/AppWelcome.vue'
export default {
  components: {
    AppBackgroundImage,
    AppStory,
    AppWorks,
    AppWelcome,
    AppSkills
  },
  bg1:
    'https://firebasestorage.googleapis.com/v0/b/adp-cv.appspot.com/o/home%2Fsunset.jpg?alt=media&token=999208b6-d3c1-40a5-939b-5ba9478581fb',
  bg2:
    'https://firebasestorage.googleapis.com/v0/b/adp-cv.appspot.com/o/home%2Fsunset2.jpg?alt=media&token=fd02ff31-a3aa-4f42-866f-aba0d5d1188a',
  bg3:
    'https://firebasestorage.googleapis.com/v0/b/adp-cv.appspot.com/o/home%2Ftourmalet.jpg?alt=media&token=9edccc91-aaff-4d1a-a84e-0452954ecdb5'
}
</script>
