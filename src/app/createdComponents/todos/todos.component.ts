import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { AddTodoService } from '../../app.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class ToDosComponent implements OnInit {
  todoList: Todo[];
  localItems: string;
  constructor(private addTodoService: AddTodoService) {
    this.localItems = localStorage.getItem('todoList');
    if (this.localItems == null) {
      this.todoList = [];
    } else {
      this.todoList = JSON.parse(this.localItems);
    }
  }
  deleteToDo(todo: Todo) {
    console.log(todo);
    const deleteIndex = this.todoList.indexOf(todo);
    this.todoList.splice(deleteIndex, 1);
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todoList.push(todo);
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  ngOnInit() {
    console.log('todos.component has been initiated.');
  }
}
