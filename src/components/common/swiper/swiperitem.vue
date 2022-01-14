<template>
  <div class="swiper">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'swiperitem',
    
  }
</script>

<style>
 .swiper{
   width: 100%;
   flex-shrink: 0;
 } 
  .swiper img{
    width: 100%;
  }
</style>