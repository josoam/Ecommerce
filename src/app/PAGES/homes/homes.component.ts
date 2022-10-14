import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/SERVICES/api.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {
   items: any [];

  constructor(private api: ApiService,) { }

  ngOnInit(): void {
  this.getProducts()
  }
getProducts(){
  this.api.getJson().subscribe(resp=>{
    this.items=resp
  })
}


}
