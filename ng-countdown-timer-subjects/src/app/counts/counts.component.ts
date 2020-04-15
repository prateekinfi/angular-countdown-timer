import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
