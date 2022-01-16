<template>
  <div class="cart">
   <navbar class="navbar">
     <div slot="center">购物车({{cartLength}})</div>
   </navbar>
   <cartlist/>

  </div>
</template>

<script>
import navbar from "../../components/common/navbar/navbar.vue"
import cartlist from "./childcomps/cartlist.vue" 
 
 export default {
    name: 'cart',
    components: {
      navbar,
      cartlist,
   
    },
    computed: {
      cartLength(){
        return this.$store.state.cartlist.length
      }
    }
    
  }
</script>

<style scoped>
  .navbar{
    background-color: pink;
    color: #fff;
   
  }
</style>