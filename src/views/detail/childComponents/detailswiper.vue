<template>
  <div class="detailswiper">
            <swiper class="swiper-item">
    <swiper-slide v-for="(item,index) in topimages" :key="index"
    class="swiper-image">
     <img :src="item" alt="">
     </swiper-slide>
</swiper>
  </div>
</template>

<script>
 import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
  export default {
    name: 'detailswiper',
    props:{
     topimages:{
       type:Array,
      default(){
          return[]
        }
     }
    },
    components: {
       Swiper,
      SwiperSlide
    }
    
  }
</script>

<style scoped>
  .swiper-item{
    height: 280px;
    overflow: hidden;
  }
</style>