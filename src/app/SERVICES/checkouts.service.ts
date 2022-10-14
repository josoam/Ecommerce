import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutsService {

  constructor(private http: HttpClient) { }
  
  makePayment(stripeToken: any): Observable<any>{
    const url = "http://localhost:4200/checkouts/"

    return this.http.post<any>(url,{token:stripeToken})
  }
}