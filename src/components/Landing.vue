<template>
  <main>
    <Header></Header>
    <Hero></Hero>
    <Demo></Demo>
    <Examples></Examples>
    <Testimonials></Testimonials>
    <About></About>
    <Pricing></Pricing>
    <Footer></Footer>
  </main>
</template>

<script>
  import Header from './LandingPage/Header.vue'
  import Hero from './LandingPage/Hero.vue'
  import Demo from './LandingPage/Demo.vue'
  import Examples from './LandingPage/Examples.vue'
  import Testimonials from './LandingPage/Testimonials.vue'
  import About from './LandingPage/About.vue'
  import Pricing from './LandingPage/Pricing.vue'
  import Footer from './LandingPage/Footer.vue'

  export default {
    name: 'Landing',
    components: {
      Header, Hero, Demo, Examples, Testimonials, About, Pricing, Footer
    },
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

<style>
  * {
    box-sizing: border-box;
  }

  .container {
    max-width: 80vw;
    margin: 0 auto;
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  .grid {
    display: grid;
    grid-column-gap: 2rem;
  }
  .grid.three {
    grid-template-columns: 1fr 1fr 1fr;
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
    filter: brightness(110%);
    color: var(--white);
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
    z-index: -1;
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
  #examples {
    z-index: 7;
  }
  #testimonials {
    z-index: 6;
  }
  #about {
    z-index: 5;
  }
  #pricing {
    z-index: 4;
  }
  #contact {
    z-index: 3;
  }

  @media screen and (max-width: 1023px) {
    .grid.three {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 991px) {
    .neg .circle {
      background: -moz-linear-gradient(top, var(--turquoise) 75%, var(--blue) 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top, var(--turquoise) 75%, var(--blue) 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom, var(--turquoise) 75%, var(--blue) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    }
  }

  @media screen and (max-width: 767px) {
    h1 {
      font-size: 2.5rem;
    }
    .neg .circle {
      background: -moz-linear-gradient(top, var(--turquoise) 80%, var(--blue) 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top, var(--turquoise) 80%, var(--blue) 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom, var(--turquoise) 80%, var(--blue) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    }
  }

  @media screen and (max-width: 575px) {
    #hero button {
      font-size: 1.25rem;
    }
  }
</style>
