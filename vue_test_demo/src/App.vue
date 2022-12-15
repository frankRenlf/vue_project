<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--          原始使用a标签跳转多个页面,多页面应用-->
          <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a>

        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <h3>router - component</h3>
            <!--router-view确定视图的位置-->

          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import HomeComponent from "@/components/HomeComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";

export default {
  name: "App",
  components: {
    HomeComponent,
    AboutComponent
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {
    console.log('app', this)
  }

};
</script>

<style scoped>

</style>