<template>
  <section class="skills" id="skills">
    <article>
      <heading-intro>
        <template v-slot:heading>
          <h1 class="slot-heading">my skills</h1>
        </template>
        <template v-slot:intro>
          <p class="slot-intro">
            I take great pride in my
            <strong>attention to detail</strong> and throughout my career as a
            have made use of my logical approach to
            <strong>problem solving</strong>. <br />I have considerable
            experience of working independently and in <strong>teams</strong>,
            including management. This has involved managing complex ranges of
            tasks, meeting <strong>deadlines</strong> and achieving
            <strong>targets</strong>. <br />I have the written and verbal
            <strong>communication</strong> skills required to articulate
            effectively and the <strong>determination</strong> and drive to
            succeed in web development.
          </p>
        </template>
      </heading-intro>
    </article>
    <skill-item
      v-for="skill in this.$options.skills"
      :skill="skill"
      :key="skill.name"
    />
  </section>
</template>

<script>
import HeadingIntro from '@/components/HeadingIntro.vue'
import SkillItem from '@/components/SkillItem.vue'
export default {
  components: {
    HeadingIntro,
    SkillItem
  },
  skills: [
    {
      name: 'HTML5',
      icon: ['fab', 'html5'],
      color: '#F16529',
      header: 'HyperText Markup Language (HTML)',
      text:
        'This is where it all begins! The building block for all my development starts with <strong>good</strong> and <strong>simple</strong> HMTL structure.'
    },
    {
      name: 'CSS3',
      icon: ['fab', 'css3-alt'],
      color: '#DD3A0A',
      header: 'Cascading Style Sheets (CSS)',
      text:
        "I have enjoyed learning CSS to <strong>style</strong> and <strong>shape</strong> my sites. CSS opens up many options to engage the user and is an area I'm actively experimenting in."
    },
    {
      name: 'javaScrpt',
      icon: ['fab', 'js'],
      color: '#F0DB4F',
      header: 'JavaScript',
      text:
        'JavaScript is where I focus my continued learning with increased <strong>efficiency</strong>. I use <strong>ES6</strong> code where possible and am always practicing and learning new code.'
    },
    {
      name: 'Vue.js',
      icon: ['fab', 'vuejs'],
      color: '#41B883',
      header: 'Vue',
      text:
        'I have been using and learning Vue alongside javaScript and love its simple syntax, great support and ease of use. All my projects are built in Vue and I use <strong>Vuex</strong> and <strong>Vue-router</strong> where needed. I am comfortable with the Vue framework and look forward to the new features expected in <strong>Vue 3.0</strong>'
    },
    {
      name: 'Responsive Design',
      icon: ['fas', 'mobile-alt'],
      color: '#472ada',
      header: 'Responsive Design',
      text:
        'With the changing ways we view and interact with screens I design each website to the latest standards to be responsive and ensure the user gets the best experience. I have used a combination of <strong>Flexbox</strong>, <strong>CSS Grid</strong> and CSS frameworks such as <strong>Bootstrap</strong> to design my portfolio'
    },
    {
      name: 'SCSS',
      icon: ['fab', 'sass'],
      color: '#bf4080',
      header: 'Sassy CSS',
      text:
        'I use SCSS to set and use <strong>variables</strong>, <strong>functions</strong>, and perform <strong>arithmatic</strong> operations. It makes my life easier!'
    },
    {
      name: 'GitHub',
      icon: ['fab', 'github'],
      color: '#24292e',
      header: 'GitHub',
      text:
        'I use GitHub to plan, build and store my code. I have experience of <strong>version control</strong> and <strong>forking</strong>, with an understanding of the process of tracking and controlling changes to source code.'
    },
    {
      name: 'Google Firebase',
      icon: ['fab', 'google'],
      color: '#ff8f00',
      header: 'Google Firebase',
      text:
        "Most of my sites are hosted on Google's Firebase servers, I use their <strong>hosting</strong>, <strong>authentication</strong>, <strong>database</strong> and <strong>storage</strong>. I have enjoyed learning how to interact with a database, including <strong>CRUD</strong> (Create, Read, Update, Delete) projects. I have also learnt to manage user accounts and permissions and security such as <strong>sanitizing</strong> data."
    },
    {
      name: 'Browser Developer Tools',
      icon: ['fab', 'chrome'],
      color: '#4C8BF5',
      header: 'Browser Developer Tools',
      text:
        'I use Chrome Developer Tools to test and fine tune my pages in the browser itself, allowing me to see the changes live. I use the console to view and track any errors that <em>may</em> occur.'
    },
    {
      name: 'Node Package Manager',
      icon: ['fab', 'npm'],
      color: '#cb3837',
      header: 'Node Package Manager',
      text:
        'I use npm to maintain, share and publish my dependencies and projects and have experience using <strong>axios</strong> and <strong>Highcharts</strong> along with many other plugins.'
    },
    {
      name: 'Bootstrap',
      icon: ['fab', 'bootstrap'],
      color: '#080135',
      header: 'Bootstrap',
      text:
        'I have used Bootstrap to quickly design and build websites. I like its vast library and speed I can <strong>prototype</strong> a website.'
    },
    {
      name: 'Moment.js',
      icon: ['fas', 'clock'],
      color: '#61b2a7',
      header: 'Moment.js',
      text:
        'I have used Moment.js to parse, validate, manipulate, and display dates and times in JavaScript.'
    },
    {
      name: 'Command Line Interface',
      icon: ['fas', 'terminal'],
      color: '#472ada',
      header: 'Command Line Interface',
      text: 'I am happy to use the CLI where it is needed to solve a problem.'
    },
    {
      name: 'freeCodeCamp',
      icon: ['fab', 'free-code-camp'],
      color: '#006400',
      header: 'freeCodeCamp',
      text:
        'This has been one of my learning resources and I have completed several of their courses and projects and frequently use it to refresh my memory.'
    }
    // https://skillcrush.com/2017/03/20/front-end-developer-skills/
    // https://skillcrush.com/2016/10/31/web-developer-portfolio/
    // https://skillcrush.com/2019/03/19/how-to-start-a-web-developer-career/
    /*     
    {
      name: 'Testing',
      icon: ['fas', 'bug'],
      color: '#472ada',
      header: 'Testing',
      text: 'https://vuejs.org/v2/guide/unit-testing.html'
    },
    {
      name: 'LinkedIn',
      icon: ['fab', 'linkedin'],
      color: '#0077b5',
      header: 'LinkedIn',
      text: 'https://www.linkedin.com/in/adam-ponting/'
    }
 */
  ]
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/colors.scss'; // imports variable to this component

.skills {
  background: $bg-light;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}
</style>
