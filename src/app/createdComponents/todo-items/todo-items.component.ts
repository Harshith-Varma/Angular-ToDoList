import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
})
export class TodoItemsComponent implements OnInit {
  constructor() {}
  @Input() public todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  onClickPerform(todo: Todo) {
    this.todoDelete.emit(this.todo);
    console.log('Triggered');
  }
  ngOnInit() {
    console.log('todo-items component has been initiated.');
  }
}
