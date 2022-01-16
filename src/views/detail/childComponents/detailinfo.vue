<template>
  <div v-if="Object.keys(detailinfo).length !==0"
   class="detail-info">
   <div class="info-desc clear-fix">
     <div class="start"></div>
   <div class="desc">{{detailinfo.desc}}</div>
   <div class="end"></div>
   </div>
   <div class="info-key">{{detailinfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in 
      detailinfo.detailImage[0].list"
       :key="index" :src="item" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'detailinfo',
    props:{
      detailinfo:{
        type:Object
      }
    },
    data() {
      return {
        counter: 0,
        imagesLength:0
      };
    },
   
     watch: {
       detailinfo(){
         this.imagesLength=
         this.detailinfo.detailImage[0].list.length
       }
     }
  }
</script>

<style scoped>
 .info-list img{
   width: 100%;
 }
</style>