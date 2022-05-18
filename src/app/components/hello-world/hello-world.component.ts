import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios'
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  msg:string = 'Hello World'

  title:string = '提示信息'

  arr = ['a','b','c','d','e']

  flag:boolean = true

  date:any = new Date()

  keywords:string = 'test'

  name:any = ''

  sub:any = ''

  constructor(public serve:StorageService,public http:HttpClient) { 
    
  }

  ngOnInit(): void {
    // this.name = this.serve.get().subscribe((res:any)=>{
    //   console.log(res)
    // })
    // this.http.get('http://a.itying.com/api/productlist').subscribe((res)=>{
    //   console.log(res)
    // })

    // const HttpOption = {
    //   headers: new HttpHeaders({'Content-Type': 'application/json'})
    // }
    // this.http.post('http://a.itying.com/api/productlist',{name: '张三'},HttpOption).subscribe((res)=>{
    //   console.log(res)
    // })

    // this.http.jsonp('http://a.itying.com/api/productlist','callback').subscribe((res)=>{
    //   console.log(res,'jsonp')
    // })
    axios.get('http://a.itying.com/api/productlist').then((res:any)=>{
    console.log(res.data)
    })
  }

  unsub() {
    // this.name.unsubscribe()
  }

  handler() {
    alert('Hello World')
  }

  keyDown(e:any) {
    console.log(e)
  }
}
