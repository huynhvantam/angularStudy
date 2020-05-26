import { Con1Component } from './../con1/con1.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cha1',
  templateUrl: './cha1.component.html',
  styleUrls: ['./cha1.component.css']
})
export class Cha1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild(Con1Component)
  exChild: Con1Component;
  clickaddChild(){
    this.exChild.value++;
  }
  // @ViewChild(Con1Component)
  // myChild: Con1Component;
  // onAddForChild(){
  //   this.myChild.value++;

}
