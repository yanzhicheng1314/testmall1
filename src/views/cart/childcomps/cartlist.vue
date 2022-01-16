<template>
  <div class="cartlist">
   <cartlistitem v-for="(item ,index) in cartlist"
   :key="index" :iteminfo="item"/>
  </div>
    
</template>

<script>
import cartlistitem from "./cartlistitem.vue"
 export default {
    name: 'cartlist',
    components: {
   
      cartlistitem
    },
     computed: {
       cartlist(){
          return this.$store.state.cartlist
       }
     },
    
  }
</script>

<style scoped>


</style>