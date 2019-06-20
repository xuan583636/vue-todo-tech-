<template>
  <div class="radio">
    <div class="radioGroup">
      <div
        class="radioItem"
        v-for="item in options"
        :key="item.value"
        @click="clickRadio(item.value);"
      >
        <div
          class="radioBox"
          :class="{ checked: item.value === checked }"
        >
        </div>
        <div class="name">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: Array,
    newValue: String
  },
  data() {
    return {
      checked:''
    }
  },
  model: {
    prop: "newValue", //绑定的值，通过父组件传递
    event: "ddee" //自定义事件名
  },
  methods: {
    clickRadio(val) {
      this.checked = val;
      this.$emit("ddee", val); //子组件与父组件通讯，告知父组件更新绑定的值
    }
  },
  // watch: {
  //   checked: function(newVal, oldVal) {
  //     console.log("我是子组件，现在的值为：" + newVal);
  //   }
  // }
};
</script>

<style>
.left,
.right,
.radioItem,
.radioBox,
.name {
  display: inline-block;
}
.radioItem,
.name {
  margin-left: 10px;
}
.radioBox {
  border-radius: 50%;
  width: 10px;
  height: 10px;
  border: 1px solid #16cbf1;
}
.checked {
  background-color: #16cbf1;
}
</style>