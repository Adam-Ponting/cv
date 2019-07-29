<template>
  <footer class="footer">
    <p class="footer__details">
      <strong>ADP CV</strong>
      by
      <a :href="this.$options.adp">Adam Ponting.</a> The source code is licensed
      <a :href="this.$options.MIT" target="_blank">MIT.</a> The website content
      is licensed
      <a :href="this.$options.licence" target="_blank">CC BY NC SA 4.0.</a>
      <br />View my
      <a :href="this.$options.gitHub" target="_blank">GitHub.</a>
      <br />
      <a href="#">Return to top</a>
    </p>
  </footer>
</template>

<script>
export default {
  adp: 'mailto:adamponting@outlook.com',
  MIT: 'http://opensource.org/licenses/mit-license.php',
  gitHub: 'https://github.com/Mada75',
  licence: 'http://creativecommons.org/licenses/by-nc-sa/4.0/'
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss'; // imports variable to this component
.footer {
  border-top: 1px solid black;
  text-align: center;
}
.footer__details {
  max-width: 1200px;
  margin: 0 auto;

  font-size: 1.3rem;
  padding: 1rem;
}
a {
  color: $interact;
  &:hover {
    text-decoration: underline;
  }
}
@media screen and (max-width: 800px) {
  .footer__details {
    font-size: 1rem;
  }
}
</style>
