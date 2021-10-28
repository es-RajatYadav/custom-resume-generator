<template>
  <div class='main-container'>
    <div class='login-container'>
      <div class='login-text'>
        <h2 class='top-header'>Welcome back!</h2>
        <p>We hope you'll have a joyful session!</p>
      </div>

      <div class='login-form'>
        <form @submit.prevent='executeLogin'>
          <label for='UserEmail'>EMAIL</label>
          <input type="email" id='UserEmail' name='email' v-model='UserCredentials.email' required>

          <label for="UserPassword">PASSWORD</label>
          <input type="password" name="Password" id="UserPassword" v-model='UserCredentials.password' required minlength="8">
          <span class="forgot-pass"><nuxt-link to="/">Forgot your password?</nuxt-link> </span>

          <div class="button-container-3">
            <span class="mas">CONTINUE</span>
            <button type="submit" name="Hover">CONTINUE</button>
          </div>
        </form>
      </div>
      <div class="link-container">
        <span class="new-here">New here? <nuxt-link class="register-link" to="/auth/signup">Register</nuxt-link></span>
      </div>
      <div class="errorM-container" v-if="isError">
        <div class="ErrorM">
          <p><strong>Error</strong> : {{ this.errorMessage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data(){
    return{
      UserCredentials: {
        email : '',
        password : '',
      },
      isError : false,
      errorMessage : ''
    }
  },
  methods: {
    executeLogin(){
      this.$store.dispatch('Authentication/CSTUserLogin', this.UserCredentials)
        .then(() => {
          this.$store.dispatch('UserUsername/getUserUsername', this.$store.getters["Authentication/currentUserUID"])
            .then(() => {
              this.$router.push(`user/${this.$store.getters["UserUsername/loadUserUsername"]}`);
          })
        })
        .catch(e => {
          this.isError = true;
          alert(e.message);
          setTimeout(() => {
            this.isError = false;
          }, 5000)
        })
    }
  }
}
</script>

<style lang='scss' scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main-container{
  width: 90%;
  margin: auto;
}
.login-container{
  width: 450px;
  margin: 80px auto auto;
  border-radius: 10px;
  outline: none;
  border: 2px #4CC3FF solid;
  background: whitesmoke;
  box-shadow: -5px -5px 11px rgba(113, 113, 113, 0.15), 5px 5px 11px rgba(22, 20, 20, 0.15);
}
.login-text{
  width: 100%;
  margin: 20px auto auto;
  text-align: center;
  padding-top: 40px;
  color: #2b3134;
}
.login-text p{
  margin-top: 10px;
  color: rgba(40, 43, 58, 0.62);
}
.login-form{
  align-items: center;
  width: 70%;
  margin: 30px auto auto;
}
input[type=email], input[type=password]{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border-radius: 5px;
  border: 1px solid #0c0c0e;
  background-color: #eaeaea;
  box-sizing: border-box;
  outline: none;
  color: black;
  font-weight: normal;
  font-size: 15px;
}

label{
  color: #6F7278;
  font-weight: bold;
  font-size: 10px;
}
.login-button{
  width: 100%;
  margin: 20px auto 5px;
  padding: 12px 14px;
  border-radius: 10px;
  background: #2b3134;
  color: white;
  font-size: 15px;
  font-weight: bolder;
  box-shadow: 1px 1px 11px #2b3134;
  outline: none;
  border: 2px #4CC3FF solid;
}

.link-container {
  width: 70%;
  margin: auto;
  padding-top: 5px;
  padding-bottom: 50px;
}

.new-here{
  color: rgba(40, 43, 58, 0.68);
}

.register-link{
  text-decoration: none;
  font-weight: bolder;
  color: #4CC3FF;
}
.forgot-pass a{
  text-decoration: none;
  font-weight: bold;
  color: #4CC3FF;
}
.forgot-pass a:hover{
  text-decoration: underline;
}

.errorM-container{
  padding-bottom: 1px;
}
.ErrorM{
  width: 70%;
  text-align: center;
  align-items: center;
  border: 1px red solid;
  border-radius: 5px;
  background: #eaa4a4;
  padding: 10px;
  margin: auto auto 50px;
  color: white;
}

@mixin button($bcolor,
$url,
$x1,
$y1,
$bor,
$col) {
  background: $bcolor;
  -webkit-mask: url($url);
  mask: url($url);
  -webkit-mask-size: $x1 $y1;
  mask-size: $x1 $y1;
  border: $bor;
  color: $col;
}

.mas {
  position: absolute;
  color: #4CC3FF;
  text-align: center;
  width: 101%;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  position: absolute;
  font-size: 12px;
  margin-top: 17px;
  overflow: hidden;
  font-weight: bold;

}

@-webkit-keyframes ani {
  from {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }

  to {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
}

@keyframes ani {
  from {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }

  to {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
}

@-webkit-keyframes ani2 {
  from {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }

  to {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
}

@keyframes ani2 {
  from {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }

  to {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
}

a{
  color:#00ff95;
}

.button-container-3 {
  position: relative;
  width: 100px;
  height: 50px;
  margin: 2vh auto;
  overflow: hidden;
  border: 1px solid #4CC3FF;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  transition: 0.5s;
  letter-spacing: 1px;
  border-radius: 8px;

  button {
    width: 101%;
    height: 100%;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;


    @include button(#4CC3FF, "https://raw.githubusercontent.com/pizza3/asset/master/natureSmaller.png",
      7100%,
      100%,
      none,
      #fff);
    cursor: pointer;
    -webkit-animation: ani2 0.7s steps(70) forwards;
    animation: ani2 0.7s steps(70) forwards;

    &:hover {
      -webkit-animation: ani 0.7s steps(70) forwards;
      animation: ani 0.7s steps(70) forwards;
    }
  }
}

</style>
