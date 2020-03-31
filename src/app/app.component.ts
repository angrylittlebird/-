import { Component, ViewChild } from '@angular/core';
import { TopMenu } from './components';
import { ImageSlider, ImageSliderComponent } from './components/image-slider/image-slider.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '拼多多';

  @ViewChild(ImageSliderComponent) sliderComponent: ImageSliderComponent;

  tabSelection(event){
    console.log(event);
  }
  
  topMenu:TopMenu[] =  [
    {
      title: '热门2',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '百货',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '百货',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '百货',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '百货',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '百货',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '百货1',
      link: ''
    },
  ]

  imageSliders: ImageSlider[] = [{ imgUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1585577181&di=c42bd431c09d200874564bf5f0c35087&src=http://www.cet.com.cn/upload/Image/2020/03/30/mrtp/1_25168475630.jpg',
    link: '',
    caption: 'string'},
    { imgUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1585577181&di=c42bd431c09d200874564bf5f0c35087&src=http://www.cet.com.cn/upload/Image/2020/03/30/mrtp/1_25168475630.jpg',
    link: '',
    caption: 'string'},
    { imgUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1585577181&di=c42bd431c09d200874564bf5f0c35087&src=http://www.cet.com.cn/upload/Image/2020/03/30/mrtp/1_25168475630.jpg',
    link: '',
    caption: 'string'},]

    ngAfterViewInit(): void{
      console.log('sliderComponent',this.sliderComponent)
    }
}
