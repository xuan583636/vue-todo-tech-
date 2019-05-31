<template>
  <div>
    <p>智力： {{ wisdom }}</p>
    <p>攻击： {{ attack }}</p>
    <button @click="addWisdom">增加智力</button>
    <button @click="addAttack">增加攻击</button>
  </div>
</template>

<script>
export default {
  props:{
    wisdom:Number,
    attack:Number
  },
  data(){
    return {
      newWisdom:this.wisdom,
      newAttack:this.attack
    }
  },
  methods: {
    addWisdom() {
      ++this.newWisdom
      const value = this.newWisdom
      this.$emit('update:wisdom',value)
    },
    addAttack() {
      ++this.newAttack
      const value = this.newAttack
      this.$emit('update:attack',value)
    }
  },
}
</script>
