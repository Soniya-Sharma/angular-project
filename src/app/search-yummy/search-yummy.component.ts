import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-yummy',
  templateUrl: './search-yummy.component.html',
  styleUrls: ['./search-yummy.component.css']
})
export class SearchYummyComponent {
  yummyName: string = "";// will take the value from input box

  @Output()
  searchTextChanged=new EventEmitter();
  // searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  searchYummy() {
    // console.log(this.yummyName)
    this.searchTextChanged.emit(this.yummyName);
  }

  clearSearch() {
    this.yummyName = "";
    this.searchTextChanged.emit(this.yummyName);
  }
}
