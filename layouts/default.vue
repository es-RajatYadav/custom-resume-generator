<template>
  <div>
    <navigation-bar/>
    <Nuxt />
    <crgFooter/>
  </div>
</template>

<script>
import NavigationBar from '../components/navigationBar/navigationBarPrimary'
import crgFooter from '../components/crgFooter/crgFooter'
export default {
  components: {
    NavigationBar,
    crgFooter
  }
}
</script>

<style>
html, body{
  font-family: Roboto Condensed, "Helvetica Neue", sans-serif;
  background-color: whitesmoke;
}
</style>
