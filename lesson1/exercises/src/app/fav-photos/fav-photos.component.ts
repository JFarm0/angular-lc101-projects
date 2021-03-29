import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Take a look; photos!';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://www.6-string.com/media/catalog/product/e/s/esp_ltd_f-4e_ns_ebony_sampleprototype_bass_guitar_5_.jpg';
  image3 = 'https://megamusic.blob.core.windows.net/images/0018834_ibanez-rga60al-electric-guitar-antique-brown-stained-low-gloss.jpg';

  constructor() { }

  ngOnInit() {
  }

}