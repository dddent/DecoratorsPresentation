import { NgModule } from '@angular/core';
import { ClockWidgetComponent } from './clock.widget.component/clock.widget.component';
import { Widget } from '../../Widget.decorator';
import { CommonModule } from '@angular/common';

@Widget({
  id: 'clock',
  name: 'Clock',
  component: ClockWidgetComponent,
  widths: [4]
})
@NgModule({
  declarations: [ClockWidgetComponent],
  imports: [CommonModule]
})
export class ClockWidgetModule { }
