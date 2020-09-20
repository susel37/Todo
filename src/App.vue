<template>
  <div id="app">
    <Input />
    <TaskHolder />
  </div>
</template>

<script>
import Input from '@/components/Input.vue'
import TaskHolder from '@/components/TaskHolder.vue'

export default {
  name: 'App',
  components: {
    Input, TaskHolder
  }
}
</script>

<style>
body {
  background-color: rgb(49, 199, 149);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>
