<template>
  <div class="demo">
    <h3>demo</h3>
    <ul>
      <li v-for="e in $store.state.list" :key="e.id">
        {{e}}
      </li>
    </ul>
    <child-component></child-component>
  </div>

</template>

<script>
import {computed, reactive} from "vue";
import {mapState} from "vuex";
import ChildComponent from "@/components/ChildComponent.vue";

export default {
  name: "DemoComponent",
  components: {
    ChildComponent
  },
  setup() {
    let list = computed({
      get() {
        return mapState('list', ['list'])
      },
      set(value) {
      }
    })
    return {

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