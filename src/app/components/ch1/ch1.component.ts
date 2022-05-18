import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ch1',
  templateUrl: './ch1.component.html',
  styleUrls: ['./ch1.component.css']
})
export class Ch1Component implements OnInit {

  @Input() list:any
  @Input() get:any
  @Input() msg:any
  constructor() { }

  ngOnInit(): void {
    // this.get()
  }

}
