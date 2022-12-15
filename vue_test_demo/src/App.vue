<template>
  <div>
    <div class="row">
      <BannerComponent></BannerComponent>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--          原始使用a标签跳转多个页面,多页面应用-->
          <!--          <a class="list-group-item active" href="./about.html">About</a>-->
          <!--          <a class="list-group-item" href="./home.html">Home</a>-->
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>

        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <h3>router - component</h3>
            <!--router-view确定视图的位置-->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import BannerComponent from "@/components/BannerComponent.vue";


export default {
  name: "App",
  components: {

    BannerComponent
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