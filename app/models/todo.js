

export default class Todo {
  constructor(data) {
    this.description = data.description
    this._id = data._id
    this.completed = data.completed
    this.tasks = 0
  }




  getTemplate() {
    return `
   <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title ${this.completed ? 'strikeout' : ''} " >${this.description}</h5>
    <div class="custom-control custom-checkbox">
				<input  id="${this._id}" type="checkbox" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')" ${this.completed ? 'checked' : ''} class="custom-control-input">
				<label class="custom-control-label" for="${this._id}">Check this custom checkbox</label>
      </div >
      <button type="button class=" btn btn-outline-dark onclick="app.controllers.todoController.removeTodo('${this._id}')">Delete</button>
  </div >
</div > `
  }

}