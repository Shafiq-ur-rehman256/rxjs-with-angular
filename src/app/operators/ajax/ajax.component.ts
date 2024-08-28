import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
@Component({
  selector: 'app-ajax',
  standalone: true,
  imports: [],
  templateUrl: './ajax.component.html',
  styleUrl: './ajax.component.scss'
})
export class AjaxComponent implements OnInit{

  _observable = ajax.getJSON(`https://api.github.com/error`)
  ngOnInit(): void {
   
    this._observable.subscribe((res)=> {
      console.log(res);
    }, error => {
      console.log(error.message);
    })
    
  }

}
