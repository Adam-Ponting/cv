<template>
  <div class="flex-container" id="Skills">
    <img src="../assets/mountain.jpg" alt class="side-image" />
    <div class="side-content">
      <h2 class="side-header">- my skills</h2>
      <div class="side-paragraph">
        <p>html - dmsadas</p>
        <p>css - dmsadas</p>
        <p>javascripr - dmsadas</p>
        <p>vue - dmsadas</p>
        <p>I am organised, highly motivated and have an eye for detail.</p>
        <p>
          I have had an interest in web development for many years and after a
          period working abroad I am looking to turn this interest into a
          career.
        </p>
        <p>
          I am looking forward to undertaking a new role in finance as I feel
          this is an area that matches well with my own skills and ambitions.
          Whilst searching for this role, I am keen to gain experience working
          in an office environment through temporary work.
        </p>
        <p>
          an attention to detail, care for UX, an understanding of information
          hierarchy, and hopefully at least a smidge of a sense of beauty.
        </p>

        <p>
          I have considerable experience working in teams towards business goals
          and I am calm under pressure. I am IT literate with good knowledge of
          Microsoft Office. I am looking forward to undertaking a new role in
          finance as I feel this is an area that matches well with my own skills
          and ambitions. Whilst searching for this role, I am keen to gain
          experience working in an office environment through temporary work.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "src/assets/css/colorscheme.scss";

.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  background: $bgdark;
  color: white;
}
.side-image {
  flex: 1 1 600px;
  width: 60%;
}
.side-content {
  flex: 1 1 400px;
  padding: 0 1em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.side-header {
  flex: 1 1 100%;
  align-self: flex-start;
  text-transform: capitalize;
  font-variant: small-caps;
  font-weight: bold;
  font-size: 2em;
  letter-spacing: 0.2em;
  color: #48e7e9;
}
.side-paragraph {
  flex: 1 1 20px;
  line-height: 1.2em;
  color: white;
  padding: 0 1em;
}
</style>
