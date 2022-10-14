import { Component, OnInit } from '@angular/core';
import { CosService } from 'src/app/SERVICES/cos.service';

@Component({
  selector: 'app-costars',
  templateUrl: './costars.component.html',
  styleUrls: ['./costars.component.css']
})
export class CostarsComponent implements OnInit {
   items: any [];

  constructor(private cos: CosService,) { }

  ngOnInit(): void {
  this.getProducts()
  }
getProducts(){
  this.cos.getJson().subscribe(resp=>{
    this.items=resp
  })
}


}
