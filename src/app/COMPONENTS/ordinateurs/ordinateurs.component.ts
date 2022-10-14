import { Component, OnInit } from '@angular/core';
import { MuService } from 'src/app/SERVICES/mu.service';

@Component({
  selector: 'app-ordinateurso',
  templateUrl: './ordinateurs.component.html',
  styleUrls: ['./ordinateurs.component.css']
})
export class OrdinateursComponent implements OnInit {
   items: any [];

  constructor(private mu: MuService) { }

  ngOnInit(): void {
  this.getProducts()
  }
getProducts(){
  this.mu.getJson().subscribe(resp=>{
    this.items=resp
  })
}

}
