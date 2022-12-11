<template>
  <div class="container">
    <SearchComponent/>
    <ListComponent/>
  </div>
</template>

<script>
import axios from 'axios'
import SearchComponent from "@/components/SearchComponent.vue";
import ListComponent from "@/components/ListComponent.vue";

export default {
  name: "App",
  components: {
    SearchComponent,
    ListComponent,
  },
  methods: {
    listStudent() {
      axios.get('/api/student/list').then(
          response => {
            console.log('request success', response.data)
          },
          error => {
            console.log('request fail', error.message)
          }
      )
    },
    listCar() {
      axios.get('/demo/car/list').then(
          response => {
            console.log('request success', response.data)
          },
          error => {
            console.log('request fail', error.message)
          }
      )
    }
  }

};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-edit {
  color: #fff;
  background-color: #5ac1b8;
  border: 1px solid #3b856e;
  margin-right: 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>