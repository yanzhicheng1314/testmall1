<template>
  <div id='app'>
    <router-view></router-view>
    <tabbar>
          <tabbaritem path="/home">
        <img slot="item-icon" src="./assets/img/tabbar/B-.png" alt="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/3.png" alt="" />
        <div slot="item-text">首页</div>
      </tabbaritem>
      <tabbaritem path="/category">
        <img slot="item-icon" src="./assets/img/tabbar/fenlei.png" alt="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/4.png" alt="" />
        <div slot="item-text">分类</div>
      </tabbaritem>
      <tabbaritem path="/cart">
        <img slot="item-icon" src="./assets/img/tabbar/3.png" alt="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/1.png" alt="" />
        <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile">
        <img slot="item-icon" src="./assets/img/tabbar/wode.png" alt="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/2.png" alt="" />
        <div slot="item-text">我的</div>
      </tabbaritem>
    </tabbar>
   
  </div>
</template>

<script>
import tabbar from'./components/common/tabbar/tabbar.vue'
 import  tabbaritem from './components/common/tabbar/tabbaritem.vue'
 export default {
    name: 'App',
    components: {
      tabbar,
      tabbaritem
    }
    
  }
</script>

<style>
  @import './assets/css/base.css'
</style>