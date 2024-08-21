import { Component, OnInit } from '@angular/core';
import { Observable, range } from 'rxjs';

@Component({
  selector: 'app-rang',
  standalone: true,
  imports: [],
  templateUrl: './rang.component.html',
  styleUrl: './rang.component.scss'
})
export class RangComponent implements OnInit {

  _observable: Observable<number> = range(1,100);


  ngOnInit(): void {
      this._observable.subscribe((res)=> {
        console.log(res);
      })
  }


}
