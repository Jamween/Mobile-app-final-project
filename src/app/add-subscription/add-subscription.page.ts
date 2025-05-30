import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-subscription',
  templateUrl: './add-subscription.page.html',
  styleUrls: ['./add-subscription.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, FormsModule],
})
export class AddSubscriptionPage {
  subscription = {
    name: '',
    amount: null,
    date: '',
    billingCycle: 'monthly',
    paymentMethod: ''
  };

  constructor(private router: Router) {}

  saveSubscription() {
    console.log('Saving subscription:', this.subscription);
<<<<<<< HEAD
=======
    // Later we will save to storage
>>>>>>> c3f8f4d98d5169d95987fecdc85ccb675ae74d6b
    this.router.navigate(['/home']);
  }
}
