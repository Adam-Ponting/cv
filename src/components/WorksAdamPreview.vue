<template>
  <div>
    <p :style="styleObject">preview of website {{ colour }}</p>
    <img src="https://source.unsplash.com/random/200x150" alt />
    <div @click="direct()" class="small-component">alert</div>
    <div>hello</div>
    <div>goodbye</div>
    <slot>{{ colour }}</slot
    >{{ colour }}
  </div>
</template>

<script>
export default {
  props: {
    colour: { type: String, required: true }
  },
  components: {},
  data() {
    return {
      styleObject: {
        background: this.colour,
        fontSize: "2em"
      }
    };
  },
  methods: {
    direct() {
      alert("alert");
      //this.$router.replace("tribute");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.preview > img {
  background-color: pink;
}
.preview {
  height: 40vh;
  color: green;
}
.small-component {
  height: 70vh;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid black;
}
</style>
