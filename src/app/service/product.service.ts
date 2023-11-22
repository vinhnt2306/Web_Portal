import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { Product} from 'src/models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = 'https://localhost:44383';

  constructor(private httpClient:HttpClient) { }
  //GetAll Sản phẩm
  getAllProduct() : Observable<any>{
    let data = {
      "name": "",

    }
    return this.httpClient.request('POST',`${this.baseURL}/api/HomePage/Process`,
    {
      body : data,
      observe:'body',
      responseType : 'json',

    })
  }
  //GetId Sản phẩm
  getProductDetailById(id: string): Observable<any> {
    return this.httpClient.post<any>(`${this.baseURL}/api/DetailProduct/Process`, {
      id : id,
    });
  }

}
