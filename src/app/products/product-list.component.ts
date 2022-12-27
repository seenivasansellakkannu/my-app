import { SelectorContext } from "@angular/compiler";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Iproduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  templateUrl:'./product-list.component.html',
  styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  
  constructor(private productService : ProductService){
    
  } 
  pageTitle:string='Product List';
  imageWidth=40;
  imageMargin=2;
  showImage:boolean=false;
  private _listFilter:string = '';
  errorMessage='';
  sub!: Subscription;
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter=value;
    console.log('Set Value' , value);
    this.filteredProducts= this.performFilter(value);
  }
  filteredProducts : Iproduct[]=[];
  products: Iproduct[]=[];
  
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }

  ngOnInit(): void {
    this.sub = this.productService.getProduct().subscribe({
      next : productss=> {
        this.products=productss;
        this.filteredProducts=this.products;
      },
      error : err=>this.errorMessage = err
    });
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