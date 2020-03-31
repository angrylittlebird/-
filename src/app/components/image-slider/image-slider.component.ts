import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';

export interface ImageSlider{
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  @ViewChildren('img') imgs: QueryList<ElementRef>;
  @ViewChild('imageSlider',{static:true}) imageElement: ElementRef;
  @Input() sliders: ImageSlider[] = [];

  constructor() { }

  ngOnInit() {
    console.log("1111",this.imageElement);
    // this.imageElement.nativeElement.innerHTML = '<span> hello </span>';
  }

  ngAfterViewInit(): void {
    this.imgs.forEach(item => (item.nativeElement.style.height='100px'));
  }

}
