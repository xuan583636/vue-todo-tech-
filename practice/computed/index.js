import Vue from 'vue'

new Vue({
  el: '#rooter',
  template: `
    <div>
      <p>Name:{{name}}</p>
      <p>Number:{{number}}</p>
      <p>fullName:{{fullName}}</p>
      <p><input type='text' v-model="number"></p>
      <p>firstName:<input type='text' v-model="firstName"></p>
      <p>lastName:<input type='text' v-model="lastName"></p>
      <p>Name:<input type='text' v-model="name"></p>

    </div>
    `,
  data: {
    firstName: 'Jocky',
    lastName: 'Lou',
    number: 0,
    fullName: '',
    name: ''
  },
  watch: {
    firstName (newName, oldName) {
      this.fullName = newName + '' + this.lastName
    }
  }
})
