<template>
  <div>
    <nav-bar />
    <router-view class="router-view" />
    <footer-content />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterContent from '@/components/FooterContent.vue'

export default {
  components: {
    NavBar,
    FooterContent
  }
}
</script>

<style lang="scss" scoped>
.router-view {
  margin-top: 60px;
}
</style>
