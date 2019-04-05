<template>
  <div>
    <!-- 
     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/product">product</router-link> |
      <router-link to="/tennis">tennis</router-link>
    </div>

    -->

    <router-view />
  </div>
</template>

<style lang="scss">
// all styles here are global
// remove chrome margin
body {
  margin: 0px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
