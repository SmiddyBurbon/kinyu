<template>
  <main>
    <header>
      <column :fluid="true" tagName="nav" :lg="10" :lgShift="1">
        <row>
          <column :fluid="true" :lg="2" class="logo" src="../assets/img/feeder_logo.svg" alt="kinyu">
            <img src="../assets/img/feeder_logo.svg" alt="kinyu" />
          </column>
          <column :fluid="true" :lg="10">
            <button type="button" class="primary">Get in touch</button>
          </column>
        </row>
      </column>
    </header>

    <section class="hero pos">
      <div class="circle"></div>
      <column :fluid="true" :lg="6">
        <h1>Create images <br />in the browser</h1>
      </column>
      <column :fluid="true" :lg="12">
        <h2>Feeder lets you fill images with data and download them as PNG.<br />Without a designer, design tool or design knowledge.<br />From any device.</h2>
      </column>

      <!--<router-link to="/studio?type=demo_table">
        <button type="button" class="primary">Give it a try</button>
      </router-link>-->
    </section>

    <section class="about neg">
      <div class="circle"></div>
      <column :fluid="true" :lg="8" :lgShift="2">
        <!--<h3>How it works</h3>-->
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
    display: block;
  }
  header button {
    background-color: var(--turquoise);
    padding: 0.75rem 1.25rem;
  }
  header nav > div {
    align-items: center;
  }
  header nav > div > div:last-of-type {
    text-align: right !important;
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
    font-size: 2rem;
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
    background: -moz-radial-gradient(center, ellipse cover, var(--turquoise) 25%, var(--blue) 100%); /* FF3.6-15 */
    background: -webkit-radial-gradient(center, ellipse cover, var(--turquoise) 25%, var(--blue) 100%); /* Chrome10-25,Safari5.1-6 */
    background: radial-gradient(ellipse at center, var(--turquoise) 25%, var(--blue) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  }
  .hero {
    z-index: 9;
  }
  .about {
    z-index: 8;
  }

  .hero {
    padding: 5rem 0 7rem;
    margin-top: 4rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .hero button {
    position: absolute;
    bottom: -2.25rem;
    padding: 1.5rem 2.5rem;
    font: inherit;
    font-size: 1.5rem;
    font-weight: 700;
    background-color: var(--turquoise);
  }

  .about {
    padding: 5rem 0 8rem;
    color: var(--white);
  }

  footer {
    width: 100vw;
    background: var(--white);
    padding: 1.5rem 0;
    display: flex;
    align-items: center;
    flex: 1;
  }
  footer p:last-of-type {
    text-align: center;
    line-height: 1.333;
  }
  footer p:last-of-type a {
    color: var(--black);
  }
</style>
