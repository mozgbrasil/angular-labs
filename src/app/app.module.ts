import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/shared/layout/layout.component';
import { FaleConoscoComponent } from './components/public/fale-conosco/fale-conosco.component';
import { MinhaContaComponent } from './components/private/minha-conta/minha-conta.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FaleConoscoComponent,
    MinhaContaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
