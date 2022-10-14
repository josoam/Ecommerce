import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LiService {
  private _jsonURL='assets/DATA/livre.json';
  constructor(private Http:HttpClient) { }
  getJson():Observable<any>{
    return this.Http.get(this._jsonURL)
  }
}


