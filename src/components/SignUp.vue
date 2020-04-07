<template>
  <div class="signup">
    <form>
      <input type="text" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button @click="signUp">Create Account</button>
      <p>Already have an account?<router-link to="/login">Log in</router-link></p>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signup',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
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
.signup {
  width: 85.4%;
  margin: 8rem auto 0;
}
p, input, button {
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
p {
  text-align: center;
  margin-top: 2rem;
}
p a {
  display: block;
  color: var(--black);
  text-decoration: none;
  font-weight: 700;
}
p a:visited {
  color: var(--black);
  text-decoration: none;
}
</style>
