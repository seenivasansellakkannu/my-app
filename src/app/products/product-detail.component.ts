import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  pageTitle:string = 'Product Detail';
  product : Iproduct | undefined;

constructor(private route: ActivatedRoute, private router: Router){

}
ngOnInit(): void {
 const id = Number(this.route.snapshot.paramMap.get('id'));
 this.pageTitle += `:${id}`;
 this.product = {
  'productId':id,
  'productName':'Iphone',
  'available' : 'yes',
  'imageUrl' : 'assets/images/iphone.png',
  'productCost' : 5000,
  'rating' : 5
 };
}
onBack():void{
  this.router.navigate(['/products']);
}
}
