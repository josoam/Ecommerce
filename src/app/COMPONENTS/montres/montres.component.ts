import { Component, OnInit } from '@angular/core';
import { LiService } from 'src/app/SERVICES/li.service';

@Component({
  selector: 'app-montres',
  templateUrl: './montres.component.html',
  styleUrls: ['./montres.component.css']
})
export class MontresComponent implements OnInit {
   items: any [];

  constructor(private li: LiService) { }

  ngOnInit(): void {
  this.getProducts()
  }
getProducts(){
  this.li.getJson().subscribe(resp=>{
    this.items=resp
  })
}


}
