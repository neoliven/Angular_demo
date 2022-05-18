import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  val = ''
  newVal = ''
  @Input() msg:any
  constructor() { }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('1 ngOnChanges执行了---当被绑定的输入属性的值发生变化时调用(父子组件传值的时候会触发)')
  }
  ngOnInit(): void {
    console.log('2 ngOnInIt执行了---请求数据一般放在这里')
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('3 ngDoCheck执行了---检测,并在发生Angular无法或不愿检测变化时做出反应)')
    if(this.val !== this.newVal) {
      console.log(`值从${this.val}变成了${this.newVal}`)
      this.val = this.newVal
    }
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('4 ngAfterContentInit执行了---当把内容投影进组件之后使用)')
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('5 ngAfterContentChecked执行了---每次完成被投影组件内容的变更检测之后调用)')
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('6 ngAfterViewInit执行了---初始化完组件视图及其子组件视图后调用(dom操作))')
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('7 ngAfterViewChecked执行了---每次做完组件视图和子视图的变更检测之后调用')
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('8 ngOnDestro执行了---销毁组件')
  }
}
