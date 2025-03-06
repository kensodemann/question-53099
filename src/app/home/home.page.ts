import { Component } from '@angular/core';
import { IonContent, IonHeader, IonRange, IonTitle, IonToolbar } from '@ionic/angular/standalone';

const usdCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonHeader, IonRange, IonTitle, IonToolbar],
})
export class HomePage {
  pinFormatter(value: number) {
    return usdCurrency.format(value);
  }
}
