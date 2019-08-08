<template>
  <section class="welcome" id="welcome">
    <article>
      <heading-intro>
        <template v-slot:heading>
          <h1 class="slot-heading">welcome</h1>
        </template>
        <template v-slot:intro>
          <p class="slot-intro">
            I'm a self-taught front-end web developer with a passion for
            designing web applications.
          </p>
        </template>
      </heading-intro>
    </article>

    <section class="welcome-section">
      <article class="welcome-article">
        <font-awesome-icon
          icon="user-tie"
          class="welcome-details__font-awesome-icon"
        />
        <h3 class="welcome-details__header">Who am I?</h3>

        <p class="welcome-details__paragraph">
          I have almost 20 years experience in the sports industry. The majority
          of which was as a tennis coach and recently as a cycle guide and
          mechanic.
          <br />I have also worked in Europe for several years and since
          returning to England I have been a Workshop Manager at Evans Cycles
          and began studying to become a front end developer.
        </p>
      </article>
      <article class="welcome-article">
        <font-awesome-icon
          icon="seedling"
          class="welcome-details__font-awesome-icon"
        />
        <h3 class="welcome-details__header">What I do</h3>
        <p class="welcome-details__paragraph">
          I have covered and am always learning:
          <strong>HTML5</strong>, <strong>CSS3</strong> and
          <strong>javaScript</strong>. I build most of my projects using the
          <strong>Vue.js</strong> framework so these are the skills I am most
          confident in. <br />I am always practicing and refining my skills and
          am excited to develop my knowledge with each project I do and I look
          forward to growing my skills in web development.
        </p>
      </article>
      <article class="welcome-article">
        <font-awesome-icon
          icon="envelope"
          class="welcome-details__font-awesome-icon"
        />
        <h3 class="welcome-details__header">Contact me</h3>
        <p class="welcome-details__paragraph">I can be contacted via email:</p>
        <a href="mailto:adamponting@outlook.com" class="contact-me">
          <font-awesome-icon
            icon="envelope"
            class="contact-me__font-awesome"
          />adamponting@outlook.com
        </a>
        <br />
        <p class="welcome-details__paragraph">View my GitHub:</p>
        <a href="https://github.com/Mada75" target="_blank" class="contact-me">
          <font-awesome-icon
            :icon="['fab', 'github']"
            class="contact-me__font-awesome"
          />https://github.com/Mada75
        </a>
      </article>
    </section>
  </section>
</template>

<script>
import HeadingIntro from '@/components/HeadingIntro.vue'
export default {
  components: {
    HeadingIntro
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss'; // imports variable to this component
.contact-me {
  line-height: 1.5; // to make anchor same size as paragraph
  font-size: 1.3rem; // to make anchor same size as paragraph
  color: $bg-pink;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.5s;
  &:hover {
    border-bottom: 1px solid $interact;
  }
}
.contact-me__font-awesome {
  margin-right: 0.3rem;
}
.welcome {
  background: $bg-light;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 1rem;
}
.welcome-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1rem;
}
.welcome-article {
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 0.5rem;
}
.welcome-details__font-awesome-icon {
  color: $alt;
  font-size: 10rem;
  border: 1rem solid rgba($alt, 0.2);
  border-radius: 50px;
  padding: 1rem;
}
.welcome-details__header {
  font-size: 1.6rem;
}
@media screen and (max-width: 800px) {
  .welcome {
    padding: 2rem 1rem;
  }
  .welcome-details__paragraph {
    font-size: 1rem;
  }
  .welcome-details__font-awesome-icon {
    color: $alt;
    font-size: 8rem;
    border: 1rem solid rgba($alt, 0.2);
    border-radius: 40px;
    padding: 1rem;
  }
  .contact-me {
    font-size: 1rem; // to make anchor same size as paragraph
  }
}
</style>
