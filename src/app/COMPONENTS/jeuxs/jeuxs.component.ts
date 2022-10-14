import { Component, OnInit } from '@angular/core';
import { JeService } from 'src/app/SERVICES/je.service';

@Component({
  selector: 'app-jeuxs',
  templateUrl: './jeuxs.component.html',
  styleUrls: ['./jeuxs.component.css']
})
export class JeuxsComponent implements OnInit {
   items: any [];

  constructor(private je: JeService) { }

  ngOnInit(): void {
  this.getProducts()
  }
getProducts(){
  this.je.getJson().subscribe(resp=>{
    this.items=resp
  })
}


}
