<template>
  <div>
    <h2 v-text="msg"></h2>
    <hr/>
    <SchoolInfo/>
    <hr/>
    <StudentInfo/>
    <hr/>
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
};
</script>

<style>
</style>