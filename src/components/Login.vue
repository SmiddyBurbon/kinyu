<template>
  <div class="login">
    <form >
      <input type="text" v-model="email" placeholder="Email" autocomplete="email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="button" @click="login">Log In</button>
    </form>
    <p>Don't have an account yet?<router-link to="/signup">Create Account</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase'
import { db } from '../main'

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
          var router = this.$router
          this.$root.$emit('loggedIn')

          var docRef = db.collection("users").doc(user.user.uid);

          docRef.get().then(function(doc) {
            if(doc.data().team != '') {
              // router.push('menu')
              router.push(doc.data().team)
            }
            else {
              router.push('menu')
            }
          }).catch(function(error) {
              console.log("Error getting document:", error);
          });
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
input, button, p {
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
  font-size: 1rem;
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
