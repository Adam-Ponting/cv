<template>
  <div id="product-landing-page">
    <div class="grid-container-nav">
      <img
        src="https://www.evanscycles.com/medias/Evans-Cycles-logo.png?context=bWFzdGVyfGltYWdlc3wyMDQyN3xpbWFnZS9wbmd8aW1hZ2VzL2gxYy9oMDIvODkyMjUyNjU0Nzk5OC5wbmd8ZjVhMTc1ZDQwYmQ0N2ZkYzA4NTcwZjhkYTFiMjhhNzNiOTllZGEwZGRkOTY1YjE4ZDA3Y2YzYzUzNWFjOTNlZg&Lo0P=74ce0c3fba1ac29b5fcfe6e7606e9c46Db"
        alt
      />
      <a href="#services">Services</a>
      <a href="#prices">Prices</a>
    </div>
    <div class="grid-container-promo">
      <h1>Evans Cycles Bike Servicing</h1>
      <p>
        One thing we should point out is that Evans Cycles is the only bike shop
        that we know of with its own full-time workshop training team and
        in-house training facility. We have also developed our own
        OFQUAL-certified training programme that goes above and beyond industry
        standards — every Evans Cycles mechanic goes through this programme.
        That means you can be sure that whichever bike servicing option you
        choose, your bike will get nothing but the very best care.
      </p>
      <input type="email" name id placeholder="Enter your email address" />
      <button>Book me in</button>
    </div>
    <div id="services">
      <div class="service grid-container-items">
        <div class="service-text">
          <h2>Bronze Service</h2>
          <p>
            The Evans Cycles Bronze Service is a great option for a typical
            six-month service, when your bike is running well day-to-day but may
            need a few things checking to ensure continued enjoyment.
          </p>
        </div>
        <div class="responsive-iframe">
          <iframe
            src="https://www.youtube.com/embed/2M2uKgObLd8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="service grid-container-items">
        <div class="service-text">
          <h2>Silver Service</h2>
          <p>
            The Evans Cycles Silver Service includes all the steps taken in
            Evans Cycles Bronze Service but goes further in terms of problem
            finding and giving component parts a more rigorous overhaul.
          </p>
        </div>
        <div>
          <div class="responsive-iframe">
            <iframe
              src="https://www.youtube.com/embed/0WzKH4ux7K4"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div class="service grid-container-items">
        <div class="service-text">
          <h2>Gold Service</h2>
          <p>
            The Evans Cycles Gold Service is the most thorough level of
            servicing and, as well as all the stages undertaken in the Bronze
            and Silver Services, the Gold Service includes a complete strip down
            of the bike.
          </p>
        </div>
        <div>
          <div class="responsive-iframe">
            <iframe
              src="https://www.youtube.com/embed/mBuE1mIY6D4"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <div id="prices" class="grid-container-price">
      <div class="item">
        <div>
          <h3>Bronze Service £35</h3>
          <img
            src="data:image/jpeg;base64,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"
            alt
          />
        </div>
        <div>
          <p>Bike areas checked:</p>
          <dl>
            <dt>Frame</dt>

            <dd>
              - Frame &amp; forks wiped down and checked for alignment
            </dd>
            <dd>- Full safety check</dd>

            <dt>Wheels</dt>

            <dd>- Wheels and tyres inspected for wear</dd>
            <dt>drive train</dt>

            <dd>- Gears and brakes adjusted</dd>
            <dd>- Chain checked and lubricated</dd>
          </dl>
        </div>

        <button>Bronze</button>
      </div>
      <div class="item">
        <div>
          <h3>Silver Service £60</h3>
          <img
            src="data:image/jpeg;base64,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"
            alt
          />
        </div>
        <div>
          <p>Bronze service plus:</p>
          <dl>
            <dt>Wheels</dt>
            <dd>- Hubs and rims checked for damage and wear</dd>
            <dd>
              - Bearings checked for free movement and adjusted (if applicable)
            </dd>
            <dd>- Wheels trued and spokes tensioned</dd>
            <dt>Headset</dt>
            <dd>
              - Checked for free movement and adjusted as necessary
            </dd>
            <dt>Bottom Bracket</dt>
            <dd>
              - Checked for free movement and adjusted as necessary
            </dd>
            <dt>drive train</dt>
            <dd>
              - Removed, cleaned, checked for wear and re-lubricated
            </dd>
          </dl>
        </div>

        <button>Silver</button>
      </div>
      <div class="item">
        <div>
          <h3>Gold Service £110</h3>
          <img
            src="data:image/jpeg;base64,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"
            alt
          />
        </div>
        <div>
          <p>Silver service plus:</p>

          <dl>
            <dt>Wheels</dt>
            <dd>
              - Hubs disassembled, cleaned, inspected and reassembled
            </dd>
            <dt>Headset</dt>
            <dd>
              - Removed, cleaned, regreased (if applicable), refitted &amp;
              checked for movement (replacement fitted if necessary)
            </dd>
            <dt>Bottom Bracket</dt>
            <dd>
              - Removed, cleaned, regreased (if applicable), refitted &amp;
              checked for movement (replacement fitted if necessary)
            </dd>
            <dt>drive train</dt>
            <dd>
              - Removed, cleaned, checked for wear and re-lubricated
            </dd>
          </dl>
        </div>

        <button>Gold</button>
      </div>
    </div>
    <div class="grid-container-footer">
      <a>Privacy</a>
      <a>About Us</a>
      <a>Contact Us</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#product-landing-page {
  background: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: black;
}
.grid-container-nav {
  display: grid;
  grid-template-columns: 0.9fr auto auto;
  height: auto;
  padding: 1em;
  background: #005b54;
  border-bottom: 3px solid #f7a923;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  justify-items: end;
  background: #005b54;
}
.grid-container-nav > a {
  align-self: center;
  background: #005b54;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  padding: 0.5em;
  margin: 0 1em;
  color: white;
  text-decoration: none;
}
.grid-container-nav > a:hover {
  color: black;
  text-decoration: none;
  background: white;
}
.grid-container-promo {
  display: grid;
  grid-template-rows: auto auto auto;
  background: white;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  color: #005b54;
}
.grid-container-promo h1 {
  padding: 1em 0;
  border-bottom: 3px solid #f7a923;
}
.grid-container-promo p {
  color: black;
  padding: 0 0 2em;
}
.grid-container-promo input {
  width: 70%;
  margin: 0 auto;
  padding: 0.5em;
  background: rgba(216, 236, 236, 1);
}
.grid-container-promo button {
  cursor: pointer;
  width: 50%;
  margin: 1em auto;
  padding: 1em;
  background: #f7a923;
  text-transform: uppercase;
  font-weight: bold;
}
.service {
  margin: 1em 10%;
  //  background: rgb(216, 236, 236);
}
.grid-container-items {
  display: grid;
  grid-template-columns: 0.7fr 0.3fr;
  box-sizing: border-box;
  grid-gap: 1em;
  padding: 2em 0;
  // vertically center items
  align-items: center;
  background: rgba(216, 236, 236, 1);
}
.grid-container-items .service-text {
  padding: 0 2em;
}
.grid-container-items p {
  line-height: 1.5em;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  // background: rgba(0, 91, 84, 0);
  padding: 2em;
}
.grid-container-items h2 {
  line-height: 1.5em;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  // background: rgba(0, 91, 84, 0);
}
.grid-container-items p::first-letter {
  line-height: 1.5em;
  font-size: 1.5em;
  font-weight: bold;
}
.grid-container-price {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
  width: 80%;
  margin: 0 auto;
}
.grid-container-price button {
  text-decoration: none;
  width: 50%;
  margin: 0 auto 1em;
  padding: 1em;
  background: #f7a923;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
}
.item > p {
  font-weight: bold;
  font-size: 1.2em;
}
.grid-container-price .item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  // justify-items: center;
  // align-content: space-between;
  text-align: center;
  border: 1px solid black;
}
.grid-container-price .item img {
  width: 100%;
  border: 1px solid black;
}

