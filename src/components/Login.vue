<template>
  <div class="login">
    <h3>Sign In</h3>
    <form>
      <input type="text" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button @click="login">Sign In</button>
    </form>
    <router-link to="/signup">Create Account</router-link>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        user => {
          this.$router.push('menu')
        },
        function(err) {
          alert('Oops. ' + err.message)
        }
      )
    }
  }
}
</script>

<style scoped>
.login {
  width: 85.4%;
  margin: 8rem auto 0;
}
h3, input, button {
  display: block;
  margin: 0 auto;
  width: 61.8%;
}
input {
  padding: 1rem;
  border-radius: 4px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 1px solid var(--grey);
  outline: none;
  box-sizing: border-box;
  margin-bottom: 2rem;
}
h3 {
  margin-bottom: 2rem;
}
button {
  -webkit-appearance: none;
  appearance: none;
  background-color: var(--black);
  color: var(--white);
  border: none;
  box-shadow: none;
  margin: 0 auto;
  padding: 1rem 4rem;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04rem;
  width: auto;
}
</style>
