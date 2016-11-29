import { Type } from '@angular/core';
import { IWidgetMetadata } from './IWidgetMetadata';

export interface IWidgetInfo {
  metadata: IWidgetMetadata;
  module: Type<any>;
}