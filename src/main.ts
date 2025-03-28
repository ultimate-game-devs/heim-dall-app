import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import {IMqttServiceOptions, MqttModule} from "ngx-mqtt";
import {importProvidersFrom} from "@angular/core";

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: '192.168.178.100',
  port: 9001,
  path: '/mqtt',
  protocol: "ws"
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    importProvidersFrom(
      MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
    )
  ],
});
