import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products: any [];
  searchKey:string ="";
  
  constructor(private shopping_cart:ShoppingCartService) { }

  ngOnInit(): void {
  
    this.shopping_cart.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addToCart(p: any){
    this.shopping_cart.addProduct(p)
  }
  

  
  
}
