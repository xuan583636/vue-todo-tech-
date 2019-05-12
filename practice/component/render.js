import Vue from 'vue'

const ChildComponent = {
  template: `
    <div>Child Component: {{data.value55}}</div>
  `
}
const componentInstance1 = {
  props: ['prop11'],
  name: 'ccmp',
  components: {
    ChildComponent
  },
  // template: `
  //   <div :style="style">
  //       <slot></slot>
  //   </div>
  //   `,
  render (createElement) {
    return createElement(
      'div',
      {
        style: this.style
        // on: {
        //   click: () => this.$emit('clickddd')
        // }
      },
      [
        this.$slots.what,
        this.prop11
      ]
    )
  },
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
      text: 233333,
      ggg: 'jjjj'
    }
  },
  components: {
    Comp: componentInstance1
  },
  mounted () {
    console.log(this.$refs.span)
    console.log(this.$refs.comp.age)
  },
  methods: {
    handleClick () {
      console.log('Click!')
    }
  },
  // template: `
  //   <comp ref="comp">
  //     <span ref="span">This is {{text}}</span>
  //   </comp>
  // `,
  render (createElement) {
    return createElement(
      'comp',
      {
        ref: 'comp',
        props: {
          prop11: this.ggg
        },
        // on: {
        //   clickddd: this.handleClick
        // },
        nativeOn: {
          click: this.handleClick
        }
      },
      [
        createElement(
          'span',
          {
            ref: 'span',
            slot: 'what',
            attrs: {
              id: 'kk-id',
              class: 'kk-class'
            }
          },
          this.text
        )
      ])
  }

})
