import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css'],
})
export class WordsComponent implements OnInit {
  filerStatus = 'filterSelectAll'
  nameEN = '';
  nameVN = '';
  isShowForm = false;
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true },
  ];
  constructor() {}

  ngOnInit() {}
  addWord() {
    this.arrWords.unshift({
      id: this.arrWords.length + 1,
      en: this.nameEN,
      vn: this.nameVN,
      memorized: false,
    });
    this.nameEN = '';
    this.nameVN = '';
    this.isShowForm = false;
  }
  removeWord(id: number) {
    const index = this.arrWords.findIndex((name) => name.id === id);
    this.arrWords.splice(index, 1);
  }
  // getShowStatus(memorized:boolean) {
  //   const dkSelectAll = this.filterStatus==='SelectAll';
  //   const dkMemori = this.filterStatus==='SelectMemori'&& memorized;
  //   const dkForget = this.filterStatus==='SelectForget'&& !memorized;
  //   return dkSelectAll ||dkForget||dkMemori
  // }
  getFitler(memori:boolean){
    const dkAll =this.filerStatus=== 'filterSelectAll';
    const dkMemori =this.filerStatus=== 'filterMemori' && memori;
    const dkForget =this.filerStatus=== 'filterForget' &&!memori;
    return dkAll||dkForget||dkMemori;
  }
}
