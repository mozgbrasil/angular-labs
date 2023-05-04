import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebugComponent } from '../../core/debug/debug.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShippingComponent } from './shipping/shipping.component';

let routes: Routes;
routes = [];
routes = [
	{
		path: '',
		redirectTo: 'products',
		pathMatch: 'full'
	},
	{ path: 'debug', component: DebugComponent },
	{ path: 'products', component: ProductListComponent },
	{ path: 'products/:productId', component: ProductDetailsComponent },
	{ path: 'cart', component: CartComponent },
	{ path: 'shipping', component: ShippingComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EcommerceRoutingModule {}
