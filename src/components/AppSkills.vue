<template>
  <div id="skills">
    <div class="intro">
      <div class="intro-header">
        <h2>my skills</h2>
        <p>
          I have a respect for the design, process, and craft of web
          development, with an understanding of the client experience being
          central to business needs. I enjoy working in a team and interacting
          with people of different capabilities. I have the written and verbal
          communication skills required to articulate effectively and the
          determination and drive to succeed in web development.
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
        <font-awesome-icon :icon="['fab', 'html5']" class="fa-icon" />
        <div class="skill-text">
          <h3>HyperText Markup Language (HTML)</h3>
          <p>
            This is skill I started to learn first, starting with using notepad
            and writing each line.I am very pleased with
            <strong>VSCode</strong> to do the simple parts for me! The building
            block for all my development starts with good, simple HMTL
            structure.
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon :icon="['fab', 'css3-alt']" class="fa-icon" />
        <div class="skill-text">
          <h3>Cascading Style Sheets (CSS)</h3>
          <p>CSS is used to style and shape my sites.</p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon :icon="['fab', 'js']" class="fa-icon" />
        <div class="skill-text">
          <h3>JavaScript</h3>
          <p>
            I would say JavaScript is the skill with the most scope for
            continued learning and increased efficiency. I use
            <strong>ES6</strong> code where possible and am always practicing
            and learning new code, including
            <strong>ES.Next</strong>
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon :icon="['fab', 'vuejs']" class="fa-icon" />
        <div class="skill-text">
          <h3>Vue</h3>
          <p>
            I have been using and learning Vue since I started JavaScript and
            love its simple syntax, great support and ease of use. All my
            projects are build in Vue and I use
            <strong>Vuex</strong> and <strong>vue-router</strong> where needed.
            While I am comfortable with the Vue framwork I am keen to learn
            <strong>React</strong> and
            <strong>Angular</strong>
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon :icon="['fab', 'sass']" class="fa-icon" />
        <div class="skill-text">
          <h3>SCSS</h3>
          <p>
            I use SCSS to set and use
            <strong>variables</strong>, <strong>functions</strong>, or perform
            arithmetic operations..
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon :icon="['fab', 'github']" class="fa-icon" />
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
        <font-awesome-icon icon="mobile-alt" class="fa-icon" />
        <div class="skill-text">
          <h3>Responsive Design</h3>
          <p>
            With the changing ways we view and interact with screens I design
            each website to the latest standards to be responsive and ensure the
            user gets the best experience. I have used a combination of
            <strong>Flexbox</strong>, <strong>CSS Grid</strong> and CSS
            frameworks such as <strong>Bootstrap</strong> and
            <strong>Bulma</strong> to design my portfolio
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon :icon="['fab', 'google']" class="fa-icon" />
        <div class="skill-text">
          <h3>Google Firebase</h3>
          <p>
            All of my sites are hosted on
            <strong>Firebase</strong>, I use their <strong>hosting</strong>,
            <strong>authentication</strong>, <strong>database</strong> and
            <strong>storage</strong>. I have enjoyed learning how to interact
            with a database, including <strong>CRUD</strong> (Create, Read,
            Update, Delete) projects. I have also learnt to manage user accounts
            and permissions and security such as
            <strong>sanitizing</strong> data.
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon :icon="['fab', 'bootstrap']" class="fa-icon" />
        <div class="skill-text">
          <h3>Bootstrap</h3>
          <p>
            I have used Bootstrap to quickly design and build websites. I like
            its vast library, and ease of use.
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon icon="bug" class="fa-icon" />
        <div class="skill-text">
          <h3>Testing</h3>
          <p>
            <a href="https://vuejs.org/v2/guide/unit-testing.html"
              >https://vuejs.org/v2/guide/unit-testing.html</a
            >
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon :icon="['fab', 'chrome']" class="fa-icon" />
        <div class="skill-text">
          <h3>Browser Developer tools</h3>
          <p>
            I use these tools to test and fine tune my pages in the browser
            itself, allowing me to see the changes live. I use the console to
            view and track any errors that
            <em>may</em> occur.
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon :icon="['fab', 'npm']" class="fa-icon" />
        <div class="skill-text">
          <h3>npm</h3>
          <p>
            I use npm to maintain, share and publish my dependencies and
            projects
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon :icon="['fab', 'free-code-camp']" class="fa-icon" />
        <div class="skill-text">
          <h3>freeCodeCamp</h3>
          <p>
            This has been one of my learning resources and I have completed
            several of their courses and projects
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon :icon="['fab', 'linkedin']" class="fa-icon" />
        <div class="skill-text">
          <h3>linkin</h3>
          <p>
            <a href="https://www.linkedin.com/in/adam-ponting/" target="_blank"
              >www.linkedin.com/in/adam-ponting</a
            >
          </p>
        </div>
      </div>

      <div class="skill-icon">
        <font-awesome-icon icon="terminal" class="fa-icon" />
        <div class="skill-text">
          <h3>Command Line Interface (CLI)</h3>
          <p>
            I enjoy using a Graphical User Interface (GUI) for their ease of use
            and will use a GUI for the majority of my work. However I am happy
            to use the CLI where it is needed to solve a problem.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
