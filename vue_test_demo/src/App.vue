<template>
  <div>
    <h2 v-text="msg" ref="info"></h2>
    <button @click="showDOM">click</button>
    <StudentInfo
      name="frank"
      gender="male"
      address="hz"
      :age="18 + 1"
      ref="eo"
    />
    <!-- <ElementOne /> -->
  </div>
</template>

<script>
import StudentInfo from "./components/StudentInfo.vue";
export default {
  name: "App",
  components: {
    StudentInfo,
  },
  data() {
    return {
      msg: "welcome to learn vue",
    };
  },
  methods: {
    showDOM() {
      console.log(this.$refs.eo);
    },
  },
};
</script>

<style>
</style>