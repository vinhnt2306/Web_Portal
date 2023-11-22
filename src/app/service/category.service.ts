import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseURL = 'https://localhost:44383';

  constructor(private httpClient:HttpClient) { }
  getListCategory() : Observable<any>{
    let data = {
      "name": "",
    }
    return this.httpClient.request('POST',`${this.baseURL}/api/GetListCategory/Process`,
    {
      body : data,
      observe:'body',
      responseType : 'json'
    })
  }
}
