<template>
  <div class="student">
    <h2>{{ name }}</h2>
    <h2 class="test">{{ age }}</h2>
    <button @click="add">age++</button>
    <button @click="sendData">send</button>
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
    sendData(){
      this.$emit('denote',this.name)
    }
  },
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