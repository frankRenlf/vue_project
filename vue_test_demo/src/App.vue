<template>
  <div>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
import HeaderElement from "@/components/HeaderElement.Vue";
import ListElement from "@/components/ListElement.Vue";
import FooterElement from "@/components/FooterElement.Vue";
export default {
  name: "App",
  components: {
    HeaderElement,
    ListElement,
    FooterElement,
  },
  data() {
    return {
      msg: "welcome to todolist vue",
    };
  },
  methods: {
    showDOM() {
      console.log(this.$refs.info);
    },
  },
};
</script>

<style>
</style>