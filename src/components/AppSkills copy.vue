<template>
  <div id="skills">
    <div class="intro">
      <div class="intro-header">
        <h2>my skills</h2>
        <p>
          I take great pride in my
          <strong>attention to detail</strong> and throughout my career as a
          have made use of my logical approach to
          <strong>problem solving</strong>. <br />I have considerable experience
          of working independently and in <strong>teams</strong>, including
          management. This has involved managing complex ranges of tasks,
          meeting <strong>deadlines</strong> and achieving
          <strong>targets</strong>. <br />I have the written and verbal
          <strong>communication</strong> skills required to articulate
          effectively and the <strong>determination</strong> and drive to
          succeed in web development.
        </p>
      </div>

      <!--
        <font-awesome-icon icon="graduation-cap" class="fa-icon-skill"/>
        <p>These are some of skills I have been using in my projects:</p>
        <p>
          <a
            href="https://skillcrush.com/2017/03/20/front-end-developer-skills/"
          >https://skillcrush.com/2017/03/20/front-end-developer-skills/</a>
          <a
            href="https://skillcrush.com/2016/10/31/web-developer-portfolio/"
          >https://skillcrush.com/2016/10/31/web-developer-portfolio/</a>
        </p>
      -->

      <div class="skill-icon">
        <font-awesome-icon
          style="color:#F16529"
          :icon="['fab', 'html5']"
          title="HTML5"
          class="fa-icon"
        />
        <div class="skill-text">
          <h3>HyperText Markup Language (HTML)</h3>
          <p>
            This is where it all begins! The building block for all my
            development starts with
            <strong>good</strong> and <strong>simple</strong> HMTL structure.
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon
          style="color:#DD3A0A"
          :icon="['fab', 'css3-alt']"
          title="CSS3"
          class="fa-icon"
        />
        <div class="skill-text">
          <h3>Cascading Style Sheets (CSS)</h3>
          <p>
            I have enjoyed learning CSS to
            <strong>style</strong> and <strong>shape</strong> my sites. CSS
            opens up many options to engage the user and is an area I'm actively
            experimenting in.
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon
          style="color:#F0DB4F"
          :icon="['fab', 'js']"
          title="javaScript"
          class="fa-icon"
        />
        <div class="skill-text">
          <h3>JavaScript</h3>
          <p>
            JavaScript is where I focus my continued learning with increased
            <strong>efficiency</strong>. I use <strong>ES6</strong> code where
            possible and am always practicing and learning new code.
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon
          style="color:#41B883"
          :icon="['fab', 'vuejs']"
          title="Vue"
          class="fa-icon"
        />
        <div class="skill-text">
          <h3>Vue.js</h3>
          <p>
            I have been using and learning Vue alongside javaScript and love its
            simple syntax, great support and ease of use. All my projects are
            built in Vue and I use
            <strong>Vuex</strong> and <strong>Vue-router</strong> where needed.
            I am comfortable with the Vue framework and look forward to the new
            features expected in <strong>Vue 3.0</strong>
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon
          style="color:#472ada"
          :icon="['fas', 'mobile-alt']"
          title="Responsive Design"
          class="fa-icon"
        />
        <div class="skill-text">
          <h3>Responsive Design</h3>
          <p>
            With the changing ways we view and interact with screens I design
            each website to the latest standards to be responsive and ensure the
            user gets the best experience. I have used a combination of
            <strong>Flexbox</strong>, <strong>CSS Grid</strong> and CSS
            frameworks such as <strong>Bootstrap</strong> to design my portfolio
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon
          style="color:#bf4080"
          :icon="['fab', 'sass']"
          title="SCSS"
          class="fa-icon"
        />
        <div class="skill-text">
          <h3>SCSS</h3>
          <p>
            I use SCSS to set and use
            <strong>variables</strong>, <strong>functions</strong>, and perform
            <strong>arithmatic</strong> operations. It makes my life easier!
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon
          style="color:#24292e"
          :icon="['fab', 'github']"
          title="GitHub"
          class="fa-icon"
        />
        <div class="skill-text">
          <h3>GitHub</h3>
          <p>
            I use GitHub to plan, build and store my code. I have experience of
            <strong>version control</strong> and <strong>forking</strong>, with
            an understanding of the process of tracking and controlling changes
            to source code.
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon
          style="color:#ff8f00"
          :icon="['fab', 'google']"
          title="Google Firebase"
          class="fa-icon"
        />
        <div class="skill-text">
          <h3>Google Firebase</h3>
          <p>
            Most of my sites are hosted on Google's Firebase servers, I use
            their
            <strong>hosting</strong>, <strong>authentication</strong>,
            <strong>database</strong> and <strong>storage</strong>. I have
            enjoyed learning how to interact with a database, including
            <strong>CRUD</strong> (Create, Read, Update, Delete) projects. I
            have also learnt to manage user accounts and permissions and
            security such as <strong>sanitizing</strong> data.
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon
          style="color:#4C8BF5"
          :icon="['fab', 'chrome']"
          title="Browser Developer Tools"
          class="fa-icon"
        />
        <div class="skill-text">
          <h3>Browser Developer tools</h3>
          <p>
            I use Chrome Developer Tools to test and fine tune my pages in the
            browser itself, allowing me to see the changes live. I use the
            console to view and track any errors that
            <em>may</em> occur.
          </p>
        </div>
      </div>

      <!--       <div class="skill-icon">
        <font-awesome-icon
          style="color:#472ada"
          :icon="['fas', 'bug']"
          title="Testing"
          class="fa-icon"
        />
        <div class="skill-text">
          <h3>Testing</h3>
          <p>
            <a href="https://vuejs.org/v2/guide/unit-testing.html">nope!</a>
          </p>
        </div>
      </div>
      -->
      <div class="skill-icon">
        <font-awesome-icon
          style="color:#cb3837"
          :icon="['fab', 'npm']"
          title="Node Package Manager"
          class="fa-icon"
        />
        <div class="skill-text">
          <h3>Node Package Manager (npm)</h3>
          <p>
            I use npm to maintain, share and publish my dependencies and
            projects and have experience using
            <strong>axios</strong> and <strong>Highcharts</strong> along with
            many other plugins.
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon
          style="color:#080135"
          :icon="['fab', 'bootstrap']"
          title="Bootstrap"
          class="fa-icon"
        />
        <div class="skill-text">
          <h3>Bootstrap</h3>
          <p>
            I have used Bootstrap to quickly design and build websites. I like
            its vast library and speed I can
            <strong>prototype</strong> a website.
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon
          style="color:#61b2a7"
          :icon="['fas', 'clock']"
          title="Moment.js"
          class="fa-icon"
        />
        <div class="skill-text">
          <h3>Moment.js</h3>
          <p>
            I have used Moment.js to parse, validate, manipulate, and display
            dates and times in JavaScript.
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon
          style="color:#472ada"
          :icon="['fas', 'terminal']"
          title="Command Line Interface"
          class="fa-icon"
        />
        <div class="skill-text">
          <h3>Command Line Interface (CLI)</h3>
          <p>
            I am happy to use the CLI where it is needed to solve a problem.
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon
          style="color:#006400"
          :icon="['fab', 'free-code-camp']"
          title="freeCodeCamp"
          class="fa-icon"
        />
        <div class="skill-text">
          <h3>freeCodeCamp</h3>
          <p>
            This has been one of my learning resources and I have completed
            several of their courses and projects and frequently use it to
            refresh my memory.
          </p>
        </div>
      </div>

      <!--       <div class="skill-icon">
        <font-awesome-icon
          style="color:#0077b5"
          :icon="['fab', 'linkedin']"
          title="LinkedIn"
          class="fa-icon"
        />
        <div class="skill-text">
          <h3>linkin</h3>
          <p>
            <a href="https://www.linkedin.com/in/adam-ponting/" target="_blank">linkedin</a>
          </p>
        </div>
      </div>
      -->
    </div>
  </div>
</template>
