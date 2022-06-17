import { Component, ChangeDetectorRef } from '@angular/core';

import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior,
} from '@angular/cdk/platform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private cdRef: ChangeDetectorRef, // private commander: CommanderService
    public platform: Platform
  ) {}

  supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();

  title = 'angular-labs';

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(
    window.location.host
  );

  // public links: MenuItem[] = [];
  public links = [];
  public showDebug = false;

  enableDebug() {
    this.showDebug = true;
  }
  disableDebug() {
    this.showDebug = false;
  }
}
