import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'sinFoto'
})
export class SinFotoPipe implements PipeTransform {

	transform(arImages: any[]): any {

		let sbNoImageUrl = 'assets/img/noimage.png';

		if (arImages) {
			if (arImages.length > 0) {
				return (arImages[1]) ? arImages[1].url : sbNoImageUrl
			} else {
				return sbNoImageUrl
			}
		}
	}
}
