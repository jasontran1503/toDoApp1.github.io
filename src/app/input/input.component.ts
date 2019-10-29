import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  itemContent = '';
  arrItems = [];

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    if (this.itemContent == '') {
      return;
    }
    this.arrItems.push({
      id: this.arrItems.length,
      itemContent: this.itemContent,
      status: false
    });
    this.itemContent = '';
  }

  removeItem(id: number) {
    let index = this.arrItems.findIndex(item => item.id === id);
    this.arrItems.splice(index, 1);
  }

  changeStatus(id: number){
    this.arrItems[id].status = !this.arrItems[id].status;
  }
}
