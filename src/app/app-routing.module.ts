import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { SidenavResponsiveComponent } from './core/sidenav-responsive/sidenav-responsive.component';

// const routes: Routes = [{ path: '', component: SidenavResponsiveComponent }];

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
