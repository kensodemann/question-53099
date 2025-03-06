import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonLabel, IonRange, IonTitle, IonToolbar } from '@ionic/angular/standalone';

const usdCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, IonContent, IonHeader, IonLabel, IonRange, IonTitle, IonToolbar, FormsModule],
})
export class HomePage {
  amount: number = 25;

  get fmtAmount() {
    return usdCurrency.format(this.amount);
  }

  pinFormatter(value: number) {
    return usdCurrency.format(value);
  }
}
