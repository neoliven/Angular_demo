import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  list:Array<object> = [
    {
      name: '小王'
    },
    {
      name: '小张'
    },
    {
      name: '小李'
    },
]
  constructor() { }

  ngOnInit(): void {
  }
  get() {
    alert('父组件方法')
  }
  outer(e:any) {
    console.log(e)
  }
}
