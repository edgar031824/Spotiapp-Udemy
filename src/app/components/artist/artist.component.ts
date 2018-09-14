import { Component, OnInit } from '@angular/core';
// se importa el ActivatedRoute para recibir parametros
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from "../../services/spotify.service";
@Component({
	selector: 'app-artist',
	templateUrl: './artist.component.html',
	styles: []
})
export class ArtistComponent implements OnInit {
	obArtist: any = {};
	arSongs: any = [];
	blMask: boolean;

	constructor(private activatedRouted: ActivatedRoute, public _spotifyService: SpotifyService) { }

	ngOnInit() {
		this.blMask = true;
		this.activatedRouted.params.map((iobArtistId) => iobArtistId.id).subscribe((isbArtistId) => {
			this._spotifyService.getDetailedArtist(isbArtistId).subscribe((iarResponse) => {
				this.obArtist = iarResponse;
				this.blMask = false;
			});

			this._spotifyService.getTop(isbArtistId).subscribe((iarResponse) => {

				this.arSongs = iarResponse;
				this.blMask = false;
				console.log(iarResponse)
			})
		})
	}

}
