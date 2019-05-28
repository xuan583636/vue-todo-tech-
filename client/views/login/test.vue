<template>
<<<<<<< HEAD
    <div>
      <span>{{ label }}</span>
      <input
        v-bind="$attrs"
      >
    </div>
=======
    <select
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <option>A</option>
    <option>B</option>
    <option>C</option>
    </select>
>>>>>>> f19071ac4e39d405c3fb8e578627bf52c0f6da10
</template>

<script>
export default {
<<<<<<< HEAD
  props:['label'],
  inheritAttrs: false, //此处设置禁用继承特性
  mounted: function() {
    console.log(this.$attrs);
  }
=======
  props:['value'],
>>>>>>> f19071ac4e39d405c3fb8e578627bf52c0f6da10
}
</script>