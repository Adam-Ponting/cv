<template>
  <div>
    <div class="bg"></div>
    <div>
      <h1>Triathlon Post Event Survey</h1>
    </div>
    <form @submit.prevent="validateBeforeSubmit()">
      <fieldset class="personal">
        <legend>1. Personal Details:</legend>
        <h2 class="field-header">
          complete our survey to be entered into a prize draw to win a place in
          next year's event and a sponsor goodybag worth £100
        </h2>
        <div class="personal-form">
          <div class="question">
            <label for="firstname">first name:</label>
            <br />
            <label for="surname">surname:</label>
            <label for="postcode">postcode:</label>
            <label for="region">region:</label>
            <label for="country">country:</label>
            <label for="email">email address:</label>
            <label for="phone">phone number:</label>
          </div>
          <div class="answer">
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter your first name"
              v-model="form.firstname"
              v-validate="{
                required: true,
                max: 20,
                alpha: true
              }"
              :class="{
                input: true,
                'is-danger': errors.has('firstname')
              }"
            />
            <span v-show="errors.has('firstname')" class="input-error">{{
              errors.first('firstname')
            }}</span>
            <br />
            <input
              type="text"
              name="surname"
              id="surname"
              placeholder="Enter your surname"
              v-model="form.surname"
              v-validate="{
                required: true,
                max: 20,
                alpha: true
              }"
              :class="{
                input: true,
                'is-danger': errors.has('surname')
              }"
            />
            <span v-show="errors.has('surname')" class="input-error">{{
              errors.first('surname')
            }}</span>

            <input
              type="text"
              name="postcode"
              id="postcode"
              v-model="form.postcode"
              placeholder="Enter your postcode"
              @blur="lookUp()"
              @click="form.postcode = ''"
              v-validate="{ required: true, max: 10 }"
              :class="{
                input: true,
                'is-danger': errors.has('postcode')
              }"
            />
            <span v-show="errors.has('postcode')" class="input-error">{{
              errors.first('postcode')
            }}</span>
            {{ searching }}
            <input
              type="text"
              name="region"
              id="region"
              disabled
              v-model="form.region"
              placeholder="Enter your postcode"
              :class="{
                input: false,
                'is-danger': errors.has('postcode')
              }"
            />
            <input
              type="text"
              name="country"
              id="country"
              disabled
              v-model="form.country"
              placeholder="Enter your postcode"
              :class="{
                input: false,
                'is-danger': errors.has('postcode')
              }"
            />
            <input
              type="email"
              name="email"
              id="email"
              v-validate="{ required: true, max: 30 }"
              :class="{
                input: true,
                'is-danger': errors.has('email')
              }"
            />
            <span v-show="errors.has('email')" class="input-error">{{
              errors.first('email')
            }}</span>

            <input
              type="number"
              name="phone"
              id="phone"
              v-validate="{
                required: true,
                max: 15,
                alpha_num: true
              }"
              :class="{
                input: true,
                'is-danger': errors.has('phone')
              }"
            />
            <span v-show="errors.has('phone')" class="input-error">{{
              errors.first('phone')
            }}</span>
          </div>
          <br />
        </div>
      </fieldset>
      <fieldset class="question">
        <legend>2. The Event</legend>
        <h2>About you</h2>
        <br />
        <label for="firsttri">Was this your first triathlon?</label>
        <input type="radio" name="firsttri" value="yes" id="firsttri" />yes
        <input type="radio" name="firsttri" value="no" />no
        <br />
        <label for="enjoy">did you enjoy the event</label>
        <input type="radio" name="enjoy" value="yes" id="enjoy" />yes
        <input type="radio" name="enjoy" value="no" />no
        <br />
        <label for="triagain">would you take part in the event again?</label>
        <input type="radio" name="triagain" value="yes" id="triagain" />yes
        <input type="radio" name="triagain" value="no" />no
        <br />
        <label for="recommend"
          >would you recommend the event to a friend?</label
        >
        <input type="radio" name="recommend" value="yes" id="recommend" />yes
        <input type="radio" name="recommend" value="no" />no
        <br />
        <label for="fundraise">Did you fundraise for charity</label>
        <input type="radio" name="fundraise" id="fundraise" value="yes" />yes
        <input type="radio" name="fundraise" id="fundraise" value="no" />
        no
      </fieldset>
      <fieldset>
        <legend>3. How did we do?</legend>
        <h2>How would you rate the following elements of the event?</h2>
        <br />
        <label for="swim">swim course</label>
        <input type="radio" name="swim" value="excellent" id="swim" />excellent
        <input type="radio" name="swim" value="good" />good
        <input type="radio" name="swim" value="average" />average
        <input type="radio" name="swim" value="poor" />
        poor
        <br />
        <label for="bike">bike course</label>
        <input type="radio" name="bike" value="excellent" id="swim" />excellent
        <input type="radio" name="bike" value="good" />good
        <input type="radio" name="bike" value="average" />average
        <input type="radio" name="bike" value="poor" />poor
        <br />
        <label for="run">run course</label>
        <input type="radio" name="run" value="excellent" id="swim" />excellent
        <input type="radio" name="run" value="good" />good
        <input type="radio" name="run" value="average" />average
        <input type="radio" name="run" value="poor" />poor
        <br />
        <label for="organisation">organisation</label>
        <input
          type="radio"
          name="organisation"
          value="excellent"
          id="swim"
        />excellent <input type="radio" name="organisation" value="good" />good
        <input type="radio" name="organisation" value="average" />average
        <input type="radio" name="organisation" value="poor" />poor
        <br />
        <label for="communication">pre-event communication</label>
        <input
          type="radio"
          name="communication"
          value="excellent"
          id="swim"
        />excellent <input type="radio" name="communication" value="good" />good
        <input type="radio" name="communication" value="average" />average
        <input type="radio" name="communication" value="poor" />poor
        <br />
        <label for="merchandise">Official merchandise</label>
        <input
          type="radio"
          name="merchandise"
          value="excellent"
          id="swim"
        />excellent <input type="radio" name="merchandise" value="good" />good
        <input type="radio" name="merchandise" value="average" />average
        <input type="radio" name="merchandise" value="poor" />poor
        <br />
        <label for="helpdesk">help desk</label>
        <input
          type="radio"
          name="helpdesk"
          value="excellent"
          id="swim"
        />excellent <input type="radio" name="helpdesk" value="good" />good
        <input type="radio" name="helpdesk" value="average" />average
        <input type="radio" name="helpdesk" value="poor" />poor
        <br />
        <label for="overall">the overall event</label>
        <input
          type="radio"
          name="overall"
          value="excellent"
          id="swim"
        />excellent <input type="radio" name="overall" value="good" />good
        <input type="radio" name="overall" value="average" />average
        <input type="radio" name="overall" value="poor" />poor
      </fieldset>
      <fieldset>
        <legend>4. Next time...</legend>
        <label for="feedback">
          <h2>
            Is there anything you liked in particular or would change about the
            event?
          </h2>
        </label>
        <input type="text" name="feedback" id="feedback" />
      </fieldset>
      <input type="submit" />
    </form>
    <div class="wrap">
      <div class="q">question</div>
      <div class="a">answer</div>
    </div>
    <div>
      <div v-if="loading">Loading.....</div>

      <div>{{ jokes }}</div>
      <input type="text" v-model="test" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      form: {
        firstname: '',
        surname: '',
        postcode: '',
        region: '',
        country: '',
        email: '',
        phone: ''
      },
      jokes: [],
      loading: false,
      status: true,
      surnameStyle: true,
      searching: '',
      test: ''
    }
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          alert("Form Submitted!");
          return
        }

        alert('Correct them errors!')
      })
    },
    surname() {
      this.status = true
    },
    lookUp() {
      // https://stackoverflow.com/questions/40996344/axios-cant-set-data
      // http://michaelnthiessen.com/this-is-undefined/

      this.searching = 'searching'
      axios
        .get('https://api.postcodes.io/postcodes/' + this.form.postcode)
        .then(
          response => {
            //  console.log(response);
            this.searching = ''
            this.status = true
            this.form.region = response.data.result.parliamentary_constituency
            this.form.country = response.data.result.country
          },
          error => {
            this.searching = ''
            this.form.postcode = 'Please enter a valid postcode' + error
            this.status = false
          }
        )
    }
  }
}
</script>

