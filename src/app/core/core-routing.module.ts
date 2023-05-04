import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavResponsiveComponent } from './sidenav-responsive/sidenav-responsive.component';

let routes: Routes;
routes = [];
routes = [
	{
		path: '',
		redirectTo: 'siden',
		pathMatch: 'full'
	},
	{ path: 'siden', component: SidenavResponsiveComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CoreRoutingModule {}
