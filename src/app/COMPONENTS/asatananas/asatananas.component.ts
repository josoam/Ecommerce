import { Component, OnInit } from '@angular/core';
import { AsatService } from 'src/app/SERVICES/asat.service';

@Component({
  selector: 'app-asatananas',
  templateUrl: './asatananas.component.html',
  styleUrls: ['./asatananas.component.css']
})
export class AsatananasComponent implements OnInit {
   items: any [];

  constructor(private asat: AsatService,) { }

  ngOnInit(): void {
  this.getProducts()
  }
getProducts(){
  this.asat.getJson().subscribe(resp=>{
    this.items=resp
  })
}


}
