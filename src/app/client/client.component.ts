import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
import { CarouselService } from 'angular4-carousel';




@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  public imageSources: string[] = [
    'path to img1',
    'path to img2',
    'path to img3'
 ];

 public config: ICarouselConfig = {
   verifyBeforeLoad: true,
   log: false,
   animation: true,
   animationType: AnimationConfig.SLIDE,
   autoplay: true,
   autoplayDelay: 2000,
   stopAutoplayMinWidth: 768
 };
  constructor(private x: CarouselService) { }

  ngOnInit() {
    this.x.onImageLoad().subscribe(
      (src) => console.log(src + ' - loaded'),
      (src) => console.log(src + ' - error'),
      () => console.log('all imgs loaded')
    );
  }

}
