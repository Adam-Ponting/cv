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
        'This is where it all begins! The building block for all my development starts with <strong>good</strong> and <strong>simple</strong> HMTL5 structure.'
    },
    {
      name: 'CSS3',
      icon: ['fab', 'css3-alt'],
      color: '#DD3A0A',
      header: 'Cascading Style Sheets (CSS)',
      text:
        "I have enjoyed learning CSS to <strong>style</strong> and <strong>shape</strong> my sites. CSS opens up many options to engage the user and is an area I'm always interested in."
    },
    {
      name: 'javaScrpt',
      icon: ['fab', 'js'],
      color: '#F0DB4F',
      header: 'JavaScript',
      text:
        'JavaScript is where I focus my continued learning with increased <strong>understanding</strong>. I use <strong>ES6</strong> code where appropriate and am always practicing and learning new code. I use <strong>jQuery</strong> professionally and enjoy its cross browser compatibility.'
    },
    {
      name: 'Vue.js',
      icon: ['fab', 'vuejs'],
      color: '#41B883',
      header: 'Vue',
      text:
        'I have been using and learning Vue alongside javaScript. The majority of my websites are built in Vue and I use <strong>Vuex</strong> and <strong>Vue-router</strong> where needed. I am comfortable with the Vue framework and look forward to the new features expected in <strong>Vue 3.0</strong> later in 2020.'
    },
    {
      name: 'Responsive Design',
      icon: ['fas', 'mobile-alt'],
      color: '#472ada',
      header: 'Responsive Design',
      text:
        'With the changing ways we view and interact with screens I design each website to the latest standards to be responsive and ensure the user gets the best experience. I have used a combination of <strong>Flexbox</strong>, <strong>CSS Grid</strong> to design my portfolio and I use <strong>Bootstrap</strong> in my current job.'
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
      name: 'TortoiseSVN',
      icon: ['fas', 'code-branch'],
      color: '#417fda',
      header: 'SVN',
      text:
        'I use Tortoise SVN professionally and it was interesting learning a different and new way of handling version control.'
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
        'I use Chrome Developer Tools to test and fine tune in the browser, allowing me to see the changes live. I use the console to view and track any errors that <em>may</em> occur. I design for the different web browsers and standards'
    },
    {
      name: 'Node Package Manager',
      icon: ['fab', 'npm'],
      color: '#cb3837',
      header: 'Node Package Manager',
      text:
        'I use npm to maintain, update, share and publish my dependencies and projects and have experience using <strong>axios</strong> and <strong>Highcharts</strong> along with many other plugins.'
    },
    {
      name: 'Bootstrap',
      icon: ['fab', 'bootstrap'],
      color: '#080135',
      header: 'Bootstrap',
      text:
        'I use Bootstrap professionally, updating old code to run in newer browsers and devices. I like its vast library and speed I can <strong>prototype</strong> a website.'
    },
    // {
    //   name: 'Moment.js',
    //   icon: ['fas', 'clock'],
    //   color: '#61b2a7',
    //   header: 'Moment.js',
    //   text:
    //     'I have used Moment.js to parse, validate, manipulate, and display dates and times in JavaScript.'
    // },
    {
      name: 'Command Line Interface',
      icon: ['fas', 'terminal'],
      color: '#472ada',
      header: 'Command Line Interface',
      text: 'I am happy to use the CLI where it is needed to solve a problem.'
    }
    // {
    //   name: 'freeCodeCamp',
    //   icon: ['fab', 'free-code-camp'],
    //   color: '#006400',
    //   header: 'freeCodeCamp',
    //   text:
    //     'This has been one of my learning resources and I have completed several of their courses and projects and frequently use it to refresh my memory.'
    // }
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
  padding: 5rem 1rem;
}
.test {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
@media screen and (max-width: 800px) {
  .skills {
    padding: 2rem 1rem;
  }
}
</style>
