import Vue from 'vue'

const app = new Vue({
  el: '#rooter',
  // template: '<div>{{text}}</div>',
  data: {
    text: 0
  },
  beforeCreate () {
    console.log(this.$el, 'beforeCreate')
  },
  created () {
    console.log(this.$el, 'created')
  },
  beforeMount () {
    console.log(this.$el, 'beforeMount')
  },
  mounted () {
    console.log(this.$el, 'mounted')
  },
  beforeUpdate () {
    console.log(this, 'beforeUpdate')
  },
  updated () {
    console.log(this, 'updated')
  },
  activated () {
    console.log(this, 'activated')
  },
  deactivated () {
    console.log(this, 'deactivated')
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },
  destroyed () {
    console.log(this, 'destroyed')
  },
  render (h) {
    console.log('render')
    throw new TypeError('cuowu')
    // return h('div', {}, this.text)
  },
  renderError (h, err) {
    return h('div', {}, err.stack)
  }
})

// setInterval(() => {
//   app.text = app.text += 1
// }, 1000)

setTimeout(() => {
  app.$destroy()
}, 1000)
