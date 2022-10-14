import { Component, OnInit } from '@angular/core';
import { BiService } from 'src/app/SERVICES/bi.service';

@Component({
  selector: 'app-bijouxs',
  templateUrl: './bijouxs.component.html',
  styleUrls: ['./bijouxs.component.css']
})
export class BijouxsComponent implements OnInit {
   items: any [];

  constructor(private bi: BiService,) { }

  ngOnInit(): void {
  this.getProducts()
  }
getProducts(){
  this.bi.getJson().subscribe(resp=>{
    this.items=resp
  })
}


}
