import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-outside',
  templateUrl: 'outside.page.html',
  styleUrls: ['outside.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class OutsidePage {
  constructor() {}
}
