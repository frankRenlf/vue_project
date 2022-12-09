<template>
  <div>
    <h2 v-text="msg" ref="info"></h2>
    <h2>stu: {{ stu }} </h2>
    <button @click="showDOM">click</button>
    <hr/>
    <SchoolInfo :passByProps="passByProps"/>
    <hr/>
    <StudentInfo @denote="receiveData"/>
    <hr/>
    <StudentInfo ref="student" @click.native="show"/>
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
      stu: ''
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
    },
    show(){
      alert(111)
    }
  },
  mounted() {
    this.$refs.student.$on('denote', (val) => {
      console.log(val)
      console.log(this)
      this.stu = val
    })
  }
};
</script>

<style>
</style>