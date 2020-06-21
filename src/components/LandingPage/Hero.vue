<template>
  <section id="hero" class="pos">
    <div class="container">
      <div class="circle"></div>
      <div class="text">
        <h1>Produce<br />visual content<br />without a designer</h1>
        <h2>Transform your raw data into professionally designed visual content.<br />Feeder generates infographics in your custom style.<br />From any device.</h2>
      </div>

      <router-link to="/demo" tag="button" type="button" class="primary">
        Try the demo
      </router-link>
    </div>
  </section>
</template>

<script>
</script>

<style scoped>
  #hero {
    padding: 5rem 0 3rem;
    margin-top: 4rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #hero button {
    position: relative;
    bottom: -5rem;
    padding: 1.5rem 2.5rem;
    font: inherit;
    font-size: 1.5rem;
    font-weight: 700;
    background-color: var(--blue);
    margin: 0 auto;
  }
  #hero button:hover {
    filter: brightness(120%);
  }

  @media screen and (max-width: 575px) {
    #hero button {
      font-size: 1.25rem;
    }
  }
</style>
