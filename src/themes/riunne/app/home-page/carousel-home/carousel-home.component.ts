import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
    selector: 'ri-carousel-home',
    imports: [NgbCarouselModule, NgIf],
    templateUrl: './carousel-home.html',
    styleUrls: ['./carousel-home.scss'],
})
export class CarouselHome {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}