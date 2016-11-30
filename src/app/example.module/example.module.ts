import { NgModule } from '@angular/core';
import { ExampleComponent } from './example.component';
import { Widget } from '../dashboard.module/Widget.decorator';

@Widget({
  id: 'example',
  name: 'Example Widget',
  component: ExampleComponent,
  widths: [3, 4]
})
@NgModule({
  declarations: [ExampleComponent],
  exports: [ExampleComponent]
})
export class ExampleModule { }
