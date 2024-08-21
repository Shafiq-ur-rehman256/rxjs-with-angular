import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-from',
  standalone: true,
  imports: [],
  templateUrl: './from.component.html',
  styleUrl: './from.component.scss'
})
export class FromComponent implements OnInit {

  _observable: Observable<number> = from([1,3,5,8,7])


  ngOnInit(): void {
    console.log([1,3,5,8,7]);
      this._observable.subscribe((res) =>{
        console.log(res);
      })
  }


}
