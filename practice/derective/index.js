import Vue from 'vue'

new Vue({
  el: '#rooter',
  template: `
    <div >
      <ul>
        <li v-for="(item,index) in arr" :key="index" v-pre>{{item}}:{{index}}</li>
      </ul>
      <div v-on:click="handleClick" v-once>{{word}}</div>
      <input text="text" v-model="word"></input>
      <input type="checkbox" v-model="active"></input>
      <div>
        <input type="checkbox" value="1" v-model="arr"></input>
        <input type="checkbox" value="2" v-model="arr"></input>
        <input type="checkbox" value="3" v-model="arr"></input>
      </div>
      <div>
        <input type="radio" value="one" v-model="picked"></input>
        <input type="radio" value="two" v-model="picked"></input>
      </div>
      <ul>
        <li v-for="(val,key,index) in obj" :key="index">{{val}}:{{key}}:{{index}}</li>
      </ul>
    </div>
    `,
  data: {
    text: 0,
    active: false,
    dom: '<em>kkkkkk</em>',
    newt: 'eeeeeee',
    obj: {
      a: 123,
      b: 456,
      c: 789
    },
    picked: '',
    word: 'mm',
    arr: [100, 104, 103]
  },
  methods: {
    handleClick () {
      console.log('click')
    }
  },
  watch: {
    word (newvalue, oldValue) {
      console.log(newvalue)
    }
  }
})
