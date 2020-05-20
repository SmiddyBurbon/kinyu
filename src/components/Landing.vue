<template>
  <main>
    <header>
      <column :fluid="true" tagName="nav" :xs="10" :xsShift="1" :sm="10" :smShift="1" :md="10" :mdShift="1" :lg="10" :lgShift="1" :xl="10" :xlShift="1">
        <row style="align-items:center;">
          <column :xs="4" :sm="3" :md="3" :lg="2" :xl="1" class="logo" src="../assets/img/feeder_logo.svg" alt="kinyu">
            <img src="../assets/img/feeder_logo.svg" alt="kinyu" />
          </column>
          <column tagName="ul" :xs="8" :sm="9" :md="9" :lg="10" :xl="11">
            <row>
              <hidden until="sm">
                <li>
                  <router-link to="/login">
                    Sign In
                  </router-link>
                </li>
                <li>
                  <a class="primary" href="mailto:hi@dennisschmidt.net">Get in touch</a>
                </li>
              </hidden>
            </row>
          </column>
        </row>
      </column>
    </header>

    <section id="hero" class="pos">
      <div class="circle"></div>
      <column :lg="6">
        <h1>Create images <br />in the browser</h1>
      </column>
      <column :xs="10" :sm="10" :md="10" :lg="10" :xl="6">
        <h2>Feeder lets you fill images with data and download them as PNG.<br />Without a designer, design tool or design knowledge.<br />From any device.</h2>
      </column>

      <router-link to="/demo" tag="button" type="button" class="primary">
        Try the demo
      </router-link>
    </section>

    <section id="demo" class="neg">
      <div class="circle"></div>
      <column :fluid="true" :xs="10" :xsShift="1" :sm="10" :smShift="1" :md="8" :mdShift="2" :lg="8" :lgShift="2" :xl="6" :xlShift="3">
        <img src="../assets/img/feeder_2x.gif" alt="feeder" />
        <!--<video controls autoplay>
          <source src="../assets/img/feeder.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>-->
      </column>
    </section>

    <section id="about" class="pos">
      <div class="circle"></div>
      <row>
        <column :xs="10" :xsShift="1" :sm="10" :smShift="1" :md="10" :mdShift="1" :lg="10" :lgShift="1" :xl="8" :xlShift="2">
          <h3>What Feeder Offers</h3>
        </column>
      </row>
      <column :xs="12" :xsShift="0" :sm="10" :smShift="1" :md="10" :mdShift="1" :lg="10" :lgShift="1" :xl="8" :xlShift="2">
        <row tagName="ul">
          <column tagName="li" :lg="4">
            <img src="../assets/img/illu_templates.svg" alt="feeder" />
            <h4>Customized templates</h4>
            <p>
              Feeder lets you use your very own template that reflects your brand. You can either submit an existing one or have us create one for you by a professional designer.
            </p>
          </column>
          <column tagName="li" :lg="4">
            <img src="../assets/img/illu_devices.svg" alt="feeder" />
            <h4>No device dependency</h4>
            <p>
              Laptop, tablet or phone – you can use Feeder on any device because it works in the browser. For example the very device you use to post the maintain your social media account.
            </p>
          </column>
          <column tagName="li" :lg="4">
            <img src="../assets/img/illu_api.svg" alt="feeder" />
            <h4>API integration</h4>
            <p>
              If the data you need is already out there in the internet, we can try to connect it. This will make the templates fill automatically and remove any manual effort full stop.
            </p>
          </column>
        </row>
      </column>
    </section>

    <section id="contact" class="neg">
      <div class="circle"></div>
      <column :xs="10" :xsShift="1" :sm="10" :smShift="1" :md="8" :mdShift="2" :lg="8" :lgShift="2" :xl="4" :xlShift="4">
        <h3>Like what you see?</h3>
        <p>
          Whether you want to get onboard, have a question or just want to have a chat – we're happy to hear from you.
        </p>
        <a class="primary" href="mailto:hi@dennisschmidt.net">Get in touch</a>
      </column>
    </section>

    <footer>
      <column :fluid="true" tagName="nav" :lg="10" :lgShift="1">
        <row>
          <column :fluid="true" :lg="6" :lgShift="3">
            <p>Made with &#128420;<br />by <a href="www.dennisschmidt.net" target="_blank">Dennis Schmidt</a><br />in Hamburg, Germany</p>
          </column>
        </row>
      </column>
    </footer>
  </main>
</template>

