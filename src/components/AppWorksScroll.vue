<template>
  <div class>
    <!-- swiper -->
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="slide in swiperSlides"
        :key="slide.name"
        class="frame"
      >
        <img :src="slide.image" @click="routerPush(slide.link, slide.url)" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
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
        spaceBetween: 50,
        breakpoints: {
          // when window width is <= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is <= 640px
          768: {
            slidesPerView: 2,
            spaceBetween: 30
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
          name: "1",
          image: "https://www.w3schools.com/w3css/img_lights.jpg"
        },
        {
          name: "2",
          image:
            "https://live-admin-vjv1.tigerbay.co.uk/resize.ashx?f=Giant%20Genghis%20Khan%20Statue.jpg&w=0&h=0",
          link: "TributePage"
        },
        {
          name: "3",
          image:
            "https://static.evanscycles.com/production/tools--maintenance/servicing/product-image/484-319/evans-cycles-macclesfield-services-3-EV250221-7500-1.jpg",
          link: "product"
        },
        {
          name: "4",
          image:
            "http://www.upadpsicologiacoaching.com/wp-content/uploads/2017/04/Psicologia-deportiva-en-el-Triatlon-543x300.png",
          link: "survey"
        },
        {
          name: "5",
          image:
            "https://dailyburn.com/life/wp-content/uploads/2013/08/Running-Form_1.jpg",
          url: "https://run-10k.firebaseapp.com/"
        },
        {
          name: "6",
          image:
            "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
      ]
    };
  },
  methods: {
    routerPush(link, url) {
      if (link) {
        this.$router.push({ name: link });
      } else if (url) {
        window.open(url, "_self");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.frame {
  display: flex;
  align-self: center;
  justify-content: center;
}
img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.swiper-button-prev {
  // background: url("../assets/logo.png") no-repeat center;
  background-size: 100%;
}

ul {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  flex-wrap: nowrap;
  overflow: hidden;
}
ul li {
  flex: 1 0 50%;
  border: 1px solid black;
}
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  width: 100%;
  background: red;
}
.flex-container img {
  padding: 1em 4em;
  flex: 0 1 100px;
  height: 50%;
  width: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
@media screen and (max-width: 768px) {
}
</style>
