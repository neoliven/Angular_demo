import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ch2',
  templateUrl: './ch2.component.html',
  styleUrls: ['./ch2.component.css']
})
export class Ch2Component implements OnInit {

  @Input() list:any
  @Input() all:any

  @Output() private outer = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    console.log(this.all)
  }
  
  handler() {
    this.outer.emit('子组件数据')
  }

}
