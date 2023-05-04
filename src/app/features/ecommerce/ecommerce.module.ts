import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
	CUSTOM_ELEMENTS_SCHEMA,
	NO_ERRORS_SCHEMA,
	NgModule
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { EcommerceRoutingModule } from './ecommerce-routing.module';

import { CartComponent } from './cart/cart.component';
import { CartDirective } from './cart/cart.directive';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const components = [
	CartComponent,
	CartDirective,
	ProductAlertsComponent,
	ProductDetailsComponent,
	ProductListComponent,
	ShippingComponent,
	ToolbarComponent
];

@NgModule({
	declarations: components,
	imports: [
		CommonModule,
		HttpClientModule,
		ReactiveFormsModule,
		SharedModule,
		EcommerceRoutingModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class EcommerceModule {}
