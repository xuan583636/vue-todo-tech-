<template>
  <div>
    this is login page
    <div>
      <select v-model="selected">
        <option disabled value>请选择</option>
        <option v-for="option in options" :key="option.value">'"a"'</option>
      </select>
      <span>Selected: {{ selected }}</span>
      <input type="checkbox" v-model="toggle">
    </div>
    <div>
      <selfVModel :options="options" v-model="searchText"></selfVModel>
      <Test :options="options" v-model="inputText"></Test>
    </div>
    <div>ooo:{{searchText}}</div>
    <div>eee:{{inputText}}</div>
    <div>
      <new-inlin inline-template>
        <div>
          <p>These are compiled as the component's own template.{{newDate}}</p>
          <p>Not parent's transclusion content.{{selected}} oooo</p>
        </div>
      </new-inlin>
    </div>
    <test
      v-model="searchText"
      >
    </test>
    <div>ooo:{{inputText}}</div>
    <nm-test v-bind.sync="newOption"></nm-test>
    <p>智力： {{ newOption.wisdom }}</p>
    <p>攻击 {{ newOption.attack }}</p>
  </div>
</template>

<script>
import Test from './test.vue'
import NmTest from './nmTest.vue'
export default {
  data() {
    return {
      selected: 'A',
      toggle:'',
      inputText:'',
      searchText:'',
      syncValu:'',
      newOption: {
        wisdom:1,
        attack:99
      },
      options: [
        { value: "A", text: "One" },
        { value: "B", text: "Two" },
        { value: "C", text: "Three" }
      ],
      Tvalue: {}
    };
  },
  methods: {
    formalData() {
      const importData = data;
      const dataArray = [];
      let exg = /\(\(([^(((][^))]*)\)\)/g;
      importData.map(e => {
        const dataObject = {};
        dataObject.name = e.name;
        dataObject.code = e.code;
        const data = e.data.match(exg);
        const item=[];
        if(data){
          data.map(e => {
            e = this.trimAnyChar(this.trimAnyChar(e, "(",'left'), ")",'right');
            let newdata = e.split(', ').map(e=>e.split(' ')).reduce((pre,cur,index)=>{
              return pre.concat(cur)
            },[]);
            const arr = JSON.parse('[' + String(newdata) + ']')
            item.push(arr)
          });
        }
        dataObject.coords = item;
        dataArray.push(dataObject)
      })
      console.log(dataArray)
    },
    trimAnyChar(string, char, type) {
      if (char) {
        if (type == "left") {
          return string.replace(new RegExp("^\\" + char + "+", "g"), "");
        } else if (type == "right") {
          return string.replace(new RegExp("\\" + char + "+$", "g"), "");
        }
        return string.replace(
          new RegExp("^\\" + char + "+|\\" + char + "+$", "g"),
          ""
        );
      }
      return string.replace(/^\s+|\s+$/g, "");
    }
  },
  computed: {},

  watch: {
    searchText(newV,oldV){
      this.inputText = newV +1
      console.log(this.inputText)
    }
  },
  components:{
    Test,
    NmTest
  }
};
</script>
