import { Injectable } from '@angular/core';
import { Todo } from './Todo';

@Injectable()
export class AddTodoService {
  todoList: Todo[];
  addTodo(todo: Todo) {
    console.log(todo);
    this.todoList.push(todo);
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
}
