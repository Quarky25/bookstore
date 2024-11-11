import { Component } from '@angular/core';
import { IBookList } from '../model/book-model';
import { CartService } from '../services/cart.service';
import { FormBuilder, FormControl, FormControlName, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent {
cart: IBookList[] = [];
checkout!: FormGroup

constructor(private cartService: CartService, private formBuilder: FormBuilder) {
  this.cart = this.cartService.getCart();
  this.createCheckoutForm()
  
  
  };

  createCheckoutForm() {
    this.checkout = this.formBuilder.group({
      fullName: new FormControl<string> (''),
      address: new FormControl<string> (''),
      eMail: new FormControl<string> ('')
    });
    
      
  }
  increaseQuantity(item: IBookList): void {
    item.quantity++;
  }
  
  decreaseQuantity(item: IBookList): void {
   if(item.quantity >= 1) item.quantity--;
  }
  
  removeItem(item: IBookList): void {
    this.cart = this.cart.filter(cartItem => cartItem.id !== item.id)
    
    
  }
  
  checkOutFunction(): void {
    this.checkout.reset();
    this.cart = this.cartService.clearCart();
    alert('Your order has been successfully submitted')
    this.checkout.valueChanges.subscribe(value => {
      console.log('New value:', value);
      
    });
    
  }
  

  
  calculateTotal(): number {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  

}






