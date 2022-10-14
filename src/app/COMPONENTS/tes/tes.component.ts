import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
@Component({
  selector: 'app-tes',
  templateUrl: './tes.component.html',
  styleUrls: ['./tes.component.css']
})
export class TesComponent implements OnInit {
  @Input() products: any [];
  
  constructor(private shopping_cart:ShoppingCartService) { }

  ngOnInit(): void {
  }
  addToCart(p: any){
    this.shopping_cart.addProduct(p)
  }
  

  
  
}
