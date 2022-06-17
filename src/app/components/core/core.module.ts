import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { BreakpointObserverComponent } from './breakpoint-observer/breakpoint-observer.component';
import { FocusMonitorDirectivesComponent } from './focus-monitor-directives/focus-monitor-directives.component';
import { DebugComponent } from './debug/debug.component';

const components = [
  BreakpointObserverComponent,
  FocusMonitorDirectivesComponent,
  DebugComponent,
];

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: components,
  exports: components,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {}
