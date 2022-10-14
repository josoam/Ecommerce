import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  @Input() products: any [];
  searchKey:string ="";
  constructor(private shopping_cart:ShoppingCartService) { }

  ngOnInit(): void {
    this.shopping_cart.search.subscribe((val:any)=>{
      this.searchKey = val; })
  }
  addToCart(p: any){
    this.shopping_cart.addProduct(p)
  }
  

  
  
}

