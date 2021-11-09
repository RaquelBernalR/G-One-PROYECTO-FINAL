import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BlusasComponent } from './componentes/blusas/blusas.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ServicioLoginComponent } from './componentes/servicio-login/servicio-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    BlusasComponent,
    LoginComponent,
    RegistroComponent,
    ContactenosComponent,
    NosotrosComponent,
    ServicioLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