.grid-container-price .item dd {
  margin-right: 40px;
  list-style-type: disc;
  text-align: left;
}
.grid-container-price .item dt {
  font-weight: bold;
  text-transform: capitalize;
  font-size: 1.2em;
  padding-top: 0.2em;
  padding-left: 1.5em;
}
.item {
  background: rgba(216, 236, 236, 1);
  // background: #005b54;
  color: black;
}
.item p {
  font-weight: bold;
  text-transform: capitalize;
  font-size: 1.2em;
}
.item img {
  width: 90%;
}
.grid-container-footer {
  margin-top: 1em;
  display: grid;
  padding: 1em;
  grid-template-columns: 0.1fr 0.1fr 0.1fr;
  background: #005b54;
  border-top: 3px solid #f7a923;
}
.grid-container-footer a {
  color: white;
  margin: 0 0.5em;
  padding: 0.5em;
  // background: #f7a923;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
}
.grid-container-footer a:hover {
  cursor: pointer;
  color: black;
  background: white;
  margin: 0 0.5em;
  padding: 0.5em;
  // background: #f7a923;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
}
// makes iframe responsive
.responsive-iframe {
  overflow: hidden;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 ratio */
  padding-top: 3.5em;
  height: 0;
}
.responsive-iframe iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 100%;
  padding: 0 0.5em;
  box-sizing: border-box;
}
@media screen and (max-width: 768px) {
  .grid-container-nav {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .grid-container-nav img {
    width: 100%;
    max-width: 100px;
    justify-self: center;
    align-self: center;
  }
  .grid-container-nav > a {
    text-align: center;
    text-decoration: none;
  }

  .grid-container-promo {
    width: 90%;
  }
  .grid-container-items {
    width: 90%;
    display: grid;
    grid-template-columns: 100%;
    box-sizing: border-box;
    margin: 1em auto;
    grid-gap: 1em;
    padding: 1em 0;
    background: rgba(216, 236, 236, 1);
    // vertically center items
    align-items: center;
  }

  .grid-container-price {
    display: grid;
    grid-template-columns: 1fr;
    width: 80%;
    margin: 0 auto;
  }
  .grid-container-footer {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .responsive-iframe iframe {
    padding: 0;
  }
}
</style>
