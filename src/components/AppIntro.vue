<template>
  <div class="flex-container">
    <div class="pic"></div>
    <div class="intro">
      <h2>Welcome</h2>
      <h2>I'm a front end web developer,</h2>
      <p>Adam Ponting</p>

      <p>
        I'm self taught in HTML, CSS and JavaScript within the Vue framework.
      </p>
      <!-- font awesome icons -->
      <!-- gets error using rotation -->
      <!-- https://github.com/FortAwesome/vue-fontawesome/issues/131 -->
      <div class="contact">
        <a href="tel:+447904163870">
          <font-awesome-icon icon="phone" rotation="90" class="fa-icon" />(+44)
          07904 163870
        </a>
        <a href="mailto:adam.ponting@gmail.com">
          <font-awesome-icon
            icon="envelope"
            class="fa-icon"
          />adam.ponting@gmail.com
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "src/assets/css/colorscheme.scss";
.flex-container {
  display: flex;
  flex-direction: row;
  height: 100%;
  min-height: fit-content;
  flex: 1 1 50%;
  flex-wrap: nowrap;
  width: 100%;
}
.pic {
  background: url("../assets/adam.jpg") no-repeat center;
  background-size: cover;
  height: 600px;
  flex: 1 0 50%;
}
.intro {
  display: flex;
  flex-direction: column;
  background: $bglight;
  color: $bglightfont;
  flex: 1 1 50%;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 2em;
  justify-content: space-between;
}
.intro > h2 {
  font-weight: 600;
}
.intro > p:nth-of-type(1) {
  text-align: center;
  font-size: 2em;
  font-weight: 600;
}
.contact a {
  flex: 1 1 100%;
  text-decoration: none;
  background: $bglight;
  color: $bglightfont;
  margin: 1em 0 0 0;
  padding: 0.5em 1em;
  width: fit-content;
  box-sizing: border-box;
  border: 1px solid $buttonBorder;
  border-radius: 45px;
  margin: 1em 0;
}
.contact a .fa-icon {
  margin-right: 1em;
  color: $bgdarkfont;
}
.contact a:hover {
  text-decoration: underline;
  color: $bgdarkfont;
  background: $bgdark;
  //background: rgba(89, 131, 236, 0.5);
  // background: #AFAFAF;
  border-radius: 45px;
}
.contact a:hover .fa-icon {
  margin-right: 1em;
  color: $bgdarkfont;
}

.contact {
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 768px) {
  .flex-container {
    flex-wrap: wrap;
    height: 100vh;
    min-height: fit-content;
  }
  .pic {
    background: url("../assets/adam2.jpg") no-repeat center;
    background-size: cover;
    flex: 1 1 100%;
    height: 50%;
  }
  .intro {
    flex: 1 1 100%;
    padding: 1em 1em;
    align-items: center;
  }
  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
