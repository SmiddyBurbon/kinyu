import Studio from './components/Studio.vue';
import Login from './components/Login.vue';
import Menu from './components/Menu.vue';
import eformel from './components/eformel/eformel.vue';
import Demo from './components/demo/demo.vue';
import SignUp from './components/SignUp.vue';
import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

const router = new Router({
  mode: 'history',
  hash: false,
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
      component: eformel/*,
      meta: {
        requiresAuth: true
      }*/
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    {
      path: '/studio',
      name: 'studio',
      component: Studio,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '*',
      redirect: '/demo',
      component: Demo
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  next();

  if(requiresAuth && !currentUser) next('/login');
  // else if(!requiresAuth && currentUser) next('EFormel');
  else next();
})

export default router;
