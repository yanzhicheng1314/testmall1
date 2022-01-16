<template>

  <div class="goodslistitem" @click="itemClick">
      <img :src="showImage" alt="" />
      <div class="goods-info">   
    <p>{{goodsItem.title}}</p>
    <span class="price">{{goodsItem.price}}</span>
   <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodslistitem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    itemClick(){
     this.$router.push('/detail/'+this.goodsItem.iid)
    }
  }
}
</script>

<style>

.goodslistitem{
padding-bottom: 40px;
position: relative;
width: 48%;
}
.goodslistitem img{
  border-radius: 5px;
  width: 100%;

  
}
.goods-info{
 font-size: 12px;
 position: absolute;
 bottom: 5px;
 left: 0;
 right: 0;
 overflow: hidden;
 text-align: center;

}
.goods-info p{
 overflow: hidden;
 text-overflow: ellipsis;
 white-space: nowrap;
 margin-bottom: 3px; 
}
.goods-info .price{
 color:var(--color-high-text);
 margin-right: 20px;
}
.goods-info .cfav{
  position: relative;
}
.goods-info .cfav::before{
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;

}
</style>