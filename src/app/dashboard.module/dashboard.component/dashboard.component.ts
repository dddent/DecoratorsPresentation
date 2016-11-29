import {
  Component
} from '@angular/core';
import { dashboardDescription } from '../dashboardDescription';
import { IDashboardDescription } from '../IDashboardDescription';
import { IDashboardColDescription } from '../IDashboardColDescription';
import { getWidgetMetadatas } from '../Widget.decorator';
import { IWidgetMetadata } from '../IWidgetMetadata';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private _description: IDashboardDescription = dashboardDescription;
  private _isEditMode: boolean = false;
  private _metadatas = getWidgetMetadatas();

  public get name(): string {
    return this._description.name;
  }

  public get cols(): IDashboardColDescription[] {
    return this._description.cols;
  }

  public toggleEdit(): void {
    this._isEditMode = !this._isEditMode;
  }

  public get isEditMode(): boolean {
    return this._isEditMode;
  }

  public getMetadatas(width: number): IWidgetMetadata[] {
    return this._metadatas.filter((md) => {
      return md.widths.indexOf(width) > -1;
    });
  }

  public addWidget(col: IDashboardColDescription, metadata: IWidgetMetadata): void {
    if (metadata.widths.indexOf(col.width) > -1) {
      col.widgets.push({ id: metadata.id });
    }
  }
}
