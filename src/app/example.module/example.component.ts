import { Component, OnInit } from '@angular/core';
import { validate, required } from '../shared/decorators';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  @validate()
  public greet(@required() text: string) {
    return text;
  }

}