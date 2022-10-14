import { Component } from '@angular/core';
import { CheckoutsService } from 'src/app/SERVICES/checkouts.service';


@Component({
  selector: 'app-paymentt',
  templateUrl: './paymentt.component.html',
  styleUrls: ['./paymentt.component.css']
})
export class PaymenttComponent {
  
  paymentHandler: any = null;

  success: boolean =false
  
  failure:boolean = false
  constructor(public checkouts: CheckoutsService) {}

  ngOnInit() {
    this.invokeStripe();
  }

  makePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_live_51LidnEAGaQmpVwCJlQ0vq20S4hxi890agsaR1kmIBJKV9bzxjX5l92RlI98Tr5n09rmiet0hiGAr6bJzdP20lZCA00Dzs79GfM',
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
      name: 'Pay With Stripe',
      description: 'Paiement avec stripe',
      
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
          key: 'pk_live_51LidnEAGaQmpVwCJlQ0vq20S4hxi890agsaR1kmIBJKV9bzxjX5l92RlI98Tr5n09rmiet0hiGAr6bJzdP20lZCA00Dzs79GfM',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }
}








