import { Component } from '@angular/core';
@Component({
  templateUrl: './word.component.html',
  selector: 'app-word',
  styleUrls:['./word.component.css']
})
export class WordComponent {
  en = 'Hello';
  vn: string = 'xin chao';
  imageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  hiddenF = false;
  hiddenT = true;
  toggleHiddent(){
    this.hiddenT = !this.hiddenT;
  }
}
