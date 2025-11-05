import { HomeComponent } from './components/home.component/home.component';
import { CineComponent } from './components/cine.component/cine.component';
import { MusicaComponent } from './components/musica.component/musica.component';
//NECESITAMOS UNA SERIE DE MODULOS QUE SE ENCUENTRAN DENTRO DE ANGULAR/ROUTER
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotfoundComponent } from './components/notfound.component/notfound.component';

//NECESITAMOS UN ARRAY CON LAS RUTAS, DICHO ARRAY SERA DE TIPO Routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cine', component: CineComponent },
  { path: 'musica', component: MusicaComponent },

  { path: '**', component: NotfoundComponent },
];

//DESDE ESTA CLASE DEBEMOS EXPORTAR EL ARRAY DE ROUTES COMO PROVIDER
export const appRoutingProvider: any[] = [];
//LAS PROPIAS RUTAS A EXPORTAR
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
