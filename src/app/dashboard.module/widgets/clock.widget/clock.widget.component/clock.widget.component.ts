import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-clock-widget',
  templateUrl: './clock.widget.component.html',
  styleUrls: ['./clock.widget.component.css']
})
export class ClockWidgetComponent implements OnInit {
  public time = new Date();

  public ngOnInit(): void {
    setInterval(() => {
      this.time = new Date();
    }, 100);
  }
}
