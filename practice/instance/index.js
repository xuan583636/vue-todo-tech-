import Vue from 'vue'

const app = new Vue({
  // el: '#rooter',
  template: '<div ref="div">{{hhhh}} {{obj.a}}</div>',
  data: {
    hhhh: 0,
    obj: {}
  }
  // watch: {
  //   hhhh (newText, oldText) {
  //     console.log(`${newText}:${oldText}`)
  //   }
  // }
})
app.$mount('#rooter')
let i = 0
setInterval(() => {
  app.hhhh += 1
  app.$set(app.$data.obj, 'a', i)
  app.$delete()
  i++
}, 1000)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)
// app.$options.render = (h) => {
//   return h('div', {}, 'newkkkk')
// }
// console.log(app.$root)
// <item><div></div></item>
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer)
// const unwatch = app.$watch('hhhh', (newText, oldText)=>{
//   console.log(`${newText}:${oldText}`)
// })
// setTimeout(() => {
//   unwatch()
// }, 2000)
// app.$on('test', (a, b, c) => {
//   console.log(`test emited ${a},${b},${c}`)
// })
// app.$emit('test', 1, 2, 3)
