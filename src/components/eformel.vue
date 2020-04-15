<template>
  <div>
    <Header></Header>
    <ul class="menu">
      <li>
        <router-link to="/studio?type=rating">
          <img src="img/preview/rating.png" />
          <span>Rating</span>
        </router-link>
      </li>
      <li>
        <router-link to="/studio?type=news">
          <img src="img/preview/news.png" />
          <span>News</span>
        </router-link>
      </li>
    </ul>
    <FooterLogo></FooterLogo>
  </div>
</template>

<script>
import FooterLogo from './FooterLogo.vue'

export default {
  name: 'Menu',
  components: {
    FooterLogo
  },
  data() {
    return {};
  },
  methods: {

  }
}
</script>

<style scoped>
.menu {
  display: grid;
  width: 85.4%;
  margin: 4rem auto 0;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 2rem;
  grid-auto-rows: minmax(min-content, max-content);
  padding-top: 4rem;
}
.menu li {
  background: var(--white);
  -webkit-box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.08);
  -moz-box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.08);
  box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.08);
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  transition: 0.2s;
  border-radius: 16px;
  display: inline;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.menu li:hover {
  -webkit-box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.08);
  -moz-box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.08);
  box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.08);
  transform: scale(1.04);
  -webkit-transform: scale(1.04);
  -moz-transform: scale(1.04);
  cursor: pointer;
}
.menu li a img {
  width: 100%;
}
.menu li a span {
  padding: 1.5rem 2rem;
  display: block;
}
.menu li a,
.menu li a:visited {
  text-decoration: none;
  color: var(--black);
  font-weight: 700;
}
</style>
