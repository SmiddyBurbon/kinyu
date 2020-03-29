<template>
  <header>
    <div class="back" @click="this.goBack"><img src="../assets/img/ic_back.svg" /><span>Back</span></div>
    <img src="../assets/img/ic_logo.svg" class="logo" alt="kinyu" />
    <img src="../assets/img/logo_eformel.png" class="avatar" />
  </header>
</template>

<script>
  export default {
    name: 'Header',
    methods: {
      goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
    }
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
    padding: 0 1rem;
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
    margin-right: 1rem;
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
