import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from "./components/artist/artist.component";

const app_routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'search', component: SearchComponent },
	{ path: 'artist/:id', component: ArtistComponent },
	//cualquier ruta que no sea niguna de las definidas va al home
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }

];

export const App_routing = RouterModule.forRoot(app_routes, { useHash: true });
