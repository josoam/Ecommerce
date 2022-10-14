import { Component, OnInit,Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  
  @Input() products: any [];
  
  constructor(private shopping_cart:ShoppingCartService) { }

  ngOnInit(): void {
  }
  addToCart(p: any){
    this.shopping_cart.addProduct(p)
  }
}
