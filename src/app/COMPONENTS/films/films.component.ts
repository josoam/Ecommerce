import { Component, OnInit } from '@angular/core';
import { FiService } from 'src/app/SERVICES/fi.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
   items: any [];

  constructor(private fi: FiService,) { }

  ngOnInit(): void {
  this.getProducts()
  }
getProducts(){
  this.fi.getJson().subscribe(resp=>{
    this.items=resp
  })
}


}
