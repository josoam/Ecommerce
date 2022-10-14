import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {
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
  
  /*/stars = [1, 2, 3, 4, 5];
  rating = 0;
  hoverState = 0;

  enter(i: number): void {
    this.hoverState = i;
  }

  leave() {
    this.hoverState = 0;
  }

  updateRating(i: number) {
    this.rating = i;
  }*/
  
  
}

