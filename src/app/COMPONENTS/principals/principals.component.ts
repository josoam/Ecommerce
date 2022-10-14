import { Component, OnInit } from '@angular/core';
import { PriService } from 'src/app/SERVICES/pri.service';

@Component({
  selector: 'app-principals',
  templateUrl: './principals.component.html',
  styleUrls: ['./principals.component.css']
})
export class PrincipalsComponent implements OnInit {
   items: any [];

  constructor(private pri: PriService,) { }

  ngOnInit(): void {
  this.getProducts()
  }
getProducts(){
  this.pri.getJson().subscribe(resp=>{
    this.items=resp
  })
}


}
