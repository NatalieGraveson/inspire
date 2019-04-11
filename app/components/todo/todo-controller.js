import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	//WHAT IS MY PURPOSE?
	let todos = _todoService.todo
	let template = ''
	todos.forEach(todo => {
		template += todo.getTemplate()

	});
	document.getElementById('todos').innerHTML = template
}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	//document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}

function draw() {
	let numOfTasks = _todoService.numTodo
	document.getElementById('tasks').innerHTML = numOfTasks + ' ' + 'items to do'
}





export default class TodoController {
	constructor() {
		_todoService.addSubscriber('error', _drawError)
		_todoService.getTodos()
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.addSubscriber('todos', draw)
		_todoService.numTodo


		// Don't forget to add your subscriber
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			description: form.description.value
			// DONT FORGET TO BUILD YOUR TODO OBJECT
		}

		_todoService.addTodo(todo)
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}



}
