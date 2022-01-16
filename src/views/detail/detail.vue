<template>
  <div id="detail">
    <detailnavbar @activeClick="activeClick"
     class="detail-nav" ref="nav"/>
    <scroll class="content" ref="scroll" 
    @scroll="contscroll" :probeType="3">
      <detailswiper :topimages="topimages" />
      <detailbaseinfo :goods="goods" />
      <detailshopinfo :shop="shop" />
      <detailinfo :detailinfo="detailinfo"/>
      <detailparaminfo ref="params" :paramInfo="paramInfo"/>
      <detailcommentinfo ref="comment" :commentInfo="commentInfo"/>
    <goodslist ref="recommend" :goods="recommends"/>
    </scroll>
    <detailbottombar @addcart="addcart"/>
   
  </div>
</template>

<script>
import detailnavbar from "./childComponents/detailnavbar.vue";

import detailswiper from "./childComponents/detailswiper.vue";

import detailbaseinfo from "./childComponents/detailbaseinfo.vue";
import detailshopinfo from "./childComponents/detailshopinfo.vue";
import detailinfo from "./childComponents/detailinfo.vue"
import detailparaminfo from "./childComponents/detailparaminfo.vue"
import detailcommentinfo from "./childComponents/detailcommentinfo.vue"
import detailbottombar from "./childComponents/detailbottombar.vue"

import scroll from "../../components/common/scroll/scroll.vue";
import goodslist from "../../components/content/goods/goodslist.vue"
import { getDetail, Goods, Shop,GoodsParam,getRecommend } from "../../network/detail";
export default {
  name: "detail",
  components: {
    detailnavbar,
    detailswiper,
    detailbaseinfo,
    detailshopinfo,
    scroll,
    detailinfo,
    detailparaminfo,
    detailcommentinfo,
    detailbottombar,
    goodslist,
 
  
  },
  data() {
    return {
      iid: null,
      topimages: [],
      goods: {},
      shop: {},
      detailinfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      themeTopY:[],
      currentIndex:0,
      product:{}
    };
  },
  created() {
    this.iid = this.$route.params.iid;

     /**
      * 详情数据
      */
    getDetail(this.iid).then((res) => {
      const data = res.data.result;
      this.topimages = data.itemInfo.topImages;

      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      this.shop = new Shop(data.shopInfo);
       
    this.detailinfo=data.detailInfo;

      this.paramInfo =new GoodsParam(data.itemParams.info,
      data.itemParams.rule)

      if(data.rate.cRate !==0){
        this.commentInfo=data.rate.list[0]
      }
       
    });
 
    /**
     * 推荐数据
     */
 getRecommend().then((res)=>{
   this.recommends=res.data.data.list
 })
 },

  mounted () {
  
 },
 updated () {
  this.themeTopY=[]
      this.themeTopY.push(0);
     this.themeTopY.push(this.$refs.params.$el.offsetTop);
      this.themeTopY.push(this.$refs.comment.$el.offsetTop);
       this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
       this.themeTopY.push(Number.MAX_VALUE);
 },
  methods: {
   activeClick(index){
     this.$refs.scroll.scrollTo(0,-this.themeTopY[index],500)
   },
   contscroll(position){
    const positionY=-position.y
    let length=this.themeTopY.length
    for(let i=0;i<length-1;i++){
      if(this.currentIndex!==i &&(positionY>=
      this.themeTopY[i] &&positionY<this.themeTopY[i+1])){
       this.currentIndex=i;
       this.$refs.nav.currentIndex=this.currentIndex
      }
    }
   },
   addcart(){
        console.log(this.product);
   this.product.image=this.topimages[0];
   this.product.title=this.goods.title;
   this.product.desc=this.goods.desc;
    this.product.price=this.goods.realPrice;
    this.product.iid=this.iid;

    this.$store.commit('addcart',this.product)
   }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav{
  position: relative;
  z-index: 9;
   background-color: #fff;
}
.content {
  height: calc(100% - 44px);
}
</style>