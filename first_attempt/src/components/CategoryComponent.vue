<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!--插槽,等着组件的使用者进行填充-->
    <slot name="main" :games="games" msg="frank">main area</slot>
<!--    <slot name="footer">footer area</slot>-->
  </div>
</template>

<script>
export default {
  name: "CategoryComponent",
  props: ['listData', 'title'],
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
    }
  }
}
</script>

<style scoped>
.category {
  background: skyblue;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
  background: orange;
}

img {
  width: 100%;
}
</style>