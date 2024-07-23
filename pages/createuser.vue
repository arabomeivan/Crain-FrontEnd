<template>
  <div id="add_userformcontainer" >

<!--Form to validate fields-->
<form class="row g-3" @submit.prevent="createuser">


<div class="col-md-6">
<label for="exampleFormControlInput1" class="form-label">First Name</label><span class="mandatory">*</span>
<input id="firstname" type="text" class="form-control"  placeholder="First Name">
<!-- fkflkmfklmlk -->

</div>

<div class="col-md-6">
<label for="exampleFormControlInput1" class="form-label">Last Name</label><span class="mandatory">*</span>
<input id="lastname" type="text" class="form-control" placeholder="Last Name">


</div>

<div class="col-md-6">
<label for="exampleFormControlInput1" class="form-label">Email Addres</label><span class="mandatory">*</span>
<input id="email" type="text" class="form-control" placeholder="Email Address" >


</div>

<div class="col-md-6">
<label for="exampleFormControlInput1" class="form-label">Phone Number</label><span class="mandatory">*</span>
<input id="phonenumber" type="tel" class="form-control" placeholder="Phone Number">


</div>

<div class=" mb-3">
<label for="status">Department</label><span class="mandatory">*</span>
      <select id="department" class="form-select" aria-label="Default select example">
                    <option value="Human Resources">Human Resources</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Operations">Operations</option>
                    <option value="Accounting">Accounting</option>
        </select>

      </div>

<div class=" mb-3">
<label for="status">Status</label><span class="mandatory">*</span>
      <select id="status" class="form-select" aria-label="Default select example">
                    <option value="Junior Staff ">Junior Staff</option>
                    <option value="Senior Staff">Senior Staff</option>
                    <option value="Head of Department">Head of Department</option>
        </select>

      </div>

      <div class="col-12">

  <button id="add_user" class="btn btn-primary">Add User</button>
</div>

</form>
  </div>
</template>
<script>
export default {
  layout : 'dashboard',
}
</script>
<style scoped>
#add_userformcontainer
{
width:70%;
margin-left: auto;
margin-right:auto;


font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 39px;
}


.mandatory
{
  color: red;
}
#firstname,#lastname,#email,#phonenumber
{
  width:60%;
  border-color: v-bind(border_color_firstname);
}
.form-select
{
  width:65%;
  border-color:  #1C1F37;
}
#add_user
{
   background-color: #1C1F37;
   border-color: #1C1F37;
   box-shadow: none;
}

/**Responsiveness for mobile phones */

@media screen and (max-width: 480px)
{


  #add_userform
{
font-size: 15px;
width:auto;

}

#firstname,
#lastname,
#email,
#phonenumber
{
  width:100%;

}

.form-select
{
  width: 122%;
}
}
</style>
