import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RoutingModule } from './routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';

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
  ToolbarComponent,
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutingModule,
    SharedModule,
    CoreModule,
  ],
  declarations: components,
  exports: components,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EcommerceModule {}
