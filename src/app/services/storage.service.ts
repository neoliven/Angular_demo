import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  get() {
    return new Observable(Observer => {
      setTimeout(() => {
        let arr = [0,1,2,3,4,5,6,7,8,9]
        Observer.next(arr)
      }, 1000);
    })
  }
}
