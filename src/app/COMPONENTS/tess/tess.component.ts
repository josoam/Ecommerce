import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/SERVICES/test.service';

@Component({
  selector: 'app-tess',
  templateUrl: './tess.component.html',
  styleUrls: ['./tess.component.css']
})
export class TessComponent implements OnInit {
   items: any [];

  constructor(private test: TestService,) { }

  ngOnInit(): void {
  this.getProducts()
  }
getProducts(){
  this.test.getJson().subscribe(resp=>{
    this.items=resp
  })
}


}
