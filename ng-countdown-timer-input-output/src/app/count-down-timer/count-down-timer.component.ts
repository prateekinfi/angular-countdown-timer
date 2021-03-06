import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';
import { takeWhile, tap } from 'rxjs/operators';


@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css']
})
export class CountDownTimerComponent implements OnInit {

  @Output() evtemitter;
  @Output() displayemitter;

  isTimerActive = false;

  constructor() { 
    this.evtemitter = new EventEmitter();
    this.displayemitter = new EventEmitter();

  }

  ngOnInit(): void {
  }

  updateState(timervalue :number){
    this.isTimerActive=!this.isTimerActive;

   timer(0,1).pipe(
      takeWhile(() => {return (timervalue > 0 && this.isTimerActive)}),
      tap(()=>timervalue--)
    ).subscribe(()=>{
      console.log(timervalue);
      this.displayemitter.emit(timervalue);
    })

    let action = (this.isTimerActive) ? "started" : "paused";
    var d = new Date();
    var time = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
    d.getHours() + ":" + d.getMinutes();
    let count = (this.isTimerActive) ? "startcount" : "pausecount";
    let eventObj ={
      startcount: 0,
      pausecount: 0,
      log: `${action} at ${time}`
    };
    eventObj[count]++

    this.evtemitter.emit(eventObj);

  }
  
  reset(){

    this.displayemitter.emit(0);
    this.evtemitter.emit({
      startcount: 'reset',
      pausecount: 'reset',
      log: `reset`
    });


  }
}
