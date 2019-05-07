import Vue from 'vue'

const component = {
  props: {
    active: Boolean,
    propOne: String,
    onChange: Function
  },
  template: `
    <div>
      <input type='text' v-model.number="propOne">
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
    `,
  data () {
    return {
      text: 0
    }
  },
  methods: {
    handleChange () {
      this.onChange()
    }
  }
}
new Vue({
  components: {
    CmpOne: component
  },
  el: '#rooter',
  template: `
  <div>
    <cmp-one :active="true" :prop-one="prop1" :on-change="handleChange"></cmp-one>
    <cmp-one :active="false"></cmp-one>
  </div>
  `,
  data: {
    prop1: 'text1'
  },
  methods: {
    handleChange () {
      this.prop1 +=1
    }
  }
})
