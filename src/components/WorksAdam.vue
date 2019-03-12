<template>
  <div>
    <div id="works-heading">
      <h3>My Works</h3>
      <p>
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin.
      </p>
      <br />
      <a href>view all works</a>
    </div>
    <div id="preview" class="preview small-component">
      <works-adam-preview :colour="'red'" :is="surveyForm" />
      <works-adam-preview :colour="'green'" :is="tributePage" />
      <works-adam-preview :colour="'blue'" :is="productLandingPage" />
      <works-adam-preview :colour="'yellow'" />
    </div>
  </div>
</template>

<script>
import WorksAdamPreview from "@/components/WorksAdamPreview.vue";
import SurveyForm from "@/components/freeCodeCamp/SurveyForm.vue";
import TributePage from "@/components/freeCodeCamp/TributePage.vue";
import ProductLandingPage from "@/components/freeCodeCamp/ProductLandingPage.vue";

export default {
  components: { WorksAdamPreview, SurveyForm, TributePage, ProductLandingPage },
  data() {
    return {
      surveyForm: SurveyForm,
      tributePage: TributePage,
      productLandingPage: ProductLandingPage
    };
  },
  methods: {
    direct() {
      alert("nah");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#preview {
  display: flex;
  flex-direction: row;
}
#preview > div {
  flex: 1 1 20%;
  margin: 0 0.2%;
  flex-wrap: wrap;
}
#works-heading {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // vertically center heading and p
  align-items: center;
}
#works-heading > h3 {
  width: 20%;
  background: lightcoral;
}
#works-heading > p {
  width: 80%;
  background: lightgreen;
}
#works-heading > a {
  // move a to end of the new line
  display: flex;
  background: lightblue;
  width: 100%;
  justify-content: flex-end;
}
.small-component {
  // height: 70vh;
  // overflow: hidden;
  cursor: pointer;
  border: 1px solid black;
}
.preview > img {
  background-color: pink;
}
.small-component {
  //height: 70vh;
  // overflow: hidden;
  cursor: pointer;
  border: 1px solid black;
}
</style>