<style scoped lang="scss">
input.is-danger {
  background: lightcoral;
  border: 2px solid red;
}
.input {
  background: lightblue;
}
.input-error {
  color: red;
  font-size: 0.8em;
}
.wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.q {
  flex: 1 1 100%;
  background: red;
  align-self: flex-end;
  text-align: end;
}
.a {
  flex: 1 1 100%;
  background: green;
}
.bg {
  background-size: 100%;
  background: url('http://www.bannatynegroup.co.uk/assets/images/social-bg-2.jpg')
    no-repeat center;
  background-attachment: fixed;
  opacity: 0.2;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.personal {
  position: relative;
  left: 0;
  //  top: 50%;
  // width: 100%;
  color: #000;
}
.personal-form {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: nowrap;
}
.question {
  flex: 1 1 50%;
  // align-self: flex-start;
  margin: 0.6em 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: flex-end;
}
.question label {
  flex: 1 1 100%;
  border: 1px solid black;
  text-align: end;
  width: 50%;
}
.answer {
  flex: 1 1 50%;
  margin: 0.6em 0;
  display: flex;
  flex-direction: column;
}
.answer input,
.answer select {
  width: 50%;
}
.field-header {
  background-color: #111;
  border-radius: 90px;
  color: #fff;
  padding: 0.3em;
  font-size: 1em;
  letter-spacing: 0.3em;
  box-sizing: border-box;
}
// Turn Off Number Input Spinners
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
