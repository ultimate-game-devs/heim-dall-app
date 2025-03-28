import {Component} from '@angular/core';
import {IonApp, IonRouterOutlet} from '@ionic/angular/standalone';
import {StatusBar, Style} from "@capacitor/status-bar";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    this.setStatusBar();
  }

  private setStatusBar() {
    let toolbarColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--ion-toolbar-background')
      .trim();

    if (!toolbarColor || toolbarColor === '') {
      toolbarColor = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? '#000000'
        : '#ffffff';
    }

    StatusBar.setOverlaysWebView({ overlay: false });
    StatusBar.setBackgroundColor({
      color: toolbarColor
    })
    StatusBar.setStyle({
      style: Style.Default
    })
  }
}
