
var STORAGE_KEY = 'todos-vuejs-2.0'
var todoStorage = {
  fetch: function () {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return Promise.reslve(todos)
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    return Promise.reslve(todos)
  }
}
export default todoStorage
