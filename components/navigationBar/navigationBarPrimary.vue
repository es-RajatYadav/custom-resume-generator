<template>
  <div class="navbar">
    <div class="logo">
      <img @click="home" class="logo" :src="require('assets/CompSoft Logo/CompsoftLogo.png')" alt="logo"/>
    </div>
    <div class='brand-name'>
      <p>CompSoft <br> Technologies</p>
    </div>
    <div class="container">
      <ul class="nav-items">
        <button class="nav-item"><nuxt-link to="/">Features</nuxt-link></button>
        <button class="nav-item"><nuxt-link to="/">About</nuxt-link></button>
      </ul>
    </div>
    <div class="btn-container">
      <button class="auth-btn" id="signup-btn" @click="$router.push('/signup')"></button>
      <button class="auth-btn" id="login-btn" @click="$router.push('/login')"></button>
    </div>
    <div class="spacer">
    </div>
    <div class="SideNavContainer">
      <!--        <unsync-side-navbar-toggle @toggle="$emit('SideNavToggle')"/>-->
    </div>

  </div>
</template>

<script>
export default {
  name: 'navigation-bar',
  methods : {
    home(){
      location.href = '/';
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.navbar{
  width: 90%;
  display: flex;
  margin: auto auto 40px;
}

.logo{
  float: left;
  width: 50px;
  height: auto;
  cursor: pointer;
  margin-top: 7px;
}

.brand-name{
  height: auto;
  margin-top: 20px;
  color: rgb(43, 49, 52);
  font-weight: normal;
  margin-left: 5px;
}
.container{
  width: 60%;
  margin: auto;
}

.nav-items{
  padding: 0;
  list-style: none;
  text-align: center;
  margin-left: 120px;
}

.nav-item{
  display: inline;
  border: none;
  outline: none;
  background: whitesmoke;
  padding-top: 15px;
}

.navbar a{
  color: #2b3134;
  text-decoration: none;
  font-size: 20px;
  padding-right: 30px;
}

.btn-container{
  float: right;
  width: 250px;
  margin: 10px;
  align-items: center;
  text-align: center;
  padding-top: 5px;
}

.SideNavContainer{
  float: right;
  width: 40px;
  height: 30px;
  padding: 3px;
  margin: 28px 30px 15px 220px;
}
.spacer{
  float: right;
  width: 400px;
}
.auth-btn {
  color: #7fffd4;
  display: inline;
  font-family: Roboto Condensed, "Helvetica Neue", sans-serif;
  font-size: 15px;
  font-weight: normal;
  padding : 10px 15px;
  border-radius: 30px;
  margin-top: 5px;
  margin-right: 10px;
  border: none;
  outline: none;
  background: whitesmoke;
}
.auth-btn:active{
  box-shadow: inset -5px -5px 10px rgba(113, 113, 113, 0.15), inset 5px 5px 10px rgba(22, 20, 20, 0.15);
}


#login-btn:hover:after ,#signup-btn:hover:after {
  color: #4CC3FF;
}

#login-btn:after{
  font-family: FontAwesome;
  content: '\f090';
  font-size: 30px;
  color: #282b3a;
}

#signup-btn:after{
  font-family: FontAwesome;
  content: '\f234';
  font-size: 30px;
  color: #2a2c3a;
}
@media (max-width: 900px) {
  .container{
    display: none;
  }
  .btn-container{
    display: none;
  }
}
@media (min-width: 900px) {
  .SideNavContainer{
    display: none;
  }
  .spacer{
    display: none;
  }
}
</style>
