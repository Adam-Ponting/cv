<template>
  <div id="scroll-wrapper">
    <!-- swiper -->
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="slide in swiperSlides"
        :key="slide.link"
        class="frame"
      >
        <img :src="slide.image" @click="routerPush(slide.link, slide.url)" />
        <h4 @click="routerPush(slide.link, slide.url)">{{ slide.title }}</h4>
        <p v-html="slide.description"></p>
        <h5>Skills used:</h5>
        <div class="skills-icons">
          <font-awesome-icon
            style="color:#F16529"
            v-if="slide.html5"
            :icon="['fab', 'html5']"
            title="HTML5"
            class="fa-icon"
          />

          <font-awesome-icon
            style="color:#DD3A0A"
            v-if="slide.css3"
            :icon="['fab', 'css3-alt']"
            title="CSS3"
            class="fa-icon"
          />
          <font-awesome-icon
            style="color:#F0DB4F"
            v-if="slide.js"
            :icon="['fab', 'js']"
            title="javaScript"
            class="fa-icon"
          />

          <font-awesome-icon
            style="color:#41B883"
            v-if="slide.vuejs"
            :icon="['fab', 'vuejs']"
            title="Vue"
            class="fa-icon"
          />

          <font-awesome-icon
            style="color:#472ada"
            v-if="slide.responsive"
            :icon="['fas', 'mobile-alt']"
            title="Responsive Design"
            class="fa-icon"
          />

          <font-awesome-icon
            style="color:#bf4080"
            v-if="slide.sass"
            :icon="['fab', 'sass']"
            title="SCSS"
            class="fa-icon"
          />

          <font-awesome-icon
            style="color:#24292e"
            v-if="slide.github"
            :icon="['fab', 'github']"
            title="GitHub"
            class="fa-icon"
          />

          <font-awesome-icon
            style="color:#ff8f00"
            v-if="slide.google"
            :icon="['fab', 'google']"
            title="Google Firebase"
            class="fa-icon"
          />

          <font-awesome-icon
            style="color:#4C8BF5"
            v-if="slide.browser"
            :icon="['fab', 'chrome']"
            title="Browser Developer Tools"
            class="fa-icon"
          />

          <font-awesome-icon
            style="color:#472ada"
            v-if="slide.bug"
            :icon="['fas', 'bug']"
            title="Testing"
            class="fa-icon"
          />

          <font-awesome-icon
            style="color:#cb3837"
            v-if="slide.npm"
            :icon="['fab', 'npm']"
            title="Node Package Manager"
            class="fa-icon"
          />

          <font-awesome-icon
            style="color:#080135"
            v-if="slide.bootstrap"
            :icon="['fab', 'bootstrap']"
            title="Bootstrap"
            class="fa-icon"
          />

          <font-awesome-icon
            style="color:#61b2a7"
            v-if="slide.moment"
            :icon="['fas', 'clock']"
            title="Moment.js"
            class="fa-icon"
          />

          <font-awesome-icon
            style="color:#472ada"
            v-if="slide.CLI"
            :icon="['fas', 'terminal']"
            title="Command Line Interface"
            class="fa-icon"
          />

          <font-awesome-icon
            style="color:#006400"
            v-if="slide.freeCodeCamp"
            :icon="['fab', 'free-code-camp']"
            title="freeCodeCamp"
            class="fa-icon"
          />
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <font-awesome-icon
        icon="chevron-left"
        class="fa-icon swiper-button-prev"
        slot="button-prev"
      />
      <font-awesome-icon
        icon="chevron-right"
        class="fa-icon swiper-button-next"
        slot="button-next"
      />
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";

export default {
  components: {},
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 10,
        breakpoints: {
          // when window width is <= 480px
          /* 480: {
            slidesPerView: 1,
            spaceBetween: 10
          }, */
          // when window width is <= 640px
          768: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10
          }
        },
        keyboard: {
          enabled: true
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperSlides: [
        {
          image:
            "https://firebasestorage.googleapis.com/v0/b/adp-cv.appspot.com/o/worksScroll%2Frunlog.jpg?alt=media&token=df8d76b4-7c99-47dd-acb8-7846f1895848",
          url: "https://adp-run-10k.firebaseapp.com/home",
          title: "My Hobby - Running Log",
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
            "Using Vue, Vuex, Vue Router, Firebase, databases, user authentication and accounts, security, responsive design, and ..."
        },
        {
          image:
            "https://firebasestorage.googleapis.com/v0/b/adp-cv.appspot.com/o/worksScroll%2Ftribute.jpg?alt=media&token=b171961b-bddd-44d7-9327-60192018ee19",
          link: "tribute",
          title: "Responsive Web Design - Tribute Page",
          description:
            "Showcasing <strong>responsive design</strong> in respect to images",
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
            "https://firebasestorage.googleapis.com/v0/b/adp-cv.appspot.com/o/worksScroll%2Fproduct.jpg?alt=media&token=7bc7dd8a-cc8f-4aa7-8736-c915adac2a2c",
          link: "product",
          title: "Responsive Web Design - Product Landing Page",
          description:
            " Built using <strong>CSS Grid</strong>, with a responsive layout. This is a mockup services page",
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
          link: "survey",
          title: "Responsive Web Design - Survey Form",
          description:
            "A mockup survery form showing user data capture and using <strong>axios</strong> to interact with an external API",
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
      ]
    };
  },
  methods: {
    routerPush(link, url) {
      if (link) {
        this.$router.push({ name: link });
      } else if (url) {
        window.open(url, "_blank");
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
