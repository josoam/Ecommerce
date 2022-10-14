import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
@Component({
  selector: 'app-costar',
  templateUrl: './costar.component.html',
  styleUrls: ['./costar.component.css']
})
export class CostarComponent implements OnInit {
  @Input() products: any [];
  
  constructor(private shopping_cart:ShoppingCartService) { }

  ngOnInit(): void {
  }
  addToCart(p: any){
    this.shopping_cart.addProduct(p)
  }
  

  
  
}
