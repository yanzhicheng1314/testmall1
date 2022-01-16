<template>
  <div class="checkbotton" :class="{check:ischecked}">
    <img src="../../../assets/img/tabbar/选择-√.png" alt="">
  </div>
</template>

<script>
  export default {
    name: 'checkbotton',
    props:{
      ischecked:{
        type:Boolean,
        default:false
      }
    }
    
  }
</script>

<style>
.checkbotton{
 border-radius: 50%;
 border: 2px solid #aaa;

}
.checkbotton img{
    height: 20px;
    width: 20px;
  }
  .check{
    border-color: red;
      background-color: red;
  }
</style>