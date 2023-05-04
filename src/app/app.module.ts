import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from './core/core.module';
import { EcommerceModule } from './features/ecommerce/ecommerce.module';
import { metaReducers, reducers } from './reducers';
import { SharedModule } from './shared/shared.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
	declarations: [AppComponent],
	exports: [BrowserModule],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		CoreModule,
		SharedModule,
		EcommerceModule,
		StoreModule.forRoot(reducers, {
			metaReducers
		}),
		StoreRouterConnectingModule.forRoot(),
		EffectsModule.forRoot([AppEffects]),
		EntityDataModule.forRoot(entityConfig),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
	],
	providers: [
		{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
