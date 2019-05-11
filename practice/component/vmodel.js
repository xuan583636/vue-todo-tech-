import Vue from 'vue'

const componentInstance1 = {
  model: {
    prop: 'kkValue',
    event: 'inputEmit'
  },
  props: ['kkValue'],
  template: `
    <div>
      <input type='text' @input="handleInput" :value="kkValue">
    </div>
    `,
  methods: {
    handleInput (e) {
      this.$emit('inputEmit', e.target.value)
    }
  }
}
new Vue({
  el: '#rooter',
  components: {
    CompOne: componentInstance1
  },
  data () {
    return {
      trueValue: 123
    }
  },
  template: `
    <div>
      <comp-one v-model="trueValue"></comp-one>
      <span>{{trueValue}}</span>
    </div>
  `
})
