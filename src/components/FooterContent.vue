<template>
  <footer class="footer">
    <p class="footer__details">
      <strong>ADP CV</strong>
      by
      <a :href="this.$options.adp" class="footer-link">Adam Ponting.</a> View my
      <a
        :href="this.$options.gitHub"
        target="_blank"
        rel="noreferrer"
        class="footer-link"
        >GitHub.</a
      >
      The source code is licensed
      <a
        :href="this.$options.MIT"
        target="_blank"
        rel="noreferrer"
        class="footer-link"
        >MIT.</a
      >
      The website content is licensed
      <a
        :href="this.$options.licence"
        target="_blank"
        rel="noreferrer"
        class="footer-link"
        >CC BY NC SA 4.0.</a
      >
      <br />
      <a v-scroll-to="'#home'" class="footer-link">Return to top</a>
    </p>
  </footer>
</template>

<script>
export default {
  adp: 'mailto:adamponting@outlook.com',
  MIT: 'http://opensource.org/licenses/mit-license.php',
  gitHub: 'https://github.com/Adam-Ponting',
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

  font-size: 1rem;
  padding: 1rem;
}
.footer-link {
  color: $interact;
  &:hover {
    text-decoration: underline;
  }
}
@media screen and (max-width: 800px) {
  .footer__details {
    font-size: 0.8rem;
  }
}
</style>
