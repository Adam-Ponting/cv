<template>
  <footer id="footer">
    <p>
      <strong>ADP CV</strong>
      by
      <a :href="adp">Adam Ponting.</a> The source code is licensed
      <a :href="MIT" target="_blank">MIT.</a> The website content is licensed
      <a :href="licence" target="_blank">CC BY NC SA 4.0.</a>
      <br />View my
      <a :href="gitHub" target="_blank">GitHub.</a>
    </p>
    <div>
      <a href="#">Return to top</a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      adp: "mailto:adamponting@outlook.com",
      MIT: "http://opensource.org/licenses/mit-license.php",
      gitHub: "https://github.com/Mada75",
      licence: "http://creativecommons.org/licenses/by-nc-sa/4.0/"
    };
  }
};
</script>
