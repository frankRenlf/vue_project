<template>
  <div class="category">
    <div class="container">
      <CategoryComponent title="美食">
        <img src="https://avatars.githubusercontent.com/u/89248496?s=400&u=fca6dcbb2917ad143245a2c2fb53df98fa72fabc&v=4"
             alt="delicious food"/>
      </CategoryComponent>

      <CategoryComponent title="游戏" :listData="games">
        <ul>
          <li v-for="(g , index) in games" :key="index">{{ g }}</li>
        </ul>
      </CategoryComponent>

      <CategoryComponent title="电影">
        <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
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