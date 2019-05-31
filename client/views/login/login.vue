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
      v-model="searchText"
      >
    </test>
    <div>ooo:{{inputText}}</div>
    <nm-test v-bind.sync="newOption"></nm-test>
    <p>智力： {{ newOption.wisdom }}</p>
    <p>攻击 {{ newOption.attack }}</p>
  </div>
</template>

<script>
import Test from './test.vue'
import NmTest from './nmTest.vue'
export default {
  data() {
    return {
      selected: 'A',
      toggle:'',
      inputText:'',
      searchText:'',
      syncValu:'',
      newOption: {
        wisdom:1,
        attack:99
      },
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
    Test,
    NmTest
  }
}
</script>