<script>
  export default {
    name: 'Landing',
    data() {
      return {
        name: ''
      }
    },
    methods: {
    },
    mounted() {
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  header {
    width: 100%;
    max-width: 100vw;
    background: var(--white);
    position: fixed;
    top: 0;
    left: 0;
    padding: 1.5rem 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    flex: 1;
  }
  .logo img {
    width: 100%;
    height: auto;
  }
  a.primary, button {
    transition: .2s;
    -webkit-transition: .2s;
    -moz-transition: .2s;
  }
  a.primary {
    font-size: 1.25rem;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;
    color: var(--white);
    border-radius: 400px;
    display: inline-block;
  }
  a.primary:hover, a.primary:focus {
    filter: brightness(120%);
    color: var(--white);
  }
  header a.primary {
    background-color: var(--turquoise);
    padding: 0.75rem 1.25rem;
    margin-right: 0;
  }
  header nav > div {
    align-items: center;
  }
  header nav > div > div:last-of-type {
    text-align: right !important;
  }
  header nav ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    text-align: right;
  }
  header nav ul div {
    width: 100%;
    align-items: flex-end;
    justify-content: flex-end;
  }
  header nav ul li {
    display: inline-block;
  }
  header a {
    margin-right: 2rem;
    font-weight: 700;
    color: var(--black);
    text-decoration: none;
    font-size: 1rem;
    transition: .2s;
    -webkit-transition: .2s;
    -moz-transition: .2s;
  }
  header a:visited {
    color: var(--black);
    text-decoration: none;
  }
  header a:hover, header a:focus {
    color: var(--turquoise);
  }

  h1 {
    font-size: 4rem;
    letter-spacing: -0.024em;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 2rem;
    line-height: 1.333;
  }
  h3 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    letter-spacing: -0.024rem;
  }
  h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.25rem;
    line-height: 1.4;
  }

  section {
    position: relative;
    background: none;
  }
  .circle {
    width: 400vw;
    height: 400vw;
    position: absolute;
    bottom: 0;
    left: -150vw;
    border-radius: 50%;
  }
  .pos .circle {
    background: var(--white);
  }
  .neg .circle {
    background: -moz-linear-gradient(top, var(--turquoise) 95%, var(--blue) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, var(--turquoise) 95%, var(--blue) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, var(--turquoise) 95%, var(--blue) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  }
  #hero {
    z-index: 9;
  }
  #demo {
    z-index: 8;
  }
  #about {
    z-index: 7;
  }
  #contact {
    z-index: 6;
  }

  #hero {
    padding: 5rem 0 7rem;
    margin-top: 4rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #hero button {
    position: absolute;
    bottom: -2.25rem;
    padding: 1.5rem 2.5rem;
    font: inherit;
    font-size: 1.5rem;
    font-weight: 700;
    background-color: var(--blue);
    margin: 0 auto;
  }
  #hero button:hover {
    filter: brightness(150%);
  }

  #demo {
    padding: 8rem 0;
    color: var(--white);
  }
  #demo img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.08), 0 10px 10px rgba(0,0,0,0.12);
  }

  #about {
    padding: 8rem 0 12rem;
  }
  #about li {
    display: flex;
    flex-direction: column;
  }
  #about img {
    width: 61.8%;
    margin-bottom: 2rem;
    flex: 1;
  }

  #contact {
    text-align: center;
    padding: 5rem 0 0;
    color: var(--white);
  }
  #contact h3 {
    margin-bottom: 1rem;
  }
  #contact a.primary {
    background-color: var(--turquoise);
    padding: 1.5rem 2.5rem;
    margin-top: 3rem;
    margin-bottom: -2.5rem;
    font-size: 1.5rem;
  }

  footer {
    width: 100vw;
    background: var(--white);
    padding: 1.5rem 0 4.5rem;
    margin-top: 6.5rem;
    display: flex;
    align-items: center;
    flex: 1;
  }
  footer p:last-of-type {
    text-align: center;
    font-size: 1rem;
    line-height: 1.333;
  }
  footer p:last-of-type a {
    color: var(--black);
  }

  @media screen and (max-width: 991px) {
    #about li:not(:last-of-type) {
      margin-bottom: 8rem;
    }
    #about li img {
      margin: 0 auto 2rem;
    }
    #about li {
      text-align: center;
    }
  }

  @media screen and (max-width: 767px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 575px) {
    .neg .circle {
      background: -moz-linear-gradient(top, var(--turquoise) 67%, var(--blue) 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top, var(--turquoise) 67%, var(--blue) 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom, var(--turquoise) 67%, var(--blue) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    }
    .logo {
      margin: 0 auto;
    }
    #hero button {
      font-size: 1.25rem;
    }
    #contact a.primary {
      font-size: 1.25rem;
    }
  }
</style>
