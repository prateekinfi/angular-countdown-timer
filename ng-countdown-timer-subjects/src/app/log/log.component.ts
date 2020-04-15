import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  logs : string[]= [];
  logvalue :string;

  constructor() { }

  ngOnInit(): void {
  }

}
