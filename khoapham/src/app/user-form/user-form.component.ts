import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  name ="";
  isChange = true;
  eventStyle = {color: 'red', fontSize:'30px'};
  oddStyle = {color: 'black', fontSize:'20px'};
  currentClass = {circle: !this.isChange, square:this.isChange};
  constructor() { }

  ngOnInit(): void {
  }
  // showEvent(bien){
  //   this.name= bien.target.value;
  // }

}
