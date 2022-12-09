<template>
  <div class="student">
    <h2>{{ name }}</h2>
    <h2 class="test">{{ age }}</h2>
    <button @click="add">age++</button>
    <button @click="sendData">send</button>
    <button @click="rem">off</button>
  </div>
</template>
<script>
export default {
  name: "StudentInfo",
  data() {
    return {
      name: "frank",
      age: 2,
    };
  },
  methods: {
    add() {
      this.age++;
    },
    sendData() {
      this.$emit('denote', this.age)
    },
    rem() {
      this.$off(['denote'])
    }
  },
  mounted() {
    console.log(this.age)
    setTimeout(()=>{
      this.$emit('denote', this.age)
    },20)
  }
};
</script>

<style lang="less" scoped>
.student {
  background-color: orange;

  .test {
    font-size: 40px;
  }
}
</style>