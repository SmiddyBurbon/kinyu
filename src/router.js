import Studio from './components/Studio.vue';
import Login from './components/Login.vue';
import Menu from './components/Menu.vue';
import eformel from './components/eformel.vue';
import SignUp from './components/SignUp.vue';
import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/eformel',
      name: 'eformel',
      component: eformel,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/studio',
      name: 'studio',
      component: Studio,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('Login');
  else if(!requiresAuth && currentUser) next('Menu');
  else next();
})

export default router;
