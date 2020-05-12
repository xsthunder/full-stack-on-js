import axios from 'axios'
var STORAGE_KEY = 'todos-vuejs-2.0'
var todoStorage = {
  fetch: function () {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return Promise.resolve(todos)
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    return Promise.resolve(todos)
  }
}
const URL = document.URL
const index = URL.lastIndexOf(':')
const api_url = URL.substr(0, index) + ':8088/todos'
const remoteStorage = {
    fetch: function(){
        return axios.get(api_url).then(
            (res)=>{
                const todos = res.data.res
                console.log(todos)
                todos.forEach(function (todo, index) {
                  todo.id = index
                })
                remoteStorage.uid = todos.length
                return todos
            }
        )
    } ,
  save: function (todos) {
	return axios.post(api_url, {todos})
  }
}
// export default todoStorage
export default remoteStorage
