<template>
  <div class="flex-container">
    <h2 class="welcome-header">- welcome</h2>
    <p class="welcome-paragraph">
      I'm a self-taught front-end web developer with a love of performant,
      beautiful, and usable web applications.
    </p>
    <div class="welcome-contact">
      <a href="tel:+447904163870">
        <font-awesome-icon icon="phone" rotation="90" class="fa-icon" />+44 7904
        163870
      </a>
      <a href="mailto:adamponting@outlook.com">
        <font-awesome-icon
          icon="envelope"
          class="fa-icon"
        />adamponting@outlook.com
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "src/assets/css/colorscheme.scss";

.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2em;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  background: #472ada;
  color: white;
}
.welcome-header {
  flex: 1 1 30%;
  text-transform: capitalize;
  font-variant: small-caps;
  font-weight: bold;
  font-size: 2em;
  letter-spacing: 0.2em;
  color: #48e7e9;
}
.welcome-paragraph {
  flex: 1 1 70%;
  line-height: 2em;
  color: white;
}
.welcome-contact {
  flex: 1 1 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.welcome-contact a {
  text-decoration: none;
  background: $bgdark;
  color: #c0b4ff;
  padding: 0.7em;
  border: 1px solid #c0b4ff;
  border-radius: 45px;
  margin: 0.5em 0;
  flex: 0 1 1;
  min-width: 20%;
  text-align: center;
}
.welcome-contact a .fa-icon {
  margin-right: 0.3em;
  color: #c0b4ff;
}
.welcome-contact a:hover {
  text-decoration: underline;
  color: $bglightfont;
  background: $bglight;
  border-radius: 45px;
  border: 1px solid $bglight;
}
.welcome-contact a:hover .fa-icon {
  color: $bgdarkfont;
}
</style>
