<template>
  <div class="flex-wrapper">
    <div class="flex-item">
      <div class="rotate-in-center dash">-</div>
      <h1 class="tracking-in-expand">adam ponting</h1>
      <div class="rotate-in-center dash">-</div>
    </div>
    <div><img :src="image" alt="">{{image}}</div>
  </div>
</template>

<script>
import firebase from '../firebase'
export default {
  data() {
    return {
      image: ''
    }
  },
};
</script>

<style scoped lang="scss">
.flex-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: url("gs://adp-cv.appspot.com/home/sunset.jpg") no-repeat cover;
  // background: url("https://firebasestorage.googleapis.com/v0/b/adp-cv.appspot.com/o/home%2Fsunset.jpg?alt=media&token=999208b6-d3c1-40a5-939b-5ba9478581fb")
  //no-repeat center;
  background-size: cover;
  height: 100vh;
}
.flex-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  padding: 0 0.2em;
}
.flex-item .dash {
  color: white;
  font-size: 3em;
  padding: 0;
}

.rotate-in-center {
  -webkit-animation: rotate-in-center 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s
    both;
  animation: rotate-in-center 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s both;
}
.tracking-in-expand {
  -webkit-animation: tracking-in-expand 1.7s cubic-bezier(0.215, 0.61, 0.355, 1)
    3s both;
  animation: tracking-in-expand 1.7s cubic-bezier(0.215, 0.61, 0.355, 1) 3s both;
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
