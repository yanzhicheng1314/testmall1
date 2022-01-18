<template>
  <div class="cartbottombar">
    <div class="check-content">
       <checkbotton  class="checkbutton"/>
       <span class="">全选</span>
    </div>
    <div class="totalPrice">合计:{{totalPrice}}</div>
    <div class="calculate">去结算:{{checkLength}}</div>
  </div>
</template>

<script>
import checkbotton from "../../../components/content/checkbotton/checkbotton.vue"
  export default {
    name: 'cartbottombar',
    components: {
      checkbotton
    },computed: {
      totalPrice(){
        return this.$store.state.cartlist.filter(item=>{
          return item.checked
        }).reduce((preValue,item)=>{
          return preValue+item.price*item.count
        },0)
      },
      checkLength(){
        return this.$store.state.cartlist.length
      }
    }
    
    
  }
</script>

<style>
  .cartbottombar{
    height: 40px;
    background-color: rgb(182, 166, 166);
    position: fixed;
    bottom: 45px;
    width: 100%;
    display: flex;
   
  }
  .check-content{
   display: flex;
   line-height: 40px;
   
  }
  .checkbutton{
    width: 20px;
    height: 20px;
       color: #fff;
   /* margin-top: 5px; */
   margin-right: 5px;

  }
  .totalPrice{
     margin-left: 20px;
      line-height: 40px;
      color: rgb(55, 11, 156);
      position: relative;
      font-size: 15px;
  }
  .calculate{
     line-height: 40px;
      color: #fff;
      position: relative;
      left: 130px;
      background-color: red;
      width: 100px;
      text-align: center;
  }
</style>