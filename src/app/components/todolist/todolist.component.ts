import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  keyWords = ''
  list:any = []

  @ViewChild('conent') conent:any

  constructor(public storage:StorageService) { 
    this.storage.get()
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    // this.conent.nativeElement.style.backgroundColor = 'blue'
    
  }

  add() {
    if(!this.keyWords) {
      alert('不能为空')
    } else {
      this.list.push(this.keyWords)
    }
  }

  del(key:any) {
    this.list.splice(key,1)
  }

}
