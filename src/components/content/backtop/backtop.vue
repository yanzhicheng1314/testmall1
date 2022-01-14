<template>
  <div class="backtop" >
    <img src="../../../assets/img/home/回到顶部.png" alt="">
  </div>
</template>
<script>
  export default {
    name: 'backtop',
    methods: {
     
    }
    
  }
</script>

<style>
  .backtop{
    position: fixed;
    right: 10px;
    bottom: 60px;
    z-index: 9;
  }
  .backtop img{
    height: 40px;
    width: 40px;
  }
</style>