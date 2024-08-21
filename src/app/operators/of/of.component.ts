import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-of',
  standalone: true,
  imports: [],
  templateUrl: './of.component.html',
  styleUrl: './of.component.scss'
})
export class OfComponent implements OnInit {

  _observable: Observable<string> = of(
    'Order placed!',
    'payment processed!',
    'order completed!'
  )


  ngOnInit(): void {
    
    this._observable.subscribe((res)=>{
       console.log(res);
    })

  }

}
