import { Component, OnInit } from '@angular/core';
import { SmaService } from 'src/app/SERVICES/sma.service';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent implements OnInit {
   items: any [];

  constructor(private sma: SmaService) { }

  ngOnInit(): void {
  this.getProducts()
  }
getProducts(){
  this.sma.getJson().subscribe(resp=>{
    this.items=resp
  })
}


}
