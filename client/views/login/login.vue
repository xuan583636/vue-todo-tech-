<template>
  <div>
    this is login page
    <div>
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option v-for="option in options" :key="option.value" >
          '"a"'
        </option>
      </select>
      <span>Selected: {{ selected }}</span>
      <input
        type="checkbox"
        v-model="toggle"
      >
    </div>
    <test       
      label="姓名"
      class="username-input"
      placeholder="Enter your username"
      data-date-picker="activated"
      cdhoaoc="deeee"
      >
    </test>
    <div>ooo:{{inputText}}</div>
  </div>
</template>

<script>
import Test from './test.vue'
export default {
  data() {
    return {
      selected: 'A',
      toggle:'',
      inputText:'',
      searchText:'',
      options: [
        { value: 'A', text: 'One'},
        { value: 'B', text: 'Two'},
        { value: 'C', text: 'Three'}
      ]
    }
  },
  watch: {
    searchText(newV,oldV){
      this.inputText = newV +1
      console.log(this.inputText)
    }    
  },
  components:{
    Test
  }
}
</script>
