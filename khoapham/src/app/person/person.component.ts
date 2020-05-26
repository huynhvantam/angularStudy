import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  // @Output() removeP = new EventEmitter<string>();
  @Output() eventXoa = new EventEmitter<string>();
@Input() name: string;
@Input() age: number;
 value =0;
  constructor() {}

  ngOnInit(): void {}

  // changeValue(isAdd:boolean){
  //   // if (isAdd) {
  //   //   this.value= this.value +1;
  //   // }
  //   // else {
  //   //   this.value = this.value-1;
  //   // }
  //   (isAdd) ? this.value++ : this.value--;
  // }
  // remotebyClick(){
  //   this.removeP.emit(this.name);
  // }
  clickRemote(){
    this.eventXoa.emit(this.name);
  }
}
