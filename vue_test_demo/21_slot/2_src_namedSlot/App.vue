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

      <CategoryComponent title="游戏" :listData="games">
        <template v-slot:main>
          <ul>
            <li v-for="(g , index) in games" :key="index">{{ g }}</li>
          </ul>
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
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
    }
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