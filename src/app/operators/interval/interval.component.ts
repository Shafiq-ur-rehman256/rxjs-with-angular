import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-interval',
  standalone: true,
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss'
})
export class IntervalComponent {

  _intervalObs: Observable<number> = interval(1000);


  constructor(){
    this._intervalObs.subscribe((res)=> {
      console.log(res);
    })
  }

}
