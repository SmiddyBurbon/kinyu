<template>
  <footer>
    <div class="container">
      <p>Made with &#128420;<br />by <a href="http://www.dennisschmidt.net" target="_blank">Dennis Schmidt</a><br />in Hamburg, Germany</p>
    </div>
  </footer>
</template>

<script>
</script>

<style scoped>
  footer {
    width: 100vw;
    background: var(--white);
    padding: 5rem 0;
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
</style>
