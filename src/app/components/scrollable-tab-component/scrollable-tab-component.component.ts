import { Component, OnInit, Input } from '@angular/core';

export interface TopMenu {
  title: string,
  link: string,
}


@Component({
  selector: 'app-scrollable-tab-component',
  templateUrl: './scrollable-tab-component.component.html',
  styleUrls: ['./scrollable-tab-component.component.css']
})
export class ScrollableTabComponentComponent implements OnInit {

  selectedIndex: number = -1;

  @Input() menus: TopMenu[];

  constructor() { }

  ngOnInit(): void {
  }

}
