import {
  Component,
  Input,
  Compiler,
  ViewContainerRef,
  AfterViewInit,
  ModuleWithComponentFactories,
  ComponentFactory,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import { getWidgetInfo } from '../Widget.decorator';

@Component({
  selector: 'app-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.css']
})
export class WidgetContainerComponent implements AfterViewInit {
  @Input() public widgetId: string;
  @Input() public editMode: boolean = false;

  @Output('onRemove') public removeEmitter = new EventEmitter<void>();

  @ViewChild('widgetContainer', { read: ViewContainerRef }) public widgetContainer: ViewContainerRef;

  private _isNotFoundError: boolean = false;
  private _isCompileError: boolean = false;

  constructor(
    private compiler: Compiler,
    private viewContainerRef: ViewContainerRef
  ) { }

  public ngAfterViewInit(): void {
    let info = getWidgetInfo(this.widgetId);

    if (!info) {
      this._isNotFoundError = true;
      return;
    }

    this.compiler.compileModuleAndAllComponentsAsync(info.module)
      .then((mod: ModuleWithComponentFactories<any>) => {
        let factory = mod.componentFactories.find((cf: ComponentFactory<any>) => {
          return cf.componentType === info.metadata.component;
        });

        this.widgetContainer.createComponent(factory);
      })
      .catch((err) => {
        console.error(err.message);
        this._isCompileError = true;
      });
  }

  public remove(): void {
    this.removeEmitter.emit();
  }

  public get isNotFoundError(): boolean {
    return this._isNotFoundError;
  }

  public get isCompileError(): boolean {
    return this._isCompileError;
  }

  public get isError(): boolean {
    return this._isNotFoundError || this._isCompileError;
  }
}
