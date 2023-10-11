import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { AddTodoService } from './app.service';
import { AddTodoComponent } from './createdComponents/add-todo/add-todo.component';
import { TodoItemsComponent } from './createdComponents/todo-items/todo-items.component';
import { ToDosComponent } from './createdComponents/todos/todos.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ToDosComponent,
    TodoItemsComponent,
    AddTodoComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AddTodoService],
})
export class AppModule {}
