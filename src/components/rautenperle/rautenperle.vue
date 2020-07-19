<template>
  <div>
    <Header :isLoggedIn="isLoggedIn"></Header>
    <div class="menu">
      <ul>
        <li>
          <router-link to="studio?type=rautenperle_news">
            <div class="thumb">
              <img src="img/rautenperle/preview/news.png" />
            </div>
            <span>News</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '../Header.vue'

export default {
  name: 'Menu',
  components: {
    Header
  },
  data() {
    return {};
  },
  methods: {

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Teko:wght@400;700&display=swap');

:root {
  --rautenperle-white: #FFF;
  --rautenperle-blue: #2E3193;
  --rautenperle-darkblue: #080A31;
  --rautenperle-black: #010101;
  --rautenperle-font: 'Teko', sans-serif;
}
</style>
