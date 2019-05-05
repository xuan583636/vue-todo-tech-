import Vue from 'vue'

new Vue({
  el: '#rooter',
  template: `
    <div>
      <p>Obj.a:<input type='text' v-model="obj.a"></p>
    </div>
    `,
  data: {
    firstName: 'Jocky',
    lastName: 'Lou',
    number: 0,
    fullName: '',
    obj: {
      a: '123'
    }
  },
  watch: {
    'obj.a': {
      handler (newValue, oldValue) {
        console.log('obj.a')
      },
      immediate: true,
      deep: true
    }
  }
})
