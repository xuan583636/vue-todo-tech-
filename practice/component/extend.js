import Vue from 'vue'

const componentInstance1 = {
  props: {
    propOne: String
  },
  beforeMount () {
    console.log('cmp1 beforemounted')
  },
  mounted () {
    console.log('cmp1 mounted')
  },
  template: `
    <div>
      <input type='text' v-model.number="text">
      <span>{{propOne}}</span>
    </div>
    `,
  data () {
    return {
      text: 0
    }
  }
}

const newParent = new Vue({
  name: 'Parent'
})

const componentInstance2 = {
  extends: componentInstance1,
  data () {
    return {
      text: 'cdsdsc'
    }
  },
  beforeMount () {
    console.log('cmp2 beforemounted')
  },
  mounted () {
    console.log('cmp2 mounted')
    this.$parent.text = 1122334455
  }
}

new Vue({
  parent: newParent,
  name: 'ddd',
  el: '#rooter',
  data: {
    text: 233333
  },
  components: {
    Comp: componentInstance2
  },
  mounted () {
    console.log(this.$parent.$options.name)
  },
  template: `
    <div>
      <span>{{text}}</span>
      <comp></comp>
    </div>
  `
})

// const CompVue = Vue.extend(componentInstance)

// new CompVue({
//   el: '#rooter',
//   propsData: {
//     propOne: 'sss'
//   },
//   data: {
//     text: '1099'
//   },
//   beforeMount () {
//     console.log('instance beforemounted')
//   },
//   mounted () {
//     console.log('instance mounted')
//   }
// })
