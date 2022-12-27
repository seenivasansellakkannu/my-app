import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable,catchError,tap } from "rxjs";
import { Iproduct } from "./product";

@Injectable({
    providedIn:'root'
})
export class ProductService {
    private productUrl = 'http://localhost:8080/getProduct';
    constructor(private http:HttpClient){

    }
    getProduct(): Observable<Iproduct[]>{
       return this.http.get<Iproduct[]>(this.productUrl);
    }
    handleError(): (err: any, caught: Observable<Iproduct[]>) => import("rxjs").ObservableInput<any> {
     throw new Error("Method not implemented.");
    }
    

}