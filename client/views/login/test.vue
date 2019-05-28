<template>
    <select
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <option>A</option>
    <option>B</option>
    <option>C</option>
    </select>
</template>

<script>
export default {
  props:['value'],
}
</script>