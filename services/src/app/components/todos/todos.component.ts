import {Component, OnInit} from '@angular/core';
import {ITodos} from 'src/app/models/models';
import {TodoServices} from 'src/app/services/todoServices';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos!: ITodos[]
  title: string = ''
  description: string = ''

  constructor(private todosService: TodoServices) {}

  ngOnChanges(): void {
    this.todos = this.todosService.getTodos()
  }

  ngOnInit(): void {
    this.todos = this.todosService.getTodos()
  }


  onSave(): void {
    if (this.title || this.description) {
      this.todosService.saveTodo({title: this.title, description: this.description})
      this.title = ''
      this.description = ''
    }
  }
}
