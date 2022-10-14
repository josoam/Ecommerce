

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestService {
 private _jsonURL='http://localhost:3000/signup';
  constructor(private Http:HttpClient) { }

  getJson():Observable<any>{
    return this.Http.get(this._jsonURL)
  }
}
