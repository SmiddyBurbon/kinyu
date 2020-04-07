import Studio from './components/Studio.vue';
import Login from './components/Login.vue';
import Menu from './components/Menu.vue';
import SignUp from './components/SignUp.vue';
import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      path: '/menu',
      component: Menu,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/studio',
      component: Studio,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('login');
  else if(!requiresAuth && currentUser) next('studio');
  else next();
})

export default router;
