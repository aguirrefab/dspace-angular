import { Component } from '@angular/core';

@Component({
    selector: 'ri-carousel-home',
    templateUrl: './carousel-home.html',
    styleUrls: ['./carousel-home.scss'],
})
export class CarouselHome {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}