import { CommonModule } from '@angular/common';
import {
	CUSTOM_ELEMENTS_SCHEMA,
	NO_ERRORS_SCHEMA,
	NgModule
} from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { DebugComponent } from './debug/debug.component';
import { FocusMonitorDirectivesComponent } from './focus-monitor-directives/focus-monitor-directives.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BreakpointObserverComponent } from './breakpoint-observer/breakpoint-observer.component';
import { CdkOverlayBasicComponent } from './cdk-overlay-basic/cdk-overlay-basic.component';
import { CdkPlatformComponent } from './cdk-platform/cdk-platform.component';
import { CoreRoutingModule } from './core-routing.module';
import { SidenavResponsiveComponent } from './sidenav-responsive/sidenav-responsive.component';

const components = [
	DebugComponent,
	FocusMonitorDirectivesComponent,
	BreakpointObserverComponent,
	CdkOverlayBasicComponent,
	CdkPlatformComponent,
	SidenavResponsiveComponent
];

@NgModule({
	declarations: components,
	imports: [
		CommonModule,
		HttpClientModule,
		ReactiveFormsModule,
		SharedModule,
		CoreRoutingModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class CoreModule {}
