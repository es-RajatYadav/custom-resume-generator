<template>
  <div>
    <authenticatedNavigationBar/>
    <nuxt/>
    <crg-footer/>
  </div>
</template>

<script>
import authenticatedNavigationBar from '../components/navigationBar/authenticatedNavigationBar';
import crgFooter from '../components/crgFooter/crgFooter'
export default {
  name: 'authenticatedLayout',
  components:{
    authenticatedNavigationBar,
    crgFooter
  }
}
</script>

<style scoped>

</style>
