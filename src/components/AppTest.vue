<template>
  <div class="flex-wrapper">
    <div class="flex-item">
      <div class="rotate-in-center dash">-</div>
      <h1 class="tracking-in-expand">adam ponting</h1>
      <div class="rotate-in-center dash">-</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "src/assets/css/colorscheme.scss";

.flex-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  background: url("../assets/sunset.jpg") no-repeat center;
  background-size: cover;
  height: 100vh;
}
.flex-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: white;
  flex-wrap: nowrap;
  width: 100%;
}
.flex-item h1 {
  text-transform: capitalize;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-variant: small-caps;
  font-size: 3em;
  letter-spacing: 0.2em;
  text-align: center;
  margin: 0 0.2em;
}
.flex-item .dash {
  position: relative;
  display: inline-block;
  color: white;
  font-size: 3em;
  padding: 0;
}

.rotate-in-center {
  -webkit-animation: rotate-in-center 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: rotate-in-center 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.tracking-in-expand {
  -webkit-animation: tracking-in-expand 1.7s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
  animation: tracking-in-expand 1.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
}
@-webkit-keyframes rotate-in-center {
  0% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
    opacity: 1;
  }
  40% {
    opacity: 0.2;
  }

  100% {
    -webkit-transform: rotate(0);
    transform: rotate(90);
    color: red;
    opacity: 1;
  }
}
@keyframes rotate-in-center {
  0% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
    opacity: 0;
  }
  40% {
    opacity: 0.2;
  }
  100% {
    -webkit-transform: rotate(180);
    transform: rotate(180);
    opacity: 1;
  }
}
@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
</style>
