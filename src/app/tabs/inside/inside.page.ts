import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import {MqttService} from "ngx-mqtt";

@Component({
  selector: 'app-outside',
  templateUrl: 'inside.page.html',
  styleUrls: ['inside.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class InsidePage implements OnInit {
  constructor(private mqttService: MqttService) {}

  ngOnInit() {
    this.mqttService.observe('inside').subscribe(
      {
        next: (message) => {
          console.log(message.payload.toString());
        }
      })
  }
}
