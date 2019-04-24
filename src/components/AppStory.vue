<template>
  <div id="story">
    <div class="flex-container">
      <div class="pic"></div>

      <div class="intro">
        <h2>My Story</h2>
        <p>
          Hello, and welcome to my website. My name is Adam and I'm a
          self-taught developer.
        </p>
        <p>
          I have had an interest in web development since the days of dial-up
          modems have recently been teaching myself the skills I need to work in
          this industry
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/css/colorscheme.scss";
#story {
  max-width: 1200px;
  padding: 0 2rem;
  margin: 0 auto;
}

.flex-container {
  display: flex;
  flex-direction: row;
  height: 70vh;
  min-height: fit-content;
  flex: 1 1 50%;
  flex-wrap: nowrap;
  width: 100%;
}
.pic {
  background: url("../assets/adam4.jpg") no-repeat center;
  flex: 1 0 50%;
}
.intro {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: $bg-lighter;
  color: $primary;
  flex: 1 1 50%;
  padding-top: 2rem;
  padding-left: 2rem;
  padding-bottom: 2rem;
  line-height: 2rem;
  font-size: 1.3rem;
}
.intro > h2 {
  text-transform: capitalize;
  font-variant: small-caps;
  font-weight: bold;
  font-size: 3rem;
  letter-spacing: 0.2rem;
  color: $alt;
  &:before {
    content: "-";
  }
}
.intro > p::first-letter {
  font-size: 1.5em;
  color: $alt;
}
</style>
