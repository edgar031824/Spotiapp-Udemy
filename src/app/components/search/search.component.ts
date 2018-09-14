import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html'
})
export class SearchComponent {

	termino: string = '';
	blMask: boolean;
	blError: boolean = false;
	sbMessageError: string = '';
	constructor(public _spotifyService: SpotifyService) {

	}

	BuscarArtista() {
		if (this.termino.length > 0) {
			// se coloca máscara
			this.blMask = true;
			//se manda a llamar el método que consulta al artista con base en el texto ingresado
			//cuando llegue la respuesta se quita la máscara
			this._spotifyService.getArtist(this.termino).subscribe(() => this.blMask = false, (error) => {
				this.blError = true;
				this.blMask = false;
				this.sbMessageError = error.error.error.message;
			});
		}

	}


}
