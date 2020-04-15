import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  emitter = new Subject();
  constructor() { }
  
}
