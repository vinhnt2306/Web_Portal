import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, tap} from 'rxjs';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseURL = 'https://localhost:44383';

  constructor(private httpClient: HttpClient) {}
  //AddToCart
  addToCart(productId: string, quantity: number): Observable<any> {
    const body = {
      ProductId: productId,
      Quantity: quantity,
      token : JSON.parse(localStorage.getItem('currentUser')??"").data.token
    };

    return this.httpClient.post(`${this.baseURL}/api/AddToCart/Process`, body)
    // return this.httpClient.post(`${this.baseURL}/api/AddToCart/Process`, body);
  }

  //GetItemCart
  getCartItem() : Observable<any>{
    let data = {
      token : JSON.parse(localStorage.getItem('currentUser')??"").data.token

    }
    return this.httpClient.request('POST',`${this.baseURL}/api/CartItem/Process`,
    {
      body : data,
      observe:'body',
      responseType : 'json',

    })
  }

  editCart()
  {

  }
}
