<template>
  <div id="app">
    <HelloWorld msg="hello world from App"/>
	<TodoList/>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    TodoList,
	HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
