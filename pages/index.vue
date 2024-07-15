<!-- eslint-disable vue/valid-v-on -->

<template>
  <div>
    <img src="../assets/icons8-user-100.png" class="img-fluid mx-auto d-block mb-5" alt="" >

<div v-if="loginFail" class="my-2 text-center" id="errorMessage">
  <p class="text-danger">
  Invalid username or password. Please try again.
  </p>
</div>

<form style="width:fit-content;" class="mx-auto loginform" @submit.prevent="login"  >
 <div class="input-group mb-5">
<span id="basic-addon1" class="input-group-text rounded-left border-white" >
 <img
src="../assets/user.png" alt="" class="img-fluid" style="width: 20px;
height: 20px;">
</span>
<input type="text" v-model="username" class="form-control border-white username rounded-right" placeholder="USERNAME" aria-label="Username" aria-describedby="basic-addon1" >
</div>

<div class="input-group mb-5">
<span id="basic-addon1" class="input-group-text rounded-left border-white" >
 <img
src="../assets/lock.png" alt="" class="img-fluid" style="width: 20px;
height: 20px;">
</span>
<input v-model="password" type="password" class="form-control border-white password rounded-right" placeholder="PASSWORD" id="password" data-test-id="password" aria-label="Username" aria-describedby="basic-addon1" >
</div>


<button type="submit" class="btn btn-light loginbtn mx-auto d-block" id="loginButton">Login</button>


</form>
  </div>

</template>

<script>

export default {
  name: 'IndexPage',
  layout: 'login',

  data(){
    return{
      username: '',
      password: '',
      loginFail: false
    }
  },

  mounted(){
    const LoginCred= {
  name: "Ivan Arabome",
  username:'arabomeivan',
  password: "Atleticomadrid_2."
}

const LoginCredentials = JSON.stringify(LoginCred)
    localStorage.setItem('Logincredentials', LoginCredentials)
  },
  methods:
  {
    login()
    {
      const LoginCred = localStorage.getItem('Logincredentials');

      const LoginCredentials = JSON.parse(LoginCred)

      if(this.username===LoginCredentials.username && this.password===LoginCredentials.password)

      {
        this.$router.push('/charts')
      }

      else{
        this.loginFail = true;
        setTimeout(() => {
          this.loginFail = false;
        }, 2000);
      }



    }
  }
}
</script>

<style scoped>

.username, .password
{

    background-color: transparent !important;
    width: 300px;
    height: 45px;
    font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

color: #FFFFFF;
border-left: none;
}
.username::placeholder, .password::placeholder {
  color: #FFFFFF;

}
.username:focus, .password:focus
{
  box-shadow: none;
}
.loginbtn
{
  width: 300px;
height: 45px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
/* identical to box height, or 125% */

text-align: center;
text-transform: uppercase;

color: #2148C0;
margin-left: 55px;
}
span
{
  border-right: none;
  background-color: transparent;
}

@media screen and (max-width: 600px)
{
  .username, .password
  {
    width: 200px;
  }
  .userimg
  {
    margin-top: 16px;
  }
}

</style>
