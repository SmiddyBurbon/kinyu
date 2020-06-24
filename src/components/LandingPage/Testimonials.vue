<template>
  <section id="testimonials" class="neg">
    <div class="circle"></div>
    <!--<row>
      <column :xs="10" :xsShift="1" :sm="10" :smShift="1" :md="10" :mdShift="1" :lg="10" :lgShift="1" :xl="8" :xlShift="2">
        <h3>What Users Say</h3>
      </column>
    </row>-->
    <div class="container">
    <blockquote>
      <p>
        Feeder helped us to <strong>streamline our workflow</strong> and made us completely <strong>independent</strong> from a designer &ndash; even if results still change hours after a race. <br/>
        Everyone in the team can use the tool and it's very fast which is crucial in online journalism. Sharp looks and a <strong>great platform for sponsoring</strong>, too.
      </p>
      <span>&ndash; Timo Pape, Founder &amp; CEO of <a href="https://e-formel.de" target="_blank">e-Formel.de</a></span>
    </blockquote>
    </div>
  </section>
</template>

<script>
</script>

<style scoped>
  #testimonials {
    padding: 4rem 0;
  }
  blockquote {
    /*background-color: var(--bg-grey);*/
    padding: 2rem;
    border-radius: 24px;
    width: 61.8%;
    margin: 0 auto;
  }
  blockquote p {
    font-style: italic;
    color: var(--white);
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  blockquote span {
    color: var(--white);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.024rem;
    font-size: 1rem;
  }
  blockquote span a, blockquote span a:visited {
    color: var(--white);
    text-decoration: none;
  }
  blockquote span a:hover, blockquote span a:focus {
    color: var(--black);
    text-decoration: none;
  }

  @media screen and (max-width: 1023px) {
    blockquote {
      width: 85.4%;
    }
  }

  @media screen and (max-width: 599px) {
    blockquote {
      width: 100%;
    }
  }
</style>
