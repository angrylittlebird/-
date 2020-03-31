import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList, Renderer2 } from '@angular/core';

export interface ImageSlider {
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
  @ViewChild('imageSlider', { static: true }) imageElement: ElementRef;
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight: string = '160px';
  @Input() intervalBySeconds: number = 2;

  constructor(private rd2: Renderer2) { }

  ngOnInit() {
    console.log("this.imageElement ", this.imageElement);
    // this.imageElement.nativeElement.innerHTML = '<span> hello </span>';
  }

  ngAfterViewInit(): void {
    // will occur some security problem.
    // this.imgs.forEach(item => (item.nativeElement.style.height = '100px'));

    // this.imgs.forEach(item=> this.rd2.setStyle(item.nativeElement,"height","100px"));

    let i = 0;
    setInterval(() => {
      // console.log('scrollLeft: ',(i% this.sliders.length) * (this.imageElement.nativeElement.scrollWidth / this.sliders.length))
      this.rd2.setProperty(this.imageElement.nativeElement, "scrollLeft", (++i % this.sliders.length) * (this.imageElement.nativeElement.scrollWidth / this.sliders.length))
      console.log('nativeElement.scrollWidth:',this.imageElement.nativeElement.scrollWidth)

    }, this.intervalBySeconds * 1000)
  }

}
