import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
    selector: 'ri-carousel-home',
    standalone: true,
    imports: [NgbCarouselModule, NgIf],
    templateUrl: './carousel-basic.html',
})
export class CarouselHome {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}