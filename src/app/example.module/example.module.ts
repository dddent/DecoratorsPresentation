import { NgModule } from '@angular/core';
import { ExampleComponent } from './example.component';
import { Widget } from '../dashboard.module/Widget.decorator';

@Widget({
  id: 'example',
  name: 'Example',
  component: ExampleComponent,
  widths: [3]
})
@NgModule({
  declarations: [ExampleComponent],
  exports: [ExampleComponent]
})
export class ExampleModule { }
