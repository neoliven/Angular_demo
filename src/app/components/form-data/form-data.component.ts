import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  data = {
    name: '',
    sex: '',
    cities: '深圳',
    hobby: '',
    textarea: ''
  }
  constructor() { }

  ngOnInit(): void {
  }
  getData() {
    console.log(this.data)
  }
}
