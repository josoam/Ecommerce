import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @Input() products: any [];
  
  constructor(private shopping_cart:ShoppingCartService) { }

  ngOnInit(): void {
  }
  addToCart(p: any){
    this.shopping_cart.addProduct(p)
  }
  

  
  
}
