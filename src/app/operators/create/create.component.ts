import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit {

  noteArr: string[] = ['Welcome ', 'Back To ', 'CodeCraftJs'];
  noteStr: string = ''

  noteObservable: Observable<any> = Observable.create((observer: any) => {
    let currentIndex = 0;
    let noteInterval = setInterval(() => {
      
      if (currentIndex <= this.noteArr.length - 1) {
        
        observer.next(this.noteArr[currentIndex]);
        currentIndex++;

      }else{
        clearInterval(noteInterval);
      }

    }, 1000);
  })
  // _observable: Observable<any> = Observable.create((observer:any) =>{

  //   observer.next(1)
  //   observer.next(2)
  //   observer.next(3)

  // }

  // )
  ngOnInit(): void {
    
    this.noteObservable.subscribe((ele) =>{
      this.noteStr += ele
    })

    // this._observable.subscribe((res) =>{
    //   console.log(res);
    // })

  }

}
