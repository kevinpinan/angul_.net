import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarMascotaComponent } from './components/agregar-editar-mascota/agregar-editar-mascota.component';
import { ListadoMascotaComponent } from './components/listado-mascota/listado-mascota.component';
import { VerMascotaComponent } from './components/ver-mascota/ver-mascota.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarMascotaComponent,
    ListadoMascotaComponent,
    VerMascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
