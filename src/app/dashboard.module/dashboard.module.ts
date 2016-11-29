import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component/dashboard.component';
import { WidgetContainerComponent } from './widget-container.component/widget-container.component';
import { CommonModule } from '@angular/common';
import { WidgetsModule } from './widgets/widgets.module';

@NgModule({
  declarations: [
    DashboardComponent,
    WidgetContainerComponent
  ],
  imports: [
    CommonModule,
    WidgetsModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
