import { SelectorContext } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
  selector:'app-root',
  template:`<div>
    <h1>{{pageTitle}}</h1>
<app-products></app-products>
</div>`
})
export class AppComponent {
  pageTitle : string ='MY FIRST ANGULAR';
}