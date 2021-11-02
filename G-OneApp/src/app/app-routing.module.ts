import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  {path:'homepage',component:HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'contactenos',component:ContactenosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
