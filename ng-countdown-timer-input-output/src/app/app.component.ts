import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-countdown-timer';

  log;
  startcount;
  pausecount;
  display=0;

  update(target){
    this.log= target.log;
    this.startcount= target.startcount;
    this.pausecount= target.pausecount;
  }
  updateDisplay(target){
    
    this.display= target;
  }
}
