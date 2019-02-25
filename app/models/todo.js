

export default class Todo {
  constructor(data) {
    this.description = data.description
    this._id = data._id
    this.completed = data.completed
  }




  getTemplate() {
    return `
   <div class="card-transparent text-white sweet-card">
   <div class="card-block special-card"</div>
  <div class="card-body">
    <h5 class="card-title awesome-card ${this.completed ? 'strikeout' : ''} " >${this.description}</h5>
    <div class="custom-control custom-checkbox">
				<input  id="${this._id}" type="checkbox" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')" ${this.completed ? 'checked' : ''} class="custom-control-input">
				<label class="custom-control-label style-it" for="${this._id}">Completed</label>
      </div >
      <button type="button" class="btn btn-outline-light btn-sm" onclick="app.controllers.todoController.removeTodo('${this._id}')">Delete</button>
  </div >
</div > `
  }

}