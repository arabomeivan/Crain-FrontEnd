<template lang="">
  <div class="body">

   <!--Navbar-->
   <NavBar :display_sidebar="display_sidebar" @toggletaskbar="show_hide_sidebar($event)"/>

<!-- Sidebar -->
    <div v-if="display_sidebar" class="sidebarcontainer" >
      <SideBarContent />
    </div>




<!-- Router View-->

<!--pages will be displayed here-->
<div class="class container pages">

  <Nuxt/>
</div>
  </div>
</template>
<script>
import SideBarContent from '~/components/SideBarContent.vue';
import NavBar from '~/components/NavBar.vue';
export default {

  name: 'Dashboard',

  components:
  {
    NavBar,
    SideBarContent
  },

  data()
  {
    return{
      display_sidebar: true,
    }
  },

  methods:
  {
    show_hide_sidebar(update)
    {
      this.display_sidebar = update
    }
  }


}
</script>

<style scoped>
/**Styling width and height of the sidebar container */

.dashboard
{
  width: 1648.75px;
}
.sidebarcontainer
{
width: 260px;
height: 1064px;
background: #081A51;
position: fixed;
}
.body
    {
      background-color: #F8F9FF;
    }
/**placing content to be in middle */
.pages
{
    padding-top: 150px;
    width:70%;
    margin-left: 22%;
}

/**Responsiveness for mobile phones */
@media screen and (max-width: 480px)
{
  .sidebarcontainer
  {
    width: 100px;
  }
  .groupcontainer
  {
    width: 330px;
  }
  .mainpartition
  {
    margin-left: 88px;
    width: 244px;
  }
  .maincontent
  {
    margin-top: 120px;
    width: 67%;
  }
}
</style>


