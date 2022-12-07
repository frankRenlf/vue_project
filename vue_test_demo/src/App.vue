<template>
  <div>
    <h2 v-text="msg" ref="info"></h2>
    <button @click="showDOM">click</button>
    <hr/>
    <SchoolInfo :passByProps="passByProps"/>
    <hr/>
    <StudentInfo @denote="receiveData"/>
    <hr/>
    <StudentInfo ref="student"/>
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
    receiveData(val) {
      console.log(val)
    },
    passByProps(val) {
      console.log(val)
    }
  },
  mounted() {
    this.$refs.student.$on('student2', this.passByProps)
  }
};
</script>

<style>
</style>