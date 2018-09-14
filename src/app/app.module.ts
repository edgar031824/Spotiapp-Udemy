//modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//modulo que me permite hacer peticion http
import { HttpClientModule, HttpClient } from '@angular/common/http';
// modulo para manejo de formularios
import { FormsModule } from "@angular/forms";

//rutas
import { App_routing } from './app.routes';
//services
import { SpotifyService } from './services/spotify.service';
//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArtistComponent } from './components/artist/artist.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
//pipes
import { SinFotoPipe } from './pipes/sin-foto.pipe';
import { DomseguroPipe } from "./pipes/domseguro.pipe";



@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		SearchComponent,
		NavbarComponent,
		SinFotoPipe,
		ArtistComponent,
		LoadingComponent,
		DomseguroPipe
	],
	imports: [
		BrowserModule,
		App_routing,
		HttpClientModule,
		FormsModule
	],
	providers: [
		SpotifyService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
