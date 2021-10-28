<template>
  <footer class="legals-container">
    <div class="all-container">
      <div class="company-name-footer">
        <p><i class="fa fa-copyright" aria-hidden="true"></i> {{CurrentYear}} CompSoft Technologies</p>
      </div>
      <div class="links-container">
        <ul class="nav-items">
          <li class="nav-item"><nuxt-link to="/">Terms</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/">Privacy</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/">Cookie policy</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/">Help</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/">Features</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/">About</nuxt-link></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "crgFooter",
  data(){
    return{
      CurrentYear : ''
    }
  },
  created() {
    const TimeNow = new Date();
    this.CurrentYear = `${TimeNow.getUTCFullYear()}`;
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
footer{
  margin-top: 70px;
  width: 100%;
  margin-bottom: 50px;
  text-align: center;
  padding: 3px;
  color: #2a2c3a;
  align-items: center;
}
.legals-container{
  display: flex;
}
.all-container{
  display: flex;
  margin: auto;
}
.links-container{
  width: auto;
}
.nav-items{
  padding: 0;
  list-style: none;
  text-align: center;
  margin-left: 20px;
}
.nav-item{
  display: inline;
}
.links-container a{
  color: rgba(31, 35, 36, 0.36);
  text-decoration: none;
  font-size: 15px;
  padding-right: 30px;
}
</style>
