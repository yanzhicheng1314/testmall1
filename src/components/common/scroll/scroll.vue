<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroll",
  prpos: {
    probeType: {
      type: Number,
      default: 0,
    },
    // pullUpLoad:{
    //   type:Boolean,
    //   default:false
    // }
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad:true,
      click: true,
    });
    this.scroll.on("scroll", (position) => {
        this.$emit('scroll',position)
    });
    this.scroll.on('pullingUp',()=>{
       this.$emit('pullingUp')
    })

  },
  methods: {
    scrollTo(x, y, time = 3000) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  },
};
</script>

<style>
</style>