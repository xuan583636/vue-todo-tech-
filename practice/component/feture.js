import Vue from 'vue'

const ChildComponent = {
  template: `
    <div>Child Component: {{data.value55}}</div>
  `,
  inject: ['yeye', 'data'],
  mounted () {
    console.log(this.yeye)
    console.log(this.value33)
  }
}
const componentInstance1 = {
  name: 'ccmp',
  components: {
    ChildComponent
  },
  template: `
    <div :style="style">
      <div class='ss'>
        <slot v-bind:tt="age"></slot>
        <child-component/>
      </div>
    </div>
    `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      age: 23
    }
  }
}

new Vue({
  el: '#rooter',
  data () {
    return {
      text: 233333
    }
  },
  provide () {
    const data = {}
    Object.defineProperty(data, 'value55', {
      get: () => this.text,
      enumerable: true
    })
    return {
      yeye: this,
      data
    }
  },
  components: {
    Comp: componentInstance1
  },
  template: `
    <div>
      <comp ref="comp">
        <span slot-scope="slotProps" ref="span">This is {{slotProps.tt}}</span>
      </comp>
      <input type="text" v-model="text"/>
    </div>
  `
})
