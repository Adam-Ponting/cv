<template>
  <div>
    <div id="tennis-nav">
      <ul>
        <li v-for="(navTab, index) in navTabs" :key="index">
          <a
            :class="{ activeTab: selectedNavTab === navTab }"
            @click="selectedNavTab = navTab"
            >{{ navTab }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navTabs: ["home", "forehand", "backhand", "serve", "volley"],
      selectedNavTab: "forehand"
    };
  }
};
</script>

<style lang="scss" scoped>
#tennis-nav ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  background: #fafbfc;
  color: #777;
  border-bottom: 1px solid #e1e4e8;
  padding: 0;
}
#tennis-nav ul li a {
  display: block;
  padding: 15px 20px;
  text-transform: capitalize;
  width: 100px;
  text-align: center;
}
#tennis-nav a:hover {
  background: rgba(231, 221, 201, 1);
  cursor: pointer;
}
#tennis-nav > ul > li > a.activeTab {
  color: black;
  background: rgb(231, 231, 231);
}
</style>
