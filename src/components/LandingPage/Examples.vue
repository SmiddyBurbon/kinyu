<template>
  <section id="examples" class="pos">
    <div class="circle"></div>
    <div class="container">
      <h3>How You Could Use Feeder</h3>

      <ul class="grid three">
        <li>
          <img src="../../assets/img/examples/example_fe.png" alt="Results" />
          <h4>Results</h4>
        </li>
        <li>
          <img src="../../assets/img/examples/example_score.png" alt="Score" />
          <h4>Match Scores</h4>
        </li>
        <li>
          <img src="../../assets/img/examples/example_news.png" alt="News" />
          <h4>News Content</h4>
        </li>
      </ul>
    </div>

    <router-link to="/demo" tag="button" type="button" class="primary">
      Try the demo
    </router-link>
  </section>
</template>

<script>
</script>

<style scoped>
  #examples {
    padding: 5rem 0 0;
    text-align: center;
  }
  #examples ul {
    list-style-type: none;
  }
  #examples ul li img {
    width: 100%;
    height: auto;
    border-radius: 16px;
    margin-bottom: 1rem;
  }
  #examples button {
    font: inherit;
    font-size: 1.5rem;
    font-weight: 700;
    background-color: var(--blue);
    padding: 1.5rem 2.5rem;
    margin-top: 3rem;
    margin-bottom: -2.25rem;
  }

  @media screen and (min-width: 992px) {
    #examples li {
      margin-left: 0 !important;
    }
  }

  @media screen and (max-width: 991px) {
    #examples li:not(:last-of-type) {
      margin-bottom: 4rem;
    }
    #examples li img {
      margin: 0 auto 2rem;
    }
    #examples li {
      text-align: center;
    }
  }
</style>
