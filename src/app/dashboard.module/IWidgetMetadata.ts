import { Type } from '@angular/core';

export interface IWidgetMetadata {
  id: string;
  name: string;
  component: Type<any>;
  widths: number[];
}