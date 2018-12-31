import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// if homepage is true don't show nav
export class AppComponent {
  title = 'workoutAppAngular';
  // homepage = true;
}
