<template lang="">
  <div>
    <!--SideBar Content container-->
<div class="class row sidebar">

<!--Beginnning of Sidebarcontent-->
  <div class="class col-sm-12 sidebarcontent">

    <!--Content 1 Logo-->
      <div class="row logo">

        <div class="col-md-6">
           <img src="../assets/logo.png" alt="not loading" class="img-fluid">
        </div>

        <div class="col-md-6 dash">
           Dash
           </div>

      </div>


    <!--Main Menu text-->
    <div class="row mainmenu">
      <div class="col-md-12">
        MAINMENU
      </div>
    </div>


    <!--Main Menu Tabs-->
<ul class="nav nav-tabs flex-column">

  <!--Tab for dashboard-->
<li class="nav-item">
  <NuxtLink  to="/charts" class="nav-link"><i class="fa-solid fa-chart-simple"></i>&nbsp;&nbsp;<span id="nav-text">Dashboard</span></NuxtLink>
</li>

<!--Inbox-->
<li class="nav-item">
  <NuxtLink  to="/requests" class="nav-link"><i class="fa-sharp fa-solid fa-comment"></i>&nbsp;&nbsp;<span id="nav-text">View Requests</span></NuxtLink>
</li>
</ul>

<!--Workspace text-->
<div class="row workspace">
      <div class="col-md-12">
      WORKSPACE
      </div>
    </div>


<!--Workspace Tabs-->
<ul class="nav nav-tabs flex-column">

<!--add user-->
<li class="nav-item">
<NuxtLink  to="/createuser" class="nav-link" ><i class="fa-solid fa-user-plus"></i>&nbsp;&nbsp;<span id="nav-text">Create User</span></NuxtLink>
</li>

<!--add equipment-->
<li class="nav-item">
<NuxtLink  to="/equipments" class="nav-link"><i class="fa-solid fa-desktop"></i>&nbsp;&nbsp;<span id="nav-text">Add Equipment</span></NuxtLink>
</li>

<!--view users-->
<li class="nav-item">
<NuxtLink  to="/view_users" class="nav-link"><i class="fa-solid fa-user"></i>&nbsp;&nbsp;<span id="nav-text">View Users</span></NuxtLink>
</li>

<!--view inventory-->
<li class="nav-item">
<NuxtLink  to="/inventory" class="nav-link"><i class="fa-solid fa-truck-ramp-box"></i>&nbsp;&nbsp;<span id="nav-text">View Inventory</span></NuxtLink>
</li>
</ul>



<!--Need Help With Dash-->
<div class="row help">

 <!--help image-->
<div class="row">
  <div class="col-md-12 help-circle-background rounded-circle">
    <img src="../assets/bx_bxs-help-circle.png" alt="image not loading" class="img-fluid help-circle">
  </div>
</div>



<!--blurry background-->
<div class="col-md-12 needhelpbackground">
  <!--Go to help Center Button-->
  <button type="button" class="btn btn-primary gotohelp">Go to help center</button>
</div>
</div>

      <!--End of Side bar content-->
  </div>
</div>
  </div>
</template>
<script>
export default {
  name: 'SideBar'
}
</script>

<style scoped>
.logo
{
width: 111px;
height: 40px;
margin-left: 30px;
margin-top: 38px;
}
.dash
{
  font-family: 'Montserrat';
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 29px;
color: #FFFFFF;
}
.mainmenu
{
width: 95px;
height: auto;
margin-left: 30px;
margin-top: 61px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #51CBFF;
}
.workspace
{
  width: 95px;
height: auto;
margin-left: 30px;
margin-top: 32px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #51CBFF;
}
.nav-item
{
  width: 200px;
  height: 56px;
  margin-left: 20px;
  font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 21px;
color: #FFFFFF;
}
.nav-link
{
   border: none;
}
.nav-link:hover
{
   color: white;
}
.nav-link:focus
{
  background-color: #1B2B65;
  color: white;
}
.nav-tabs
{
  margin-top: 9px;
   border-bottom-style: none;
}
.help
{
width: 204px;
height: 100px;
margin-left: auto;
margin-right: auto;
margin-top: 18px;
}
.needhelpbackground
{
  height: 70px;
}
.help-circle-background
{
width: 53px;
height: 50px;
margin-left: 72px;
top: 40px;
background: #1B2B65;
}
.help-circle
{
  margin-left: auto;
  margin-right:auto;
  margin-top: 10px;
}
.gotohelp
{
  background: #017EFA;
  border-radius: 6px;
   margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top: 30px;
}
.gotohelp:focus
{
  box-shadow: none;
}
.needhelpbackground
{
  background: #1B2B65;
  border-radius: 8px;
}
/**Responsiveness for mobile phones */
@media screen and (max-width: 480px)
{
  .logo
  {
    width: 60px;
    margin-right: auto;
    margin-left: auto;
  }
  .dash
  {
    margin-left: 3px;
    font-size: 16px;
  }
  .mainmenu, .workspace
  {
    width: 70px;
    font-size: 10px;
    margin-right: auto;
    margin-left: auto;
  }
  .workspace
  {
    margin-top: 10px;
  }
  .nav-tabs
  {
    margin-left: 13px;
  }
  .nav-item
  {
    margin-left: 0px;
    width:60px;
  }
  #nav-text
  {
    display: none;
  }
  .help
  {
    width: 80px ;
    margin-left: 3px;
  }
  .help-circle-background
  {
    width: 52px;
    margin-left: 13px;
    height: 50px;
  }
  .gotohelp
  {
    width: 66px;
    height: 34px;
    margin-left: -5px;
    font-size: 8px;
    margin-top: 20px;
  }
}
</style>
