import { IWidgetMetadata } from './IWidgetMetadata';
import { IWidgetInfo } from './IWidgetInfo';
import { Type } from '@angular/core';

export const widgetMetadataKey = Symbol('widgetMetadata');

let widgets: { [id: string]: IWidgetInfo } = {};

export function Widget(metadata: IWidgetMetadata) {
  return (target: Type<any>) => {
    widgets[metadata.id] = { metadata: metadata, module: target };
  };
}

export function getWidgetInfo(id: string): IWidgetInfo {
  return widgets[id];
}

export function getWidgetMetadatas(): IWidgetMetadata[] {
  let res: IWidgetMetadata[] = [];

  for (let id in widgets) {
    if (widgets.hasOwnProperty(id)) {
      res.push(widgets[id].metadata);
    }
  }

  return res;
}
