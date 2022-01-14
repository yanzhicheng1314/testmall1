<template>
  <div class="tabcontrol">
    <div
      v-for="(item, index) in titles"
      :key="item"
      class="tab-cont"
      :class="{ active: index === currentIndex }"
      @click="itemclick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    
    };
  },
  methods: {
    itemclick(index) {
      this.currentIndex = index;
        this.$emit('tabClick',index)
    },
  },
};
</script>

<style>
.tabcontrol {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  background-color: rgb(252, 250, 252);
}
.tab-cont {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>