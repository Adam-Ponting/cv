<template>
  <div class="swiper" id="swiper">
    <div v-for="slide in swiperSlides" :key="slide.link" class="swiper__slide">
      <img
        :src="slide.image"
        class="swiper__image"
        :alt="slide.title"
        @click="routerPush(slide.link, slide.url)"
      />
      <h4 class="swiper__heading" @click="routerPush(slide.link, slide.url)">
        {{ slide.title }}
      </h4>
      <p v-html="slide.description" class="swiper__description"></p>
      <h5 class="swiper__heading-skills">Skills:</h5>
      <div class="swiper__skills-icons">
        <font-awesome-icon
          style="color:#F16529"
          v-if="slide.html5"
          :icon="['fab', 'html5']"
          title="HTML5"
          class="swiper__skills-icon"
        />
        <font-awesome-icon
          style="color:#DD3A0A"
          v-if="slide.css3"
          :icon="['fab', 'css3-alt']"
          title="CSS3"
          class="swiper__skills-icon"
        />
        <font-awesome-icon
          style="color:#F0DB4F"
          v-if="slide.js"
          :icon="['fab', 'js']"
          title="javaScript"
          class="swiper__skills-icon"
        />
        <font-awesome-icon
          style="color:#41B883"
          v-if="slide.vuejs"
          :icon="['fab', 'vuejs']"
          title="Vue"
          class="swiper__skills-icon"
        />
        <font-awesome-icon
          style="color:#472ada"
          v-if="slide.responsive"
          :icon="['fas', 'mobile-alt']"
          title="Responsive Design"
          class="swiper__skills-icon"
        />
        <font-awesome-icon
          style="color:#bf4080"
          v-if="slide.sass"
          :icon="['fab', 'sass']"
          title="SCSS"
          class="swiper__skills-icon"
        />
        <font-awesome-icon
          style="color:#24292e"
          v-if="slide.github"
          :icon="['fab', 'github']"
          title="GitHub"
          class="swiper__skills-icon"
        />
        <font-awesome-icon
          style="color:#ff8f00"
          v-if="slide.google"
          :icon="['fab', 'google']"
          title="Google Firebase"
          class="swiper__skills-icon"
        />
        <font-awesome-icon
          style="color:#4C8BF5"
          v-if="slide.browser"
          :icon="['fab', 'chrome']"
          title="Browser Developer Tools"
          class="swiper__skills-icon"
        />
        <font-awesome-icon
          style="color:#472ada"
          v-if="slide.bug"
          :icon="['fas', 'bug']"
          title="Testing"
          class="swiper__skills-icon"
        />
        <font-awesome-icon
          style="color:#cb3837"
          v-if="slide.npm"
          :icon="['fab', 'npm']"
          title="Node Package Manager"
          class="swiper__skills-icon"
        />
        <font-awesome-icon
          style="color:#080135"
          v-if="slide.bootstrap"
          :icon="['fab', 'bootstrap']"
          title="Bootstrap"
          class="swiper__skills-icon"
        />
        <font-awesome-icon
          style="color:#61b2a7"
          v-if="slide.moment"
          :icon="['fas', 'clock']"
          title="Moment.js"
          class="swiper__skills-icon"
        />
        <font-awesome-icon
          style="color:#472ada"
          v-if="slide.CLI"
          :icon="['fas', 'terminal']"
          title="Command Line Interface"
          class="swiper__skills-icon"
        />
        <font-awesome-icon
          style="color:#006400"
          v-if="slide.freeCodeCamp"
          :icon="['fab', 'free-code-camp']"
          title="freeCodeCamp"
          class="swiper__skills-icon"
        />
      </div>
      <button class="view-button" @click="routerPush(slide.link, slide.url)">
        Open
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    this.swiperSlides = [
      {
        image:
          'https://firebasestorage.googleapis.com/v0/b/adp-cv.appspot.com/o/worksScroll%2Frunlog.jpg?alt=media&token=df8d76b4-7c99-47dd-acb8-7846f1895848',
        url: 'https://adp-run-10k.firebaseapp.com/home',
        title: 'Hobby Project - Running Log',
        html5: true,
        css3: true,
        js: true,
        vuejs: true,
        responsive: true,
        sass: true,
        github: true,
        google: true,
        browser: true,
        bug: false,
        npm: true,
        bootstrap: false,
        moment: true,
        CLI: true,
        freeCodeCamp: false,
        description:
          "Using <strong>Vue</strong>, <strong>Vuex</strong>, <strong>Vue Router</strong>, Firebase <strong>databases</strong>, user <strong>authentication</strong> and <strong>security</strong>, <strong>responsive</strong> design, I've designed a running training plan with user accounts."
      },
      {
        image:
          'https://firebasestorage.googleapis.com/v0/b/adp-cv.appspot.com/o/worksScroll%2Ftribute.jpg?alt=media&token=b171961b-bddd-44d7-9327-60192018ee19',
        url: 'https://adp-fcc.netlify.com/tribute',

        // link: 'tribute', // changed to url
        title: 'Responsive Web Design - Tribute Page',
        description:
          'A freeCodeCamp project showcasing <strong>HTML</strong> and <strong>CSS</strong> skills in respect to structure, layout and responsive design.',
        html5: true,
        css3: true,
        js: false,
        vuejs: true,
        responsive: true,
        sass: true,
        github: true,
        google: false,
        browser: true,
        bug: false,
        npm: false,
        bootstrap: false,
        moment: false,
        CLI: false,
        freeCodeCamp: true
      },
      {
        image:
          'https://firebasestorage.googleapis.com/v0/b/adp-cv.appspot.com/o/worksScroll%2Fproduct.jpg?alt=media&token=7bc7dd8a-cc8f-4aa7-8736-c915adac2a2c',
        url: 'https://adp-fcc.netlify.com/product-landing',
        // link: 'product', // changed to url
        title: 'Responsive Web Design - Product Landing Page',
        description:
          'A freeCodeCamp project showcasing <strong>CSS Grid</strong> including embedding videos and responsive design.',
        html5: true,
        css3: true,
        js: false,
        vuejs: false,
        responsive: true,
        sass: true,
        github: true,
        google: false,
        browser: true,
        bug: false,
        npm: false,
        bootstrap: false,
        moment: false,
        CLI: false,
        freeCodeCamp: true
      },
      {
        image:
          'https://firebasestorage.googleapis.com/v0/b/adp-cv.appspot.com/o/worksScroll%2Fbike-survey.jpg?alt=media&token=4d983a18-61dd-4530-850a-fc80521e7487',
        url: 'https://adp-fcc.netlify.com/form',
        title: 'Responsive Web Design - Survey Form',
        description:
          'A freeCodeCamp project with a responsive form that captures user input using <strong>CSS Flexbox</strong> and <strong>javaScript</strong> in <strong>Vue.js</strong>.',
        html5: true,
        css3: true,
        js: true,
        vuejs: true,
        responsive: true,
        sass: true,
        github: true,
        google: false,
        browser: true,
        bug: false,
        npm: false,
        bootstrap: false,
        moment: false,
        CLI: false,
        freeCodeCamp: true
      },
      {
        image:
          'https://firebasestorage.googleapis.com/v0/b/adp-cv.appspot.com/o/worksScroll%2Ffootball-logo.png?alt=media&token=10f46e77-2768-447c-b4c2-3cd0a69f6de9',
        url: 'https://intro-to-vuejs-project.netlify.com/',
        title: 'Intro to Vue project',
        description:
          'A Vue Mastery project looking at <strong>attribute binding</strong>, <strong>conditional rendering</strong>, <strong>event handling</strong>, <strong>components</strong>, <strong>forms</strong> and <strong>tabs</strong>.',
        html5: true,
        css3: true,
        js: true,
        vuejs: true,
        responsive: true,
        sass: true,
        github: true,
        google: false,
        browser: true,
        bug: false,
        npm: false,
        bootstrap: false,
        moment: false,
        CLI: false,
        freeCodeCamp: false
      }

      /*         {
          image:
            "https://firebasestorage.googleapis.com/v0/b/adp-cv.appspot.com/o/worksScroll%2Fsurvey.jpg?alt=media&token=7dc32b80-2fb8-407f-ba27-b762ff1767c6",
          url:
            "https://learn.freecodecamp.org/responsive-web-design/responsive-web-design-projects/build-a-technical-documentation-page",
          title: "Responsive Web Design - Technical Documentation Page",
          description: "a",
          html5: true,
          css3: true,
          js: false,
          vuejs: false,
          responsive: true,
          sass: true,
          github: true,
          google: false,
          browser: true,
          bug: false,
          npm: false,
          bootstrap: false,
          moment: false,
          CLI: false,
          freeCodeCamp: true
        },
        {
          image:
            "https://firebasestorage.googleapis.com/v0/b/adp-cv.appspot.com/o/worksScroll%2Fsurvey.jpg?alt=media&token=7dc32b80-2fb8-407f-ba27-b762ff1767c6",
          url:
            "https://learn.freecodecamp.org/responsive-web-design/responsive-web-design-projects/build-a-personal-portfolio-webpage",
          title: "Responsive Web Design - Personal Portfolio Webpage",
          description: "a",
          html5: true,
          css3: true,
          js: false,
          vuejs: false,
          responsive: true,
          sass: true,
          github: true,
          google: false,
          browser: true,
          bug: false,
          npm: false,
          bootstrap: false,
          moment: false,
          CLI: false,
          freeCodeCamp: true
        }
 */
    ]
  },
  methods: {
    routerPush(link, url) {
      if (link) {
        this.$router.push({ name: link })
      } else if (url) {
        window.open(url, '_blank')
      }
    }
  }
}
</script>
<style>
/* https://developer.mozilla.org/en-US/docs/Web/CSS/--* */
:root {
  --root-interact: #d2527f;
}
.swiper-pagination-bullet-active,
.swiper-pagination-bullet {
  background: var(--root-interact);
}
.swiper-button-pagination {
  color: var(--root-interact);
}
.swiper-button-next,
.swiper-button-prev {
  font-size: 3rem;
  color: var(--root-interact);
  background: transparent;
}
</style>
<style lang="scss" scoped>
@import '@/assets/css/colors.scss'; // imports variable to this component

.swiper {
  margin: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: stretch;
}
.swiper__slide {
  padding: 2rem;
  margin: 2rem;
  background: $bg-white;

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
  flex-wrap: nowrap;
  min-height: fit-content;
  box-shadow: 1px 1px 5px 2px rgba(38, 59, 94, 0.2);
  &:hover {
    box-shadow: 5px 5px 10px 2px rgba($interact, 0.5);
    transform: scale(1.01);
  }
}
.swiper__image {
  width: 200px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 0 5px black;
  &:hover {
    cursor: pointer;
  }
}
.swiper__heading {
  padding-top: 1.5rem;
  color: $bg-pink;
  text-decoration: underline;
  text-decoration-color: transparent;
  cursor: default;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}
.swiper__heading-skills {
  color: $alt;
  text-transform: capitalize;
  font-variant: small-caps;
}
.swiper__description {
  padding-top: 0.25rem;
  font-size: 1.1rem;
  line-height: 1.3rem;
}
.swiper__skills-icons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 0.4rem 1rem;
}
.swiper__skills-icon {
  font-size: 2rem;
  margin: 0.1rem 0.25rem;
}
.view-button {
  margin-top: auto;
  border: 2px solid $interact;
  background: $bg-light;
  padding: 0.8rem 1.5rem;
  font-size: 16px;
  cursor: pointer;
  color: $interact;
  &:hover {
    background-color: $interact;
    color: white;
  }
}
@media screen and (max-width: 800px) {
  .swiper {
    display: block;
  }
  .swiper__slide {
    width: 100%;
    margin: 1rem auto;
  }
  .swiper__description {
    padding-top: 0.1rem;
    font-size: 1rem;
  }
  .swiper__skills-icon {
    font-size: 1.5rem;
    margin: 0.1rem 0.25rem;
  }
}
</style>
