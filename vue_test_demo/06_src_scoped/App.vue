<template>
  <div>
    <h2 v-text="msg" ref="info"></h2>
    <button @click="showDOM">click</button>
    <hr />
    <SchoolInfo />
    <hr />
    <StudentInfo />

    <!-- <ElementOne /> -->
  </div>
</template>

<script>
import StudentInfo from "./components/StudentInfo.vue";
import SchoolInfo from "./components/SchoolInfo.vue";
export default {
  name: "App",
  components: {
    StudentInfo,
    SchoolInfo,
  },
  data() {
    return {
      msg: "welcome to learn vue",
    };
  },
  methods: {
    showDOM() {
      console.log(this.$refs.info);
    },
  },
};
</script>

<style>
</style>