<template>
  <header>
    <div class="container row">
      <div class="logo">
        <a href="#"><img src="../../assets/img/feeder_logo.svg" alt="feeder" /></a>
      </div>
      <ul class="menu">
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a class="primary" href="mailto:hi@dennisschmidt.net">Get in touch</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
</script>

<style scoped>
  header {
    width: 100%;
    max-width: 100vw;
    background: var(--white);
    position: fixed;
    top: 0;
    left: 0;
    padding: 0.75rem 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    flex: 1;
  }
  header .row {
    align-items: center;
  }
  header .menu {
    flex-direction: row;
    align-items: center;
  }
  header ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    text-align: right;
  }
  header ul div {
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
  header .menu a:hover,
  header .menu a:focus {
    color: var(--turquoise);
  }
  header a.primary {
    color: var(--white);
    background-color: var(--turquoise);
    padding: 0.75rem 1.25rem;
    margin-right: 0;
  }
  header a.primary:hover,
  header a.primary:focus {
    color: var(--white);
  }
  .logo img {
    width: 120%;
    height: auto;
  }
</style>
