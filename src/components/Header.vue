<template>
  <header>
    <div class="back"><img src="../assets/img/ic_back.svg" /><span>Overview</span></div>
    <img src="../assets/img/ic_logo.svg" class="logo" alt="kinyu" />
    <img src="../assets/img/logo_eformel.png" class="avatar" />
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>
  header {
    width: 100%;
    box-shadow: 0 4px 16px rgba(0,0,0,.12);
    background: var(--white);
    position: fixed;
    top: 0;
    left: 0;
    height: 4rem;
    z-index: 99;
    padding: 0 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }
  .back {
    text-align: left;
    display: flex;
    align-items: center;
  }
  .back img {
    margin-right: 0.5rem;
  }
  .logo {
    text-align: center;
  }
  .avatar {
    text-align: right;
    width: 2rem;
    height: 2rem;
  }
</style>
