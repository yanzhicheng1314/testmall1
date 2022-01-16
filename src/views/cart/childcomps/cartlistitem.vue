<template>
  <div class="shop-item">
    <div class="item-selector"> 
      <checkbotton :ischecked="iteminfo.checked"
       @click.native="checkclick"></checkbotton>   
    </div>
    <div class="item-img">
      <img :src="iteminfo.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{iteminfo.title}}</div>
       <div class="item-desc">{{iteminfo.desc}}</div>
       <div class="info-botton">
         <div class="item-price left">￥{{iteminfo.price}}</div>
          <div class="item-price right">x{{iteminfo.count}}</div>
       </div>
    </div>
  </div>
</template>

<script>
import checkbotton from "../../../components/content/checkbotton/checkbotton.vue"
  export default {
    name: 'cartlistitem',
    components: {
      checkbotton
    },
    props:{
     iteminfo:{
       type:Object
     }
    },
    methods: {
      checkclick(){
        this.iteminfo.checked=!this.iteminfo.checked
        console.log(this.iteminfo.checked);
      }
    }
 
  }
</script>

<style scoped>
  .shop-item{
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 2px solid #ccc;
  }
  .item-selector{
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .item-title .item-desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-img{
    padding: 5px;
  }
  .item-img img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }
  .item-info{
    font-size: 7px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }
  .item-info .item-desc{
       font-size: 10px;
    color: #666;
    margin-top: 0px;
    overflow: hidden;
    height: 14px;
  }
  .info-botton{
    margin-top: 10px;
    position: absolute;
    bottom: 10px;

    right: 10px;
  }
  .info-botton .item-price{
    color: red;
    
  }
   .right{
     position: absolute;
     bottom: -5px;
      right: -20px;
        font-size: 17px;
   }
  .left{
     position: absolute;
     right: 180px;
     bottom: -5px;
     font-size: 17px;
  }
</style>