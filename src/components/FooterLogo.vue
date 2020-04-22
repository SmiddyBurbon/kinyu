<template>
  <img src="../assets/img/icons/ic_logo.svg" v-if="isStudio()" id="footer_logo" alt="kinyu" />
</template>

<script>
export default {
  name: 'FooterLogo',
  methods: {
    isStudio() {
      if (this.$route.path.includes("studio")) {
        return true
      }
      else {
        return false
      }
    },
  }
}
</script>

<style>
#footer_logo {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
}
</style>
