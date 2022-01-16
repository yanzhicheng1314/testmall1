<template>
  <div class="cartbottombar">
    <div>
       <checkbotton  class="checkbutton"/>
       <span class="">全选</span>
    </div>
  </div>
</template>

<script>
import checkbotton from "../../../components/content/checkbotton/checkbotton.vue"
  export default {
    name: 'cartbottombar',
    components: {
      checkbotton
    }
    
  }
</script>

<style>
  .cartbottombar{
    height: 40px;
    background-color: red;
    position: relative;
    bottom: 45px;
  }
  .checkbutton{
    width: 40px;

  }
</style>