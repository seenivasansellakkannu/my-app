import { SelectorContext } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { Iproduct } from "./product";

@Component({
  selector:'app-products',
  templateUrl:'./product-list.component.html',
  styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit { 
  pageTitle:string='Product List';
  imageWidth=40;
  imageMargin=2;
  showImage:boolean=false;
  private _listFilter:string = '';
  
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter=value;
    console.log('Set Value' , value);
    this.filteredProducts= this.performFilter(value);
  }
  filteredProducts : Iproduct[]=[];
  products: Iproduct[]=[
    {
      "productId" : 1,
      "productName" : "IPHONE",
      "productCost": 5000,
      "rating":4,
      "available" : "yes-available",
      "imageUrl":'assets/images/iphone.png'
    },
    {
      "productId" : 2,
      "productName" : "PIXEL",
      "productCost": 4000,
      "rating":3.5,
      "available" : "yes-available",
      "imageUrl":'assets/images/pixel.png'
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this._listFilter = 'cart';
    console.log('ngOnInit');
  }
  performFilter(filterBy : string):Iproduct[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.products.filter((product:Iproduct)=>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }
  OnRatingClicked(message: string):void{
    this.pageTitle='Product List: ' + message;
  }
}