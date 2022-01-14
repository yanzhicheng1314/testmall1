<template>
  <div class="recommend">
     <div v-for="(item,index) in recommends" :key="index"
     class="recommenditem">
       <a :href="item.link"> 
    <img :src="item.image" alt="">
    <div>{{item.title}}</div>
  </a>
     </div>
   
  </div>
</template>

<script>
  export default {
    name: 'homerecommview',
    props:{
       recommends:{
        
        type:Array,
        default(){
          return[]
        }
      }
     
    }
    
  }
</script>

<style >
.recommend{
  display: flex;
  padding: 15px 0 20px;
  border-bottom: 8px solid #eee;
    width: 100%;
     text-align: center;
    font-size: 12px;
}
  .recommenditem{
  
    flex: 1;
   
  }
  .recommenditem img{
    height: 80px;
     width: 80px;

  }
</style>