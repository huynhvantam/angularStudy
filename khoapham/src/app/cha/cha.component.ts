import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cha',
  templateUrl: './cha.component.html',
  styleUrls: ['./cha.component.css'],
})
export class ChaComponent implements OnInit {
  @Output() eventXoa = new EventEmitter<string>();
  @Input() name: string;
  @Input() age: number;
  constructor() {}

  ngOnInit(): void {}
  clickXoa() {
    this.eventXoa.emit(this.name);
  }
}
