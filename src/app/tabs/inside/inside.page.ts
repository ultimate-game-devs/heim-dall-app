import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-outside',
  templateUrl: 'inside.page.html',
  styleUrls: ['inside.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class InsidePage {
  constructor() {}
}
