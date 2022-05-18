import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang_demo2';
  flag = true
  @ViewChild('todolist') todilist:any

  get() {
    console.log(this.todilist.keyWords)
  }
  toggle() {
    this.flag = !this.flag
  }
}
