<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search"
             v-model="keyWord"
             @keydown.enter="searchUsers"/>&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchComponent",
  data() {
    return {
      keyWord: '',
    }
  },
  methods: {
    searchUsers() {
      this.$root.$emit('listData', {
        isFirst: false,
        isLoading: true,
        errMsg: '',
        users: []
      })
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response => {
            // console.log(response.data)
            this.$root.$emit('listData', {
              isLoading: false,
              errMsg: '',
              users: response.data.items
            })
          },
          error => {
            this.$root.$emit("listData", {
              isLoading: false,
              errMsg: error.message,
              users: []
            });
          }
      )
    }
  }
}
</script>

<style scoped>

</style>