<template>
  <div id='detailnavbar'>
   <navbar>
     <div slot="left" class="leftimg" @click="backClick">
       <img src="../../../assets/img/home/左箭头.png" alt="">
     </div>
     <div slot="center" class="titles">
      <div v-for="(item,index) in titles" 
      :key="index"
      class="titles-item" 
      :class="{active:currentIndex==index}"
      @click="activeClick(index)">
        {{item}}</div>
     </div>
     </navbar>
  
  </div>
</template>

<script>



import navbar from "../../../components/common/navbar/navbar.vue"
  export default {
    name: 'detailnavbar',
    components: {
      navbar,
    },
    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex:0
      };
    },
     methods: {
       activeClick(index){
         this.currentIndex=index;
         this.$emit('activeClick',index)
       },
       backClick(){
         this.$router.go(-1)
       }
     }
  }
</script>

<style scoped>
  .titles{
    display: flex;
  }
  .titles-item{
    flex: 1;
    font-size: 14px;
  }
  .active{
    color: red;
  }
  .leftimg img{
     height: 30px;
     width: 30px;
     margin-top: 10px;
  }
</style>