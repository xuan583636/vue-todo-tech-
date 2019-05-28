<template>
    <div>
      <span>{{ label }}</span>
      <input
        v-bind="$attrs"
      >
    </div>
</template>

<script>
export default {
  props:['label'],
  inheritAttrs: false, //此处设置禁用继承特性
  mounted: function() {
    console.log(this.$attrs);
  }
}
</script>