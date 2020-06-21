<template>
  <section id="contact" class="neg">
    <div class="circle"></div>
    <column :xs="10" :xsShift="1" :sm="10" :smShift="1" :md="8" :mdShift="2" :lg="6" :lgShift="3" :xl="4" :xlShift="4">
      <h3>Like what you see?</h3>
      <p>
        Whether you want to request your own template, have a question about the service or just want to have a chat – we're happy to hear from you.
      </p>
      <a class="primary" href="mailto:hi@dennisschmidt.net">Get in touch</a>
    </column>
  </section>
</template>

<script>
</script>

<style scoped>
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

  @media screen and (max-width: 575px) {
    #contact a.primary {
      font-size: 1.25rem;
    }
  }
</style>
