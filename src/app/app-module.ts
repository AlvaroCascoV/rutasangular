import { routing, appRoutingProvider } from './app.routing';

import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { HomeComponent } from './components/home.component/home.component';
import { CineComponent } from './components/cine.component/cine.component';
import { MusicaComponent } from './components/musica.component/musica.component';
import { MenuComponent } from './components/menu.component/menu.component';
import { NotfoundComponent } from './components/notfound.component/notfound.component';
import { NumeroDobleComponent } from './components/numero.doble.component/numero.doble.component';

@NgModule({
  declarations: [App, HomeComponent, CineComponent, MusicaComponent, MenuComponent, NotfoundComponent, NumeroDobleComponent],
  imports: [BrowserModule, routing],
  providers: [provideBrowserGlobalErrorListeners(), appRoutingProvider],
  bootstrap: [App],
})
export class AppModule {}
