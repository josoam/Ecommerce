import { Component, OnInit } from '@angular/core';
import { LiService } from 'src/app/SERVICES/li.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
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
