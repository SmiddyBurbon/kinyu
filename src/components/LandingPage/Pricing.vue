<template>
  <section id="pricing" class="neg">
    <div class="circle"></div>
    <div class="container">
      <h3>Choose your plan</h3>
      <ul class="grid three">
        <li>
          <h4>Free</h4>
          <h5>Free forever</h5>
          <ul>
            <li>Best for new and upcoming projects</li>
            <li>3 available graphic types</li>
            <li>Customizable styles</li>
          </ul>
          <button class="soon">Coming soon</button>
        </li>
        <li>
          <h4>Basic</h4>
          <h5>5€ / month</h5>
          <ul>
            <li>Best for established and growing projects</li>
            <li>All Free features</li>
            <li>Additional graphic types</li>
            <li>No watermarks</li>
          </ul>
          <button class="soon">Coming soon</button>
        </li>
        <li>
          <h4>Pro</h4>
          <h5>Individual pricing</h5>
          <ul>
            <li>Best for professionals and enterprises</li>
            <li>Tailored graphic types &amp; styles</li>
            <li>As many graphics as you need</li>
            <li>Automated workflow</li>
            <li>API integration</li>
          </ul>
          <a class="primary" href="mailto:hi@dennisschmidt.net">Get your offer</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
</script>

<style scoped>
  #pricing {
    padding: 5rem 0 12rem;
  }
  #pricing .grid {
    width: 61.8%;
    margin: 0 auto;
  }
  #pricing h3 {
    color: var(--white);
  }
  #pricing h4 {
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 0.04rem;
    margin-left: 0;
    padding: 0.5rem 1rem;
    color: var(--turquoise);
    background-color: rgba(20,208,190,.12);
    display: inline;
    border-radius: 800px;
    align-self: flex-start;
  }
  #pricing h5 {
    font-size: 1.5rem;
    margin: 0 0 2rem 1rem;
  }
  #pricing ul {
    list-style-type: none;
    font-size: 1rem;
    flex-direction: row;
  }
  #pricing ul li {
    background-color: var(--white);
    box-shadow: 0px 4px 16px 0px rgba(44,62,80,0.08);
    /*border: 2px solid var(--turquoise);*/
    border-radius: 16px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }
  #pricing ul ul {
    margin-bottom: 4rem;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: auto;
  }
  #pricing ul ul li {
    padding: 1rem;
    border: none;
    box-shadow: none;
    border-radius: 4px;
  }
  #pricing ul ul li:first-of-type {
    font-weight: 700;
  }
  #pricing ul ul li:nth-of-type(even) {
    background-color: var(--bg-grey);
  }
  #pricing .primary {
    background-color: var(--turquoise);
    padding: 0.75rem 1.25rem;
    color: var(--white);
    font-size: 1rem;
    align-self: center;
  }
  #pricing button {
    background-color: var(--black);
    color: var(--white);
    padding: 0.75rem 1.25rem;
    font-family: inherit;
    box-shadow: none;
    outline: none;
    border: none;
    align-self: center;
  }
  #pricing button:hover {
    filter: brightness(150%);
  }

  @media screen and (max-width: 1679px) {
    #pricing {
      padding-bottom: 8rem;
    }
    #pricing .grid {
      width: 85.4%;
    }
    #pricing ul li {
      margin-bottom: 2rem;
    }
    #pricing ul ul li {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 599px) {
    #pricing {
      padding-bottom: 5rem;
    }
    #pricing .grid {
      width: 100%;
    }
    #pricing ul li {
      margin-bottom: 2rem;
    }
    #pricing ul ul li {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 440px) {
    #pricing h3 {
      color: var(--black);
    }
  }
</style>
