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
      icon: 'bars',
      menu: 'Menu',
      links: [
        {
          name: '',
          href: '#',
          image:
            'https://firebasestorage.googleapis.com/v0/b/adp-cv.appspot.com/o/base%2Fadam-logo.jpg?alt=media&token=2aa71b01-e382-4c1e-b29f-184a44b73e3a'
        },
        { name: 'Home', href: '#' },
        { name: 'MyStory', href: '#story' },
        { name: 'MySkills', href: '#skills' },
        { name: 'MyWorks', href: '#works' }
      ]
    }
  },
  methods: {
    getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth
    },
    toggleBurgerMenu() {
      this.navMenuOpen = !this.navMenuOpen
      if (this.navMenuOpen) {
        this.icon = 'times'
        this.menu = 'Close'
      } else {
        this.icon = 'bars'
        this.menu = 'Menu'
      }
    }
  },
  computed: {
    toggleMenu() {
      let self = this
      if (this.windowWidth <= 1000) {
        return (self.navBarHidden = false)
      } else {
        return (self.navBarHidden = true)
      }
    }
  },
  mounted() {
    /* https://stackoverflow.com/questions/17534661/make-anchor-link-go-some-pixels-above-where-its-linked-to */
    // The function actually applying the offset
    function offsetAnchor() {
      if (location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 64)
      }
    }
    // This will capture hash changes while on the page
    window.addEventListener('hashchange', offsetAnchor)
    // This is here so that when you enter the page with a hash,
    // it can provide the offset in that case too. Having a timeout
    // seems necessary to allow the browser to jump to the anchor first.
    window.setTimeout(offsetAnchor, 0.1) // The delay of 1 is arbitrary and may not always work right (although it did in my testing).

    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth)
      //Init
      this.getWindowWidth()
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth)
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/colors.scss'; // imports variable to this component

.nav {
  display: flex;
  background: $lighter;
  position: fixed; // move to top
  top: 0;
  width: 100%; // fill width
}
.nav__desktop {
  display: flex;
  justify-content: space-around;
  width: 100%; // fill width
  max-width: 1200px;
  margin: 0 auto;
}
.nav__logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.nav__logo--desktop {
  height: 64px; // img height
}
.nav__logo--mobile {
  height: 48px;
}
.nav__link {
  font-weight: bold;
  padding: 0.5rem;
  color: $pink;
  display: flex;
  justify-content: center;
}
.nav__link--desktop {
  flex-direction: column;
  font-size: 1.5rem;
  margin: 5px 0;

  border-bottom: 3px solid transparent;
  border-top: 3px solid transparent;
  transition: border-bottom 0.5s;
  &:hover {
    border-bottom: 3px solid $pink;
  }
}
.nav__link--mobile {
  flex-direction: row;
  font-size: 1rem;
  margin: 0.1rem 0;

  background: $light;
}
.nav__mobile {
  display: none;
}
@media screen and (max-width: 800px) {
  .nav__toggler {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid white;
    text-align: right;
    font-weight: bold;
    padding: 0.5rem;
    color: $pink;
  }
  .nav__desktop {
    display: none;
  }
  .nav__mobile {
    display: flex;
    padding: 0 1rem;
    width: 100%;
    flex-wrap: wrap;
  }
  .nav__mobile-links {
    display: flex;
    flex-direction: column;
    text-align: center;
    background: white;
    width: 100%;
  }
  .mobile-menu-enter-active {
    transition: all 0.5s ease;
  }
  .mobile-menu-leave-active {
    transition: all 0.55s ease;
  }
  .mobile-menu-enter {
    transform: translateX(-100px);
    opacity: 0;
    background: $pink;
  }
  .mobile-menu-leave-to {
    transform: translateX(100px);
    opacity: 0;
    background: $pink;
  }
}
</style>
