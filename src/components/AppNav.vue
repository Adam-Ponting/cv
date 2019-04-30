<template>
  <div id="nav-bar">
    <ul :class="{ 'nav-lg': !toggleMenu }">
      <a :href="links[0].href">
        <img :src="links[0].image" />
      </a>
      <li v-for="(link, index) in links.slice(1)" :key="index">
        <a :href="link.href">{{ link.name }}</a>
      </li>
    </ul>
    <div class="navbar-menu" :class="{ 'nav-sm': toggleMenu }">
      <div>
        <a :href="links[0].href">
          <img :src="links[0].image" height="46px" />
        </a>
        <div @click="toggleBurgerMenu()" class="burger">
          {{ menu }}
          <font-awesome-icon :icon="icon" style="margin-left:1px;" />
        </div>
      </div>
      <ul>
        <li
          v-show="navMenuOpen"
          v-for="(link, index) in links.slice(1)"
          :key="index"
        >
          <a @click="toggleBurgerMenu" :href="link.href">{{ link.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navMenuOpen: false,
      navBarHidden: true,
      windowWidth: 0,
      icon: "bars",
      menu: "Menu",
      links: [
        {
          name: "",
          href: "#",
          image:
            "https://firebasestorage.googleapis.com/v0/b/adp-cv.appspot.com/o/base%2Fadam-logo.jpg?alt=media&token=2aa71b01-e382-4c1e-b29f-184a44b73e3a"
        },
        { name: "Home", href: "#" },
        { name: "MyStory", href: "#story" },
        { name: "MySkills", href: "#skills" },
        { name: "MyWorks", href: "#works" }
      ]
    };
  },
  methods: {
    getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth;
    },
    toggleBurgerMenu() {
      this.navMenuOpen = !this.navMenuOpen;
      if (this.navMenuOpen) {
        this.icon = "times";
        this.menu = "Close";
      } else {
        this.icon = "bars";
        this.menu = "Menu";
      }
    }
  },
  computed: {
    toggleMenu() {
      let self = this;
      if (this.windowWidth <= 1000) {
        return (self.navBarHidden = false);
      } else {
        return (self.navBarHidden = true);
      }
    }
  },
  mounted() {
    /* https://stackoverflow.com/questions/17534661/make-anchor-link-go-some-pixels-above-where-its-linked-to */
    // The function actually applying the offset
    function offsetAnchor() {
      if (location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 64);
      }
    }
    // This will capture hash changes while on the page
    window.addEventListener("hashchange", offsetAnchor);
    // This is here so that when you enter the page with a hash,
    // it can provide the offset in that case too. Having a timeout
    // seems necessary to allow the browser to jump to the anchor first.
    window.setTimeout(offsetAnchor, 0.1); // The delay of 1 is arbitrary and may not always work right (although it did in my testing).

    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);
      //Init
      this.getWindowWidth();
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  }
};
</script>
