<template>
  <div>
    <div id="main">
      <form id="survey-form" action="">
        <fieldset>
          <h1 id="title">Survey Form</h1>
          <p id="description">Let us know what events you're interested in</p>
        </fieldset>

        <div class="formArea">
          <div class="question">
            <label id="name-label" for="">* Name:</label>
          </div>
          <div class="answer">
            <input
              type="text"
              name="name"
              id="name"
              placeholder=" Your name"
              min="2"
              max="20"
              required
            />
          </div>
          <div class="question">
            <label id="email-label" for="">* Email: </label>
          </div>
          <div class="answer">
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" name@email.com"
              required
            />
          </div>
          <div class="question">
            <label id="number-label" for="">* Age: </label>
          </div>
          <div class="answer">
            <input
              type="number"
              name="number"
              id="number"
              placeholder=" Your age"
              min="1"
              max="100"
              required
            />
          </div>
          <div class="question">
            <label for="">What area is your biggest strength:</label>
          </div>
          <div class="answer">
            <select name="disciplines" id="dropdown">
              <option value="" selected hidden disabled
                >Select a discipline</option
              >
              <option value="swim">Swim</option>
              <option value="bike">Bike</option>
              <option value="run">Run</option>
            </select>
          </div>
          <div class="question">
            <label for="bike">Select your bike:</label>
          </div>
          <div class="answer">
            <input type="radio" name="bike" id="" value="mtb" />Mountain Bike
            <br />
            <input type="radio" name="bike" id="" value="hybrid" />Hybrid Bike
            <br />
            <input type="radio" name="bike" id="" value="road" />Road Bike
            <br />
            <input type="radio" name="bike" id="" value="TT" />Time
            Trial/Triathlon Bike
          </div>
          <div class="question">
            <label for="">Select distances you are interested in:</label>
          </div>
          <div class="answer">
            <input type="checkbox" name="" id="" value="superSprint" />Super
            sprint distance: 400m (swim), 10km (bike), 2.5km (run)
            <br />
            <input type="checkbox" name="" id="" value="sprint" />Sprint
            distance: 750m (swim), 20km (bike), 5km (run)
            <br />
            <input type="checkbox" name="" id="" value="standard" />Standard
            (Olympic) distance: 1500m (swim), 40km (bike), 10km (run)
            <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="halfIM"
            />70.3/middle/half-Ironman distance: 1.9km (swim), 90km (bike), 21km
            (run)
            <br />
            <input
              type="checkbox"
              name=""
              id=""
              value="fullIM"
            />Full/long/Ironman distance: 3.8km (swim), 180km (bike), 42km (run)
            - Ironman is a long-distance triathlon organised by the World
            Triathlon Corporation (WTC).
          </div>
          <div class="question">
            <label for="comments">Any additional comments</label>
          </div>
          <div class="answer">
            <textarea name="comments" id="" cols="40" rows="5">
Enter additional comments...</textarea
            >
          </div>
        </div>
        <div>
          <button id="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#main {
  background-color: rgb(228, 217, 219);
  margin: 30px;
  padding: 15px;
  border: 1px solid black;
  border-radius: 15px;
  font-size: 120%;
  line-height: 1.5;
}
#survey-form {
  background-color: rgb(228, 217, 219);
  padding: 2%;
}
#name {
  width: 40%;
  min-width: 200px;
}
#email {
  width: 40%;
  min-width: 200px;
}
.formArea {
  padding: 3% 10%;
}
.question {
  color: red;
  padding-top: 2%;
}
.answer {
  color: purple;
  margin-left: 2%;
}
#number {
  width: 40%;
  min-width: 200px;
}
fieldset {
  background-color: #feb236;
  border-radius: 15px;
}
form {
  background-color: #d64161;
}
input {
  background-color: lightcyan;
  text-indent: 1em;
}
#title,
#description {
  padding: 1%;
  text-align: center;
}
button {
  margin-left: 45%;
  align-self: center;
  align-items: center;
  text-align: center;
}
textarea {
  max-width: 50vw;
}
</style>
