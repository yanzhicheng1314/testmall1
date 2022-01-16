<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
     <scroll class="content" ref="scroll" :probe-type='3' 
     @scroll='contentScroll' :pull-up-load="true"
     @pullingUp='looadMore'>
             <homeswiper :banners="banners"
            ></homeswiper>
    <homerecommview :recommends="recommends"></homerecommview>
    <homefeature></homefeature>
    <tabControl
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
    ></tabControl>
    <goodslist :goods="goods[currentType].list" />
     </scroll>
     <backtop @click.native="backClick" v-show="isshow"></backtop>
  </div>
</template>
<script>
import homeswiper from "./chiilComps/homeswiper.vue";
import homerecommview from "./chiilComps/homerecommview.vue";
import homefeature from "./chiilComps/homefeature.vue";

import navbar from "../../components/common/navbar/navbar.vue";
import tabControl from "../../components/content/tabcontrol/tabControl.vue";
import goodslist from "../../components/content/goods/goodslist.vue";
import scroll from "../../components/common/scroll/scroll.vue"
import backtop from "../../components/content/backtop/backtop.vue"

import { getHomemultidata, getHomeGoods } from "../../network/home";

export default {
  name: "home",
  components: {
    homeswiper,
    homerecommview,
    homefeature,
    navbar,
    tabControl,
    goodslist,
    scroll,
    backtop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isshow:false
    }
  },
  created() {
    this.getHomemultidatas();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /**
     * 事情点击的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick(){
       this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position){
      this.isshow=(-position.y)>1000
    },
    looadMore(){
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.scroll.refresh()
    },
    /**
     * 网络请求相关的方法
     */
    getHomemultidatas() {
      getHomemultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content{
  height: 100%;
}
</style>
