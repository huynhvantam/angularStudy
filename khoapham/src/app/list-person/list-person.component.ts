import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css'],
})
export class ListPersonComponent implements OnInit {
  @Output() nameADD = new EventEmitter();
  arrPeople = [
    { name: 'Tam', age: 10 },
    { name: 'Ti', age: 7 },
    { name: 'Tron', age: 5 },
  ];
  constructor() {}

  ngOnInit(): void {}
  // addNumber(){
  //   this.nameADD.emit(true);
  // }
  // subNumber(){
  //   this.nameADD.emit(false);
  // }
  // removePersonByName(name: string) {
  //   const  index = this.arrPeople.findIndex(ex =>ex.name ===name);
  //   this.arrPeople.splice(index,1)
  // }
  evenXoaF(name: string){
    const index = this.arrPeople.findIndex(ex=>ex.name === name);
    this.arrPeople.splice(index,1);
  }
}
