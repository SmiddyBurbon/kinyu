import Studio from './components/Studio.vue';
import Login from './components/Login.vue';
import Menu from './components/Menu.vue';
import EFormel from './components/eformel/eformel.vue';
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
      component: Menu
    },
    {
      path: '/eformel',
      name: 'eformel',
      component: EFormel,
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
      redirect: '/menu'
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('login');
  else if(!requiresAuth && currentUser) next('EFormel');
  else next();
})

export default router;
