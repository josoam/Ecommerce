import { Component, OnInit } from '@angular/core';
import { TeService } from 'src/app/SERVICES/te.service';

@Component({
  selector: 'app-teniss',
  templateUrl: './teniss.component.html',
  styleUrls: ['./teniss.component.css']
})
export class TenissComponent implements OnInit {
   items: any [];

  constructor(private te: TeService,) { }

  ngOnInit(): void {
  this.getProducts()
  }
getProducts(){
  this.te.getJson().subscribe(resp=>{
    this.items=resp
  })
}


}
