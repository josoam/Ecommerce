import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
shopping_cart_items: any[]=[];
item: any;
  acc: any;
  public search = new BehaviorSubject<string>("");

  constructor() { }
addProduct = (product:any)=>{
let items=this.get_shopping_cart_items();

if(items){
  items.push(product);
  localStorage.setItem('shopping_cart',JSON.stringify(items))
}else{
  this.shopping_cart_items.push(product); 
  localStorage.setItem('shopping_cart',JSON.stringify(this.shopping_cart_items))
}

}




get_shopping_cart_items=()=>{
  let items=localStorage.getItem('shopping_cart')
  return JSON.parse(items!)
}
getCartLength=()=>{
  let items = this.get_shopping_cart_items();
  return items? this.get_shopping_cart_items().length:0
  
}

getTotal =()=>{
  
  let items=this.get_shopping_cart_items();
  return items?.reduce((acc: any, item: any)=>acc + item.price,0)
}

removerItem=(p:any)=>{

  console.log('calling remover ', p)
  let items = this.get_shopping_cart_items();
  
  const index = items.findIndex((item:any) => item.id == p.id);
  if(index>=0){
    console.log('hitting if')
    items.splice(index, 1);
    return localStorage.setItem('shopping_cart', JSON.stringify(items))
  }

}

remove=(p:any)=>{

  console.log('calling remover ', p)
  let items = this.get_shopping_cart_items();
  
  const index = items.findIndex((item:any) => item.id == p.id);
  if(index>=0){
    console.log('hitting if')
    items.splice(index, 1);
    return localStorage.clear()
  }

}


}
