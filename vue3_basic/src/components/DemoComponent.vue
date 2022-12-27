<template>
  <div class="demo">
    <h3>demo</h3>
    <input type="text" v-model="content" @keydown.enter="add(content)">
    <div v-for="e in $store.state.listAbout.list" :key="e.id">
      {{ e }}
    </div>
    <child-component></child-component>
  </div>

</template>

<script>
import {computed, reactive, ref} from "vue";
import {mapActions, useStore} from 'vuex'
import ChildComponent from "@/components/ChildComponent.vue";

export default {
  name: "DemoComponent",
  components: {
    ChildComponent
  },
  setup() {
    const store = useStore()  // 该方法用于返回store 实例
    console.log(store)
    let content = ref('')

    // console.log(...mapActions('listAbout', ['add']))
    function add(value) {
      store.dispatch('listAbout/add', value)
    }

    return {
      // ...mapActions('listAbout', ['add']),
      content, add
    }
  }
}
</script>

<style scoped>
.demo {
  background-color: gray;
  padding: 10px;
}
</style>