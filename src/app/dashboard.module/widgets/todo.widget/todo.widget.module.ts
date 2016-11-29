import { NgModule } from '@angular/core';
import { TodoWidgetComponent } from './todo.widget.component/todo.widget.component';
import { Widget } from '../../Widget.decorator';

@Widget({
  id: 'todo',
  name: 'Todo',
  component: TodoWidgetComponent,
  widths: [3]
})
@NgModule({
  declarations: [TodoWidgetComponent]
})
export class TodoWidgetModule { }
