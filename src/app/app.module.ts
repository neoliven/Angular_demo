import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { enlargePipe } from './components/hello-world/hello-world-pipe.component'
import { FormDataComponent } from './components/form-data/form-data.component';
import { TodolistComponent } from './components/todolist/todolist.component'

import { StorageService } from './services/storage.service';
import { ParentComponent } from './components/parent/parent.component';
import { Ch1Component } from './components/ch1/ch1.component';
import { Ch2Component } from './components/ch2/ch2.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    enlargePipe,
    FormDataComponent,
    TodolistComponent,
    ParentComponent,
    Ch1Component,
    Ch2Component,
    LifecycleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
