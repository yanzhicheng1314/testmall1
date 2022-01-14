<template>
  <div id="hy-swiper">
    <div class="swiper"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd">
      <slot></slot>
    </div>
    <slot name="indicator"> </slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount > 1">
        <div v-for="(item, index) in slideCount"
          class="indi-item"
          :class="{active: index === currentIndex - 1 }"
          :key="index"></div>
      </slot>
    </div>
  </div>
</template>

 <script>
  export default {
   name: "swiper",
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
      slideCount: 0, //元素个数
      totalWidth: 0,
      swiperStyle: {},
      currentIndex: 1,
      scrolling: false,
    };
  },
  mounted: function () {
    setTimeout(() => {
      this.handleDom();

      this.startTimer();
    }, 500);
  },
  methods: {
    startTimer: function () {
      this.playTimer = window.setTimeout(() => {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.interval);
    },
    stopTimer: function () {
      window.clearInterval(this.playTimer);
    },
    //  滚动到正确的位置
    scrollContent: function (currentPosition) {
      this.scrolling = true;
      this.swiperStyle.transition = "transform" + this.animDuration + "ms";
      this.setTransform(currentPosition);
      this.checkPosition();
      this.scrolling = false;
    },
    checkPosition: function () {
      window.setTimeout(() => {
        this.swiperStyle.transition = "0ms";
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }

        // 结束移动后的回调
        this.$emit("transitionEnd", this.currentIndex - 1);
      }, this.animDuration);
    },
    // 设置滚动的位置
    setTransform: function (position) {
      this.swiperStyle.transform = `translate3d(${position}px,0,0)`;
      this.swiperStyle["-webkit-transform"] = `translate3d(${position}px),0,0`;
      this.swiperStyle["-ms-transform"] = `translate3d(${position}px),0,0`;
    },

    //  操作dom
    handleDom: function () {
      let swiperEl = document.querySelector(".swiper");
      let slidesEls = swiperEl.getElementsByClassName("slide");

      // 保存个数
      this.slideCount = slidesEls.length;

      if (this.slideCount > 1) {
        let cloneFirst = slidesEls[0].cloneNode(true);
        let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true);
        swiperEl.insertBefore(cloneLast, slidesEls[0]);
        swiperEl.appendChild(cloneFirst);
        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
      }
      this.setTransform(-this.totalWidth);
    },
    // 拖动事情的处理
    touchStart: function (e) {
      if (this.sctolling) return;

      //停止定时器
      this.stopTimer();
      this.startX = e.touches[0].pageX;
    },
    touchMove: function (e) {
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let CurrentPosition = -this.currentIndex * this.totalWidth;
      let moveDistance = this.distance + currentPosition;

      //  设置当前的位置
      this.setTransform(moveDistance);
    },
    touchEnd: function (e) {
      let currentMove = Math.abs(this.distance);
      if (this.distance === 0) {
        return;
      } else if (
        this.distance > 0 &&
        currentMove > this.totalWidth * this.moveRatio
      ) {
        this.currentIndex--;
      } else if (
        this.distance < 0 &&
        currentMove > this.totalWidth * this.moveRatio
      ) {
        this.currentIndex++;
      }
      this.scrollContent(-this.currentIndex * this.totalWidth);
      this.startTimer();
    },

    //  控制上一个，下一个
    previous: function () {
      this.changeItem(-1);
    },
    next: function () {
      this.changeItem(1);
    },
    changeItem: function (num) {
      this.stopTimer();
      this.currentIndex += num;
      this.scrollContent(-this.currentIndex * this.totalWidth);
      //  添加定时器
      this.startTimer();
    },
  },


 };
  

</script>



<style>
#hy-swiper {
  overflow: hidden;
  position: relative;
}
.swiper {
  display: flex;
}
.indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 8px;
}
.indi-item {
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #fff;
  line-height: 8px;
  text-align: center;
  font-size: 12px;
  margin: 0 5px;
}
.indi-item .active {
  background-color: rgba(212, 62, 46, 1);
}
</style>