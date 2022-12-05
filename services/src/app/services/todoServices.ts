import { ILinks, ITodos } from "../models/models"


export class TodoServices {
  private _todos = [
    {title: 'Do Design', description: 'This is description'},
  ]

  constructor() {}

  getTodos() {
    return this._todos
  }

  saveTodo(data: ITodos) {
     this._todos.push(data)
  }
}
