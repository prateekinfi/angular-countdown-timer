import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';
import { timer } from 'rxjs/internal/observable/timer';
import { takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css']
})
export class CountDownTimerComponent implements OnInit {

  constructor(private service : TimerService) { }
  isTimerActive = false;


  ngOnInit(): void {
  }
  updateState(timervalue){
    this.isTimerActive=!this.isTimerActive;

   timer(0,1).pipe(
      takeWhile(() => {return (timervalue > 0 && this.isTimerActive)}),
      tap(()=>timervalue--)
    ).subscribe(()=>{
      console.log(timervalue);
      this.service.emitter.next({"displayvalue": timervalue});
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

    this.service.emitter.next(eventObj)

  }

  reset(){
    this.service.emitter.next({"displayvalue": 0});
    this.service.emitter.next({
      startcount: 'reset',
      pausecount: 'reset',
      log: `reset`
    });
  }


}
