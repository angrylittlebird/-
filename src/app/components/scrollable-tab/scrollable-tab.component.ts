import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface TopMenu {
  title: string,
  link: string,
}


@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {

  selectedIndex: number = -1;

  @Output() tabSelection = new EventEmitter();
  @Input() menus: TopMenu[];

  constructor() { }

  ngOnInit(): void {
  }

  handleSelectedIndex(index: number){
    this.selectedIndex = index;
    this.tabSelection.emit(this.menus[this.selectedIndex]);
  }

}
