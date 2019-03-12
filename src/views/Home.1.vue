<template>
  <div id="flex-container">
    <div>
      <image-adam />
    </div>
    <div>
      <intro-adam />
    </div>
    <div>
      <story-adam />
    </div>
    <div>
      <image-adam />
    </div>
    <div class="full">
      <works-adam />
    </div>
    <div class="full">
      <experience-adam />
    </div>
    <div class="full">
      <contact-adam />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageAdam from "@/components/ImageAdam.vue";
import IntroAdam from "@/components/IntroAdam.vue";
import StoryAdam from "@/components/StoryAdam.vue";
import WorksAdam from "@/components/WorksAdam.vue";
import ExperienceAdam from "@/components/ExperienceAdam.vue";
import ContactAdam from "@/components/ContactAdam.vue";
export default {
  components: {
    ImageAdam,
    IntroAdam,
    StoryAdam,
    WorksAdam,
    ExperienceAdam,
    ContactAdam
  }
};
</script>

<style scoped lang="scss">
#flex-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  background-color: DodgerBlue;
}
#flex-container > div {
  flex-basis: 50%;
  background-color: #f1f1f1;
}
#flex-container > div.full {
  flex-basis: 100%;
  background-color: #f1f1f1;
}
</style>
