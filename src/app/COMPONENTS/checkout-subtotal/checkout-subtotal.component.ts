
import { Component, OnInit,EventEmitter, Input,Output } from '@angular/core';
import { analyticInstance$ } from '@angular/fire/analytics';
import { remove } from 'jszip';
import { CheckoutsService } from 'src/app/SERVICES/checkouts.service';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-checkout-subtotal',
  templateUrl: './checkout-subtotal.component.html',
  styleUrls: ['./checkout-subtotal.component.css']
})
export class CheckoutSubtotalComponent implements OnInit {
  p:any;
  paymentHandler: any = null;

  success: boolean =false
  
  failure:boolean = false 
  
  constructor(public shoppingCart: ShoppingCartService ,public checkouts: CheckoutsService) { }

  ngOnInit(): void {
    this.invokeStripe();
   
  }
  

  makePayment(amount:number) {
  
    
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51LidnEAGaQmpVwCJ1eAGKHpx6Db1SelvKr7bltC6zPiwAtqVVWk7ty7lxqUFPdPVdubBH1r94vfEMRWm69j8VHQT00XHvdFDSl',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        paymentstripe(stripeToken);
      },
    });

    const paymentstripe = (stripeToken: any) => {
      this.checkouts.makePayment(stripeToken).subscribe((data: any) => {
        console.log(data);
        if (data.data === "success") {
          
          this.success = true
          
        }
        else {
          this.failure = true
        }
      });
    };

    paymentHandler.open({
      name: 'PAYMENT',
      description: 'This is a prototype payment',
      
      amount: amount * 100,
      
    });
    
    
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LidnEAGaQmpVwCJ1eAGKHpx6Db1SelvKr7bltC6zPiwAtqVVWk7ty7lxqUFPdPVdubBH1r94vfEMRWm69j8VHQT00XHvdFDSl',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }
 
  /*remove(p:any){
    this.shopping_cart_service.remove(p)
    this.deleteEvent.emit(p)
  }*/
  
}




