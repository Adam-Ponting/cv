<template>
  <div class="nav">
    <!-- start desktop -->
    <nav class="nav__desktop">
      <a href="#" class="nav__logo-anchor">
        <img :src="this.$options.logo" alt="AP logo" class="nav__logo-image" />
      </a>
      <a
        v-for="link in this.$options.links"
        :key="link.name"
        :href="link.href"
        class="nav__link nav__link--desktop"
        >{{ link.name }}</a
      >
    </nav>
    <!-- end desktop -->
    <!-- start mobile -->
    <div class="nav__mobile">
      <a href="#" class="nav__logo-anchor">
        <img :src="this.$options.logo" alt="AP logo" class="nav__logo-image" />
      </a>
      <a href="#" class="nav__toggler" @click="toggleMenu">
        {{ menu }}
        <font-awesome-icon :icon="icon" class="font-awesome-icon" />
      </a>
      <transition name="mobile-menu">
        <div class="nav__mobile-links" v-show="navMenuOpen">
          <a
            v-for="link in this.$options.links"
            :key="link.name"
            :href="link.href"
            class="nav__link nav__link--mobile"
            @click="toggleMenu"
            >{{ link.name }}</a
          >
        </div>
      </transition>
    </div>
    <!-- end mobile -->
  </div>
</template>

<script>
export default {
  // non-reactive data
  // https://github.com/vuejs/vue/issues/1988
  // https://itnext.io/how-not-to-vue-18f16fe620b5
  logo:
    'https://firebasestorage.googleapis.com/v0/b/adp-cv.appspot.com/o/base%2Fadam-logo.jpg?alt=media&token=2aa71b01-e382-4c1e-b29f-184a44b73e3a',

  links: [
    { name: 'Welcome', href: '#' },
    { name: 'MyStory', href: '#story' },
    { name: 'MySkills', href: '#skills' },
    { name: 'MyWorks', href: '#works' }
  ],
  data() {
    return {
      navMenuOpen: false,
      menu: 'Menu',
      icon: 'bars'
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
  },
  methods: {
    toggleMenu() {
      if (this.navMenuOpen === true) {
        this.navMenuOpen = false
        this.menu = 'Menu'
        this.icon = 'bars'
      } else {
        this.navMenuOpen = true
        this.menu = 'Close'
        this.icon = 'times'
      }
    }
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
.nav__logo-anchor,
.nav__logo-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 64px;
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
  margin: 0.3rem 0;

  border-bottom: 3px solid transparent;
  border-top: 3px solid transparent;
  transition: border-bottom 0.5s;
  &:hover {
    border-bottom: 3px solid $pink;
  }
}
.nav__mobile {
  display: none;
}
@media screen and (max-width: 800px) {
  .nav__desktop {
    display: none;
  }
  .nav__mobile {
    display: flex;
    padding: 0 1rem;
    width: 100%;
    flex-wrap: wrap;
  }
  .nav__toggler {
    margin-left: auto; // push to right
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    text-align: right;
    font-weight: bold;
    padding: 0.5rem;
    color: $pink;
  }
  .font-awesome-icon {
    margin-left: 10px;
  }
  .mobile-menu-enter-active {
    transition: all 0.5s ease;
  }
  .mobile-menu-leave-active {
    transition: all 0.25s ease;
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
  .nav__mobile-links {
    display: flex;
    flex-direction: column;
    text-align: center;
    background: white;
    width: 100%;
  }
  .nav__link--mobile {
    flex-direction: row;
    font-size: 1rem;
    margin: 0.1rem 0;

    background: $light;
  }
}
</style>
