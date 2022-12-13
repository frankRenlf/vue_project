<template>
  <div class="category">
    <div class="container">
      <CategoryComponent title="美食">
        <template v-slot:main>
          <img
              src="https://avatars.githubusercontent.com/u/89248496?s=400&u=fca6dcbb2917ad143245a2c2fb53df98fa72fabc&v=4"
              alt="delicious food"/>
        </template>
        <template v-slot:footer>
          <a href="https://baidu.com">baidu</a>
        </template>

      </CategoryComponent>

      <CategoryComponent title="游戏">
        <template v-slot:main="data">
          <ul>
            <li v-for="(g , index) in data.games" :key="index">{{ g }}</li>
          </ul>
          <h4>{{ data.msg }}</h4>
        </template>
        <template v-slot:footer>
          <a href="https://baidu.com">baidu</a>
          <a href="https://baidu.com">baidu</a>
        </template>
      </CategoryComponent>

      <CategoryComponent title="电影">
        <template v-slot:main>
          <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
        </template>
        <template v-slot:footer>
          <a href="https://baidu.com">baidu</a>
          <a href="https://baidu.com">baidu</a>
          <a href="https://baidu.com">baidu</a>
        </template>

      </CategoryComponent>
    </div>
  </div>
</template>

<script>

import CategoryComponent from "@/components/CountComponent.vue";

export default {
  name: "App",
  components: {
    CategoryComponent
  },
  data() {
    return {}
  },
  methods: {}

};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}

video {
  width: 100%;
}

img {
  width: 100%;
}
</style>