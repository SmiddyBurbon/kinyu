<template>
  <header>
    <div class="back" v-if="isHome()" @click="this.goBack"><img src="../assets/img/ic_back.svg" /><span>Back</span></div>
    <img src="../assets/img/ic_logo.svg" class="logo" alt="kinyu" />
    <div class="profile">
      <img src="../assets/img/logo_eformel.png" class="avatar" />
      <button class="logout" @click="logout">Log out</button>
    </div>
  </header>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'Header',
    methods: {
      isHome() {
        if (this.$route.path === "/") {
          return false
        }
        else {
          return true
        }
      },
      goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      },
      logout() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login')
        })
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
    padding: 0 2rem 0 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1;
    box-sizing: border-box;
  }
  .back {
    text-align: left;
    display: flex;
    align-items: center;
    opacity: 0.64;
    margin-right: auto;
  }
  .back:hover {
    opacity: 1;
    cursor: pointer;
  }
  .back img {
    margin-right: 1rem;
  }
  .logo {
    text-align: center;
    margin: 0 auto;
  }
  .avatar {
    text-align: right;
    width: 2rem;
    height: 2rem;
  }
  .profile {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  .logout {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    outline: none;
    font-size: 1rem;
    font-family: inherit;
    margin-left: 2rem;
  }
</style>
