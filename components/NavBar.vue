<template lang="">
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div id="navcontent" class="container-fluid">

     <!--LEFT SIDE OF THE NAVBAR CONTENT-->

  <!--Button to shrink Side bar-->
  <button id="minimizesidebar" type="button" class="btn btn-light rounded-circle" @click="hide_show_sidebar">
    <i v-if="iconvisbility_left" class="fa-solid fa-chevron-left"></i>
    <i v-if="iconvisbility_right" class="fa-solid fa-chevron-right" ></i>
  </button>


    <div class="row navbartitle">
      <div class="col-md-12">
        {{ pageName }}
      </div>
    </div>



    <!--Right side of content-->
      <form class="d-flex rightcontent">
        <input v-if="showsearchbox" id="searchbox"  type="text"  class="form-control" placeholder="Search">
        <button type="button" class="btn btn-light rounded-circle togglesearchbox" @click="show_hide_searchbox"><i class="fa-solid fa-magnifying-glass"></i></button>
        <button type="button" class="btn btn-light rounded-circle"><i class="fa-regular fa-bell"></i></button>
        <img id="profilepicture" src="../assets/Profileimg.jpeg" alt="can't load profile picture" class="img-fluid rounded-circle">


         <!--Profile Name-->
         <div id="profilename" class="row" >
          <div class="col-md-12">
            Ivan Arabome
          </div>
         </div>


        <div class="dropdown">
          <img id="dropdownMenuButton1" src="../assets/bx_bx-chevron-down.png" alt="can't load dropdown" class="img-fluid"  data-bs-toggle="dropdown" aria-expanded="false">
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#" style="width: auto;">Settings</a></li>
    <li><a class="dropdown-item" href="#" style="width: auto;" @click="logout">Log out</a></li>
  </ul>
</div>
      </form>
    </div>
</nav>
  </div>
</template>
<script>
export default {
name: 'NavBar',


props:['display_sidebar'],

data() {
    return {

      showsearchbox:false,
      sidebarshown:true,
      iconvisbility_left: true,
      iconvisbility_right: false,

      // For responsiveness when sidebar is hidden and made full
      navbar:
      {
        minimizesidebar:'20%',
        rightcontent: '20%'

      },


      mobile_navbar:
      {
        rightcontent:
        {
          margin_left: '40%'
        },

        minimizesidebar:
        {
          margin_left:'32%',
          margin_top:'0px',
          margin_right:'0px'
        }

      }



    }
  },
  computed: {


    pageName() {
      // eslint-disable-next-line eqeqeq
      if (this.$route.path === '/createuser') {
        return 'Create User';
      }
      // eslint-disable-next-line eqeqeq
      if (this.$route.path === '/charts') {
        return 'Dashboard';
      }
      // eslint-disable-next-line eqeqeq
      if (this.$route.path === '/inventory') {
        return 'View Inventory';
      }
      // eslint-disable-next-line eqeqeq
      if (this.$route.path === '/requests') {
        return 'View Requests';
      }
      // eslint-disable-next-line eqeqeq
      if (this.$route.path === '/view_users') {
        return 'View Users';
      }
      // eslint-disable-next-line eqeqeq
      if (this.$route.path === '/equipments') {
        return 'View Equipments';
      }

      return '';
    },

  }
  ,
   methods:
   {
    show_hide_searchbox()
    {
      this.showsearchbox = !this.showsearchbox
    },
    logout(){
      this.router.push('/')
    },

    hide_show_sidebar()
   {

    this.$emit('toggletaskbar', !this.display_sidebar)
    this.iconvisbility_left = !this.iconvisbility_left
    this.iconvisbility_right = !this.iconvisbility_right

    if(this.navbar.minimizesidebar ==='20%'
    && this.navbar.rightcontent ==='20%' && this.mobile_navbar.rightcontent.margin_left ==='40%'
    && this.mobile_navbar.minimizesidebar.margin_left ==='32%' )
    {
      this.navbar.minimizesidebar = '0%'
      this.navbar.margin_left = '60px'
      this.navbar.rightcontent = '0%'
      this.mobile_navbar.minimizesidebar.margin_left = '2%'

    }

    else
    {
      this.navbar.minimizesidebar = '20%'
      this.navbar.margin_left = '0px'
      this.navbar.rightcontent = '20%'
      this.mobile_navbar.rightcontent.margin_left ='40%'
      this.mobile_navbar.minimizesidebar.margin_left = '32%'
    }

   }

   },




}
</script>
<style scoped>
  /**styling navbar */
  .navbartitle
{
  margin-right: 150px;
}
.navbar
{
  height: 90px;
  position:fixed;
  width: 100%;
}
#minimizesidebar
{
  margin-left: v-bind('navbar.minimizesidebar');
}
#searchbox
{
  border-color:  #1C1F37;
  box-shadow: none;
}
.btn:focus
{
  box-shadow: none;
}
/**Giving dashboard a style */
#navcontent
{
  font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
/* identical to box height */


color: #1C1F37;
}

#profilepicture
{
  margin-left: 16px;
  width: 40px;
  height: 40px;
}

/**search button and notification button */
.btn
{
  margin-left: 16px;
  width: 40px;
  height: 40px;
}

/**proflilename */
#profilename
{
  align-self: center;
  margin-left: 16px;
  width: 70%;
  height: 19px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

color: #000000;
}


/**Style for dropdown menu */
.dropdown
{
  width:20%;
  height:24px;
  margin-left: 16px;
}

/**drop down icon */
#dropdownMenuButton1
{
  width: 24px;
  height: 24px;
}
/**dropdown menu placing it to display better */
.dropdown-menu.show
{
  margin-top:10px;
  margin-left: -120px;
}


/**Responsiveness for mobile phones */
@media screen and (max-width: 600px)
{
  .navbar
  {
    width:100%;
  }

  .togglesearchbox
  {
    display: none;
  }
.btn
{
  margin-right: 20px;
}
.navbartitle
{
  display: none;
}
.rightcontent
{

  margin-left: v-bind('mobile_navbar.rightcontent.margin_left');
}

#minimizesidebar{
    margin-top: v-bind('mobile_navbar.minimizesidebar.margin_top');
    margin-left: v-bind('mobile_navbar.minimizesidebar.margin_left');
}
#profilename
{
  display: none;
}
}

@media screen and (max-width: 768px)
{
  .navbartitle
  {
    margin-right: 0px;
    font-size: large;
  }

  .form-label
  {
    font-size: large;
  }
  .rightcontent
{
  margin-right: v-bind('mobile_navbar.rightcontent.margin_right');

}

}
</style>
