<template>
  <div>
    <MySchool></MySchool>
    <StudentOne></StudentOne>
  </div>
</template>

<script>
import MySchool from "./components/School.vue";
import StudentOne from "./components/Student.vue";

export default {
  name: "App",
  components: {
    MySchool,
    StudentOne,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
