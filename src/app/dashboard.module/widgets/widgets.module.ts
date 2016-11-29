import { NgModule } from '@angular/core';
import { ClockWidgetModule } from './clock.widget/clock.widget.module';
import { TodoWidgetModule } from './todo.widget/todo.widget.module';

@NgModule({
  imports: [
    ClockWidgetModule,
    TodoWidgetModule
  ]
})
export class WidgetsModule { }
