import { Component, OnInit } from '@angular/core';
import { MuService } from 'src/app/SERVICES/mu.service';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.css']
})
export class MusicsComponent implements OnInit {
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
