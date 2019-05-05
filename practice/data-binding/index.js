import Vue from 'vue'

new Vue({
  el: '#rooter',
  template: `
    <div :class="[{active:isActive}]"
         :style="[styles1,styles2]" 
    >
      <p>{{getJoinArr(arr)}}</p>
    </div>
    `,
  data: {
    isActive: true,
    arr: [1, 2, 3],
    html: '<span>ddd</span>',
    aq: 'ncskk',
    styles1: {
      color: 'red',
      appearance: 'none'
    },
    styles2: {
      color: 'blue'
    }
  },
  methods: {
    handleClick () {
      alert('clicket') //eslint-disable-line
    },
    getJoinArr (item) {
      return item.join('')
    }
  }
})
