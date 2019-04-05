<template>
  <div class="flex-container" id="Story">
    <div class="intro">
      <h2>- My Story</h2>
      <p>I am organised, highly motivated and have an eye for detail.</p>
      <p>
        I have had an interest in web development for many years and after a
        period working abroad I am looking to turn this interest into a career.
      </p>
      <p>
        I am looking forward to undertaking a new role in finance as I feel this
        is an area that matches well with my own skills and ambitions. Whilst
        searching for this role, I am keen to gain experience working in an
        office environment through temporary work.
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
    <div class="pic"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "src/assets/css/colorscheme.scss";

.flex-container {
  display: flex;
  flex-direction: row;
  height: 100vh;
  min-height: fit-content;
  flex: 1 1 50%;
  flex-wrap: nowrap;
  width: 100%;
}
.pic {
  background: url("../assets/adam4.jpg") no-repeat center;
  flex: 1 0 50%;
}
.intro {
  display: flex;
  flex-direction: column;
  background: $bgclear;
  color: $bgclearfont;
  flex: 1 1 50%;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  padding: 5em 2em 1em;
  justify-content: space-around;

  // color: rgb(57, 88, 166);
}
.intro > h2 {
  color: $bglightfont;

  font-weight: 600;
}
.intro > p::first-letter {
  font-size: 1.5em;
  color: $bglightfont;
}

@media screen and (max-width: 768px) {
  .flex-container {
    flex-wrap: wrap;
    min-height: fit-content;
  }
  .pic {
    background: url("../assets/adam3.jpg") no-repeat top center;
    background-size: cover;
    flex: 1 1 100%;
    height: 50%;
    order: 0;
  }
  .intro {
    flex: 1 1 100%;
    padding: 1em 1em;
    order: 1;
  }
  .intro h2 {
    align-self: center;
  }
}
</style>
