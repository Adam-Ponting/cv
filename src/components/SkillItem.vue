<template>
  <article class="skill-item">
    <h3 class="skill-item___header">{{ skill.header }}</h3>

    <div class="skill-item__details">
      <font-awesome-icon
        :style="{ color: iconColor }"
        :icon="skill.icon"
        :title="skill.name"
        class="skill-item__icon"
      />
      <p class="skill-item__text" v-html="skill.text"></p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      iconColor: this.skill.color
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss'; // imports variable to this component

.skill-item {
  margin: 1rem;
  padding: 1rem;
  box-shadow: 1px 1px 5px 2px rgba(38, 59, 94, 0.2);
  &:hover {
    box-shadow: 1px 1px 10px 2px rgba(38, 59, 94, 0.5);
    transform: scale(1.01);
  }
}
.skill-item__icon {
  width: 64px;
  font-size: 64px;
  border: 5px solid rgba($alt, 0.2);
  border-radius: 10px;
  padding: 0.25rem;
  align-self: flex-start;
}
.skill-item__details {
  display: flex;
  align-items: center;
  padding-left: 1rem;
}
.skill-item___header {
  text-align: center;
  color: $font-attention;
}
.skill-item__text {
  padding: 0 1rem;
  font-size: 1.3rem;
}
@media screen and (max-width: 800px) {
  .skill-item___header {
    font-size: 1.3rem;
  }
  .skill-item__text {
    padding: 0 0.5rem;
    font-size: 1rem;
  }
  .skill-item__icon {
    width: 48px;
    font-size: 48px;
  }
  .skill-item__details {
    padding-left: 0.5rem;
  }
}
</style>
