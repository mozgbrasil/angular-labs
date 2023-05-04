import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavResponsiveComponent } from './core/sidenav-responsive/sidenav-responsive.component';

let routes: Routes;
routes = [];
routes = [
	{
		path: '',
		redirectTo: 'core1',
		pathMatch: 'full'
	},
	{ path: 'core1', component: SidenavResponsiveComponent }
];
routes = [
	{
		path: '',
		redirectTo: 'ecommerce',
		pathMatch: 'full'
	},
	{
		path: 'core2',
		loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
	},
	{
		path: 'ecommerce',
		loadChildren: () =>
			import('./features/ecommerce/ecommerce.module').then(
				m => m.EcommerceModule
			)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
