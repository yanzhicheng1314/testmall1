<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service">
             <img src="../../../assets/img/tabbar/kefu.png" alt="">
        </i>
        <span class="text">客服</span>
      </div>   
    <div>
        <i class="icon shop">
            <img src="../../../assets/img/tabbar/dianpu.png" alt=""> 
        </i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select">
          <img src="../../../assets/img/tabbar/shoucang.png" alt="">
        </i>
        <span class="text">收藏</span>
      </div>
  </div>
  <div class="bar-item bar-right">
    <div class="cart" @click="addcart">加入购物车</div>
    <div class="buy">购买</div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'detailbottombar',
    methods: {
      
      addcart(){
        alert('加入购物车成功')
      this.$emit('addcart')
      }
    }
    
  }
</script>

<style scoped>
  .bottom-bar{
    position: fixed;
    height: 49px;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    text-align: center;
    background: #fff;
  }
  .bar-item{
    flex: 1;
    display: flex;
  }
  .bar-left .text{
    font-size: 13px;
    padding-left: 4px;
  }
  .bar-item>div{
    flex: 1;
  }
  .bar-left .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin: 1px auto 8px;    
  }
  .bar-left img{
    height: 30px;
    width: 30px;
  }

  .bar-right{
    font-size: 15px;
    color: #fff;
    line-height: 49px;
  }
  .bar-right .cart{
    background-color: rgb(10, 206, 147);
    color: #333;
  }
  .buy{
    background-color:pink;
    color: #333;
  }

</style>
