import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timer = {
    logs: [],
    displayValue: 0,
    startCount: 0,
    pauseCount: 0,
  }
  emitter = new Subject();
  constructor() { }

  reset(){
    this.timer.logs=[];
    this.timer.startCount=0;
    this.timer.pauseCount=0;
    this.timer.displayValue=0;
    this.emitData();
  }
  updateLogs(isTimerActive) {
    var d = new Date();
    var time = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
    d.getHours() + ":" + d.getMinutes();
    let action = (isTimerActive) ? "started" : "paused";
    this.timer.logs.push(`${action} at ${time}`);
    this.emitData();
  }

  updateCounts(isTimerActive) {
    let count = (isTimerActive) ? "startCount" : "pauseCount";
    this.timer[count]++;
    this.emitData();
  }

  updateDisplay(timervalue) {
    this.timer.displayValue = timervalue;
    this.emitData();
  }
  emitData() {
    this.emitter.next(this.timer);
  }

}
