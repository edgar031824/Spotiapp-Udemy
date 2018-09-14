import { Injectable } from '@angular/core';
//modulo para realizar peticios http, en el headers se envian los parametros de entrada
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//se importa el operador map
import 'rxjs/add/operator/map';
import { HttpRequest } from 'selenium-webdriver/http';


@Injectable()
export class SpotifyService {
	arArtist: any = [];
	sbToken = "BQA35slOVTNQCm9_x541U5cpIpEFcGtaZwgCnHsLI-G6IEVVbivfdgGwwTAxxRIyJVug8y5TjKDpLJFytco";
	obHeaders = new HttpHeaders({
		"Authorization": "Bearer " + this.sbToken
	});


	constructor(public http: HttpClient) {

	}
	//Método que trae toda la información de los artistas que coinciden con la busqueda
	getArtist(sbTermino) {
		let url = `https://api.spotify.com/v1/search?query=${sbTermino}&type=artist`,
			headers = this.obHeaders;

		return this.http.get(url, { headers }).map((iarResponse) => {
			return this.arArtist = iarResponse.artists.items;
		});
	}
	//Método que trae la info de un artista en especifico
	getDetailedArtist(inuId) {
		let url = `https://api.spotify.com/v1/artists/${inuId}`,
			headers = this.obHeaders;

		return this.http.get(url, { headers });

	}
	//Método que obtiene las canciones principales de un artista
	getTop(inuId) {
		let url = `https://api.spotify.com/v1/artists/${inuId}/top-tracks?country=us`,
			headers = this.obHeaders;

		return this.http.get(url, { headers }).map((iarResponse) => {
			return iarResponse.tracks;
		});
	}
}
