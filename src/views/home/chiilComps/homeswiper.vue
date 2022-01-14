<template>
  <div>
     <swiper>
    <swiper-slide v-for="(item,index) in banners" :key='index'>
    <a :href="item.link">
      <img :src="item.image" alt="">
    </a>
     </swiper-slide>
</swiper>
  </div>
</template>

<script>
 import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
  export default {
    name: 'homeswiper',
    props:{
      banners:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    components:{
      Swiper,
      SwiperSlide
    }
    
  }
</script>

<style>
  .swiper-slide img{
  
  width: 100%;
}
</style>