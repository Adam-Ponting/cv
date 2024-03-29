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
          I have 20 years experience in the sports industry as a tennis
          coach, cycle guide and Workshop Manager.
          <br />
          I have also worked in Europe for several years and I self-studied a
          broad range of Front End Web Development skills. I am currently
          working as a <strong>UI Development Consultant</strong> for a
          holiday reservation and distribution company.
        </p>
      </article>
      <article class="welcome-article">
        <font-awesome-icon
          icon="seedling"
          class="welcome-details__font-awesome-icon"
        />
        <h3 class="welcome-details__header">What I do</h3>
        <p class="welcome-details__paragraph">
          I have an understanding of; and I am always learning:
          <strong>HTML5</strong>, <strong>CSS3</strong> and
          <strong>javaScript</strong>. In a professional capacity I use
          <strong>Bootstrap</strong> and <strong>jQuery</strong> whilst I build
          most of my personal projects using the <strong>Vue.js</strong>
          framework.
          <br />
          I am always practicing and refining my skills and am excited to
          develop my knowledge with each project I do and I look forward to
          growing my skills in web development.
        </p>
      </article>
      <article class="welcome-article">
        <font-awesome-icon
          icon="envelope"
          class="welcome-details__font-awesome-icon"
        />
        <h3 class="welcome-details__header">Contact me</h3>
        <p class="welcome-details__paragraph">
          I can be contacted via email:
          <br />
          <a href="mailto:adamponting@outlook.com" class="contact-me">
            <font-awesome-icon
              icon="envelope"
              class="contact-me__font-awesome"
            />adamponting@outlook.com
          </a>
        </p>
        <p class="welcome-details__paragraph">
          View my profile on: <br />
          <a
            href="https://www.linkedin.com/in/adam-ponting/"
            target="_blank"
            rel="noreferrer"
            class="contact-me"
          >
            <font-awesome-icon
              :icon="['fab', 'linkedin']"
              class="contact-me__font-awesome"
            />LinkedIn</a
          >
          <br />
          <a
            href="https://github.com/Adam-Ponting"
            target="_blank"
            rel="noreferrer"
            class="contact-me"
          >
            <font-awesome-icon
              :icon="['fab', 'github']"
              class="contact-me__font-awesome"
            />GitHub
          </a>
          <br />
          <a
            href="https://www.freecodecamp.org/aponting"
            target="_blank"
            rel="noreferrer"
            class="contact-me"
          >
            <font-awesome-icon
              :icon="['fab', 'free-code-camp']"
              class="contact-me__font-awesome"
            />FreeCodeCamp
          </a>
        </p>
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
  background: $bg-white;
  border-radius: 10px;
  margin: 1rem;
  box-shadow: 1px 1px 5px 2px rgba(38, 59, 94, 0.2);
  &:hover {
    box-shadow: 1px 1px 10px 2px rgba(38, 59, 94, 0.5);
    transform: scale(1.01);
  }
}
.welcome-details__font-awesome-icon {
  color: $alt;
  font-size: 10rem;
  border: 1rem solid rgba($alt, 0.2);
  border-radius: 50px;
  padding: 1rem;
  margin: 2rem;
}
.welcome-details__header {
  font-size: 1.6rem;
  color: $interact;
}
.welcome-details__paragraph {
  padding: 1rem;
  text-align: center;
  font-size: 1.2rem;
}
@media screen and (max-width: 800px) {
  .welcome {
    padding: 2rem 1rem;
  }
  .welcome-details__header {
    font-size: 1.3rem;
  }

  .welcome-details__paragraph {
    font-size: 1rem;
    padding: 0.5rem;
  }
  .welcome-details__font-awesome-icon {
    color: $alt;
    font-size: 8rem;
    border: 1rem solid rgba($alt, 0.2);
    border-radius: 40px;
    padding: 1rem;
    margin: 1rem;
  }
  .contact-me {
    font-size: 1rem; // to make anchor same size as paragraph
  }
}
</style>
