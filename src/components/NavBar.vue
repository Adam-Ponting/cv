<template>
  <div class="nav" id="home">
    <!-- start desktop -->
    <nav class="nav__desktop">
      <a href v-scroll-to="'#home'" class="nav__logo-anchor">
        <img :src="logo" alt="AP logo" class="nav__logo-image" />
      </a>
      <a
        v-for="link in links"
        :key="link.name"
        href
        v-scroll-to="{ el: link.href }"
        class="nav__link nav__link--desktop"
        >{{ link.name }}</a
      >
    </nav>
    <!-- end desktop -->
    <!-- start mobile -->
    <div class="nav__mobile">
      <a href v-scroll-to="'#home'" class="nav__logo-anchor">
        <img :src="logo" alt="AP logo" class="nav__logo-image" />
      </a>
      <a class="nav__toggler" @click="toggleMenu">
        {{ menu }}
        <font-awesome-icon :icon="icon" class="font-awesome-icon" />
      </a>
      <transition name="mobile-menu">
        <div class="nav__mobile-links" v-show="navMenuOpen">
          <a
            v-for="link in links"
            :key="link.name"
            href
            v-scroll-to="{ el: link.href }"
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
  data() {
    return {
      navMenuOpen: false,
      menu: 'Menu',
      icon: 'bars'
    }
  },
  created() {
    this.logo =
      'https://firebasestorage.googleapis.com/v0/b/adp-cv.appspot.com/o/base%2Fadam-logo.jpg?alt=media&token=2aa71b01-e382-4c1e-b29f-184a44b73e3a'
    this.links = [
      { name: 'Home', href: '#home' },
      { name: 'Welcome', href: '#welcome' },
      { name: 'MyStory', href: '#story' },
      { name: 'MySkills', href: '#skills' },
      { name: 'MyWorks', href: '#works' }
    ]
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
  background: $bg-light;
  position: fixed; // move to top
  top: 0;
  width: 100%; // fill width
  height: 60px;
  z-index: 2;
  border-bottom: 1px solid black;
}
.nav__desktop {
  display: flex;
  padding: 0 1rem;
  width: 100%; // fill width
  max-width: 1200px;
  margin: 0 auto;
}
.nav__logo-anchor {
  display: flex;
  margin-right: auto;
  align-self: center;
}
.nav__logo-image {
  height: 48px;
  margin: 6px 0; // holds image in place on menu toggle opening (=60px height)
}

.nav__link {
  font-weight: bold;
  padding: 0.5rem;
  color: $interact;
  display: flex;
  justify-content: center;
}
.nav__link--desktop {
  flex-direction: column;
  font-size: 1rem;
  margin: 0.3rem 1rem;

  border-bottom: 3px solid transparent;
  border-top: 3px solid transparent;
  transition: border-bottom 0.5s;
  &:hover {
    border-bottom: 3px solid $interact;
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
    font-weight: bold;
    padding: 0.5rem;
    color: $interact;
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
    background: $interact;
  }
  .mobile-menu-leave-to {
    transform: translateX(100px);
    opacity: 0;
    background: $interact;
  }
  .nav__mobile-links {
    display: flex;
    flex-direction: column;
    background: white;
    width: 100%;
  }

  .nav__link--mobile {
    flex-direction: row;
    margin: 0.1rem 0;

    background: $light;
  }
}
</style>
