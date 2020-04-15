import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-counts',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.css']
})
export class CountsComponent implements OnInit {

  pausecount = 0;
  startcount = 0;
  pausecountvalue;
  startcountvalue;

  constructor(private service: TimerService) { }

  ngOnInit(): void {
    this.service.emitter.subscribe((e: Object) => {
      if (!e.hasOwnProperty('displayvalue')) {
        
          if (e['startcount'] == 'reset')
          {
            this.startcount=0;
            this.pausecount=0;
          }else if (e['pausecount'])
          this.pausecount++;
          else if (e['startcount'])
          this.startcount++;
        
      }
    })
  }

}
