<!-- eslint-disable vue/valid-v-on -->

<template>
  <div>
    <img src="../assets/icons8-user-100.png" class="img-fluid mx-auto d-block mb-5" alt="" >


<form style="width:fit-content;" class="mx-auto loginform" @submit.prevent="login"  >
 <div class="input-group mb-5">
<span id="basic-addon1" class="input-group-text rounded-left border-white" >
 <img
src="../assets/user.png" alt="" class="img-fluid" style="width: 20px;
height: 20px;">
</span>
<input type="text" class="form-control border-white username rounded-right" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" >
</div>

<div class="input-group mb-5">
<span id="basic-addon1" class="input-group-text rounded-left border-white" >
 <img
src="../assets/lock.png" alt="" class="img-fluid" style="width: 20px;
height: 20px;">
</span>
<input type="password" class="form-control border-white password rounded-right" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" >
</div>


<button type="submit" class="btn btn-light loginbtn mx-auto d-block">Login</button>




</form>
  </div>

</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'login',

  methods:
  {
    login()
    {
      this.$router.push('/charts')
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


text-transform: uppercase;

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
