<template>
  <div class='main-container'>
    <div class='signup-container'>
      <div class='signup-text'>
        <h2 class="top-header" id="Hi">Hi!</h2>
        <h2 class="top-header">
          Create an account
        </h2>
        <p>We're so excited to have you!</p>
      </div>

      <div class='signup-form'>
        <form @submit.prevent='executeSignup'>

          <label for="UserName">USERNAME</label>
          <input type="text" id="UserName" name="username" v-model='username' required>

          <label for="UserEmail">EMAIL</label>
          <input type="email" id="UserEmail" name="email" v-model='UserCredentials.email' required>

          <label for="UserPassword">PASSWORD</label>
          <input type="password" id="UserPassword" name="password" v-model='UserCredentials.password' required>

          <label for="ConfirmPassword">CONFIRM PASSWORD</label>
          <input type="password" id="ConfirmPassword" name="confirmpassword" v-model='confirmPassword' required>

          <label for="DateOfBirth">DATE OF BIRTH</label>
          <input type="date" id="DateOfBirth" name="dateofbirth"  placeholder="DD/MM/YYYY" v-model='dateOfBirth' required>

          <p class="terms-and-condition">By clicking Continue, you agree to our <nuxt-link to="/legal/terms">Terms</nuxt-link>,<nuxt-link to="/legal/privacy"> Data Policy</nuxt-link> and <nuxt-link to="/legal/policies">Cookie Policy</nuxt-link>. </p>

          <div class="button-container-3">
            <span class="mas">CONTINUE</span>
            <button type="submit" name="Hover" >CONTINUE</button>
          </div>

        </form>
      </div>

      <div class="link-container">
        <span class="already-member">Already a member?<nuxt-link class="login-link" to="/auth/login">Login</nuxt-link></span>
      </div>

      <div class="errorM-container" v-if="isError">
        <div class="errM">
          <p><strong>Error</strong> : {{ this.errorMessage }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { Database } from '../../plugins/firebase';
import { getDoc, doc, setDoc } from 'firebase/firestore';

export default {
  name: 'index',
  data(){
    return{
      UserCredentials: {
        email: '',
        password: '',
      },
      username: '',
      confirmPassword : '',
      isError: false,
      errorMessage: '',
      dateOfBirth: ''
    }
  },
  methods: {
    ageCal(dob) {
      const today = new Date();
      const birthday = new Date(dob);
      return today.getUTCFullYear() - birthday.getUTCFullYear();
    },
    async executeSignup() {
      const DOB = this.dateOfBirth.split('-').join(',');
      const age = this.ageCal(DOB);

      if (age <= 13){
        this.isError = true;
        this.errorMessage = 'Age must be over 13 years.';
        setTimeout(() => {
          this.isError = false;
        }, 5000);
      }

      else if(this.UserCredentials.password !== this.confirmPassword){
        this.isError = true;
        this.errorMessage = `Confirm password doesn't match.`;
        setTimeout(() => {
          this.isError = false;
        }, 5000);
      }
      else
      {
        const unsyncDataSnap = await getDoc(doc(Database, "CRTUsers", this.username));
        if(unsyncDataSnap.exists()) {
          this.isError = true;
          this.errorMessage = 'Username already exists. :(';
          setTimeout(() => {
            this.isError = false;
          }, 5000);
        }
        else {
          this.$store.dispatch('Authentication/CSTUserSignUp', this.UserCredentials)
            .then(() => {
              this.executeCreateAccount();
            }).catch(e => {
            this.isError = true;
            this.errorMessage = e.message;
            console.log(e.message);
            setTimeout(() => {
              this.isError = false;
            }, 5000);
          });
        }
      }
    },
    async executeCreateAccount(){
      await setDoc(doc(Database, "CSTUsers", this.username), {
        UserUID: `${this.$store.getters["Authentication/currentUserUID"]}`,
        Username : `${this.username}`,
        UserProfilePictureURL: '',
        UserFirstName: '',
        UserLastName: '',
        UserCreatedOn: new Date().getTime(),
        Unsync_UserLocation: '',
        Unsync_UserCountry: '',
      }).then(() => {
        this.createUsername();
      })
        .catch(e => {
          throw e;
        })
    },
    async createUsername(){
      await setDoc(doc(Database, "CSTUsersUID", this.$store.getters["Authentication/currentUserUID"]), {
        Username : this.username,
        UserProfilePictureURL: ''
      })
        .then(() => {
          //
          console.log("Done");
        })
        .catch(e => {
          throw e;
        });
    }
  }
}
</script>

<style lang='scss' scoped>
*{
  margin: 0;
  padding: 0;
}
.signup-container{
  width: 500px;
  margin: 50px auto auto;
  border-radius: 10px;
  border: 2px #4CC3FF solid;
  outline: none;
  background: whitesmoke;
  box-shadow: -5px -5px 11px rgba(113, 113, 113, 0.15), 5px 5px 11px rgba(22, 20, 20, 0.15);
}
.signup-text{
  color: #282b3a;
  margin: 10px auto auto;
  width: 100%;
  padding-top: 10px;
}
.top-header{
  align-items: center;
  text-align: center;
  margin-top: 30px;
}

#Hi{
  font-size: 50px;
  background-image: linear-gradient(to right, #00f260, #0575e6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.signup-text p{
  text-align: center;
  color: rgba(40, 43, 58, 0.73);
  margin-top: 10px;
}
.signup-form{
  width: 70%;
  align-items: center;
  margin: 30px auto auto;
}
input[type=email], input[type=password], input[type=date], input[type=text]{
  width: 100%;
  padding: 12px 20px;
  display: inline-block;
  border-radius: 5px;
  border: 1px solid #0c0c0e;
  margin: 8px 0;
  background-color: #eaeaea;
  outline: none;
  color: black;
  font-weight: normal;
  box-sizing: border-box;
  font-size: 15px;
}

label{
  color: #6F7278;
  font-weight: bold;
  font-size: 10px;
}
.signup-button{
  width: 100%;
  margin: 20px auto 5px;
  padding: 12px 14px;
  border-radius: 5px;
  background: #2b3134;
  color: white;
  font-weight: normal;
  outline: none;
  border: 2px #4CC3FF solid;
  box-shadow: 1px 1px 11px #2b3134;
}
.signup-button:hover{
  background: rgba(76, 195, 255, 0.44);
}
.signup-button:active{
  background: rgba(76, 195, 255, 0.19);
}

.link-container{
  width: 70%;
  margin: auto;
  padding-top: 5px;
  padding-bottom: 50px;
}

.already-member{
  color: #6F7278;
}
.login-link{
  text-decoration: none;
  font-weight: bold;
  color: #4CC3FF;
}
.login-link:hover{
  text-decoration: underline;
}
.errorM-container{
  padding-bottom: 20px;
}
.errM{
  width: 70%;
  text-align: center;
  align-items: center;
  border: 1px red solid;
  border-radius: 5px;
  background: #ab7373;
  padding: 5px;
  margin: auto auto 50px;
  color: white;
}
.terms-and-condition{
  width: 80%;
  margin: 10px auto auto;
  text-align: center;
  align-items: center;
  color: #B9BBBF;
}
.terms-and-condition a{
  font-weight: bold;
  text-decoration: none;
  color: #4CC3FF;
}
.terms-and-condition a:hover{
  text-decoration: underline;
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
