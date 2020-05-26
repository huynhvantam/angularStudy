import { FormsModule } from '@angular/forms';
import { WordComponent } from './word/word.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ChaComponent } from './cha/cha.component';
import { ConComponent } from './con/con.component';
import { Cha1Component } from './cha1/cha1.component';
import { Con1Component } from './con1/con1.component';
import { CardComponent } from './card/card.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserFormComponent,
    StructComponent,
    WordsComponent,
    PersonComponent,
    ListPersonComponent,
    ChaComponent,
    ConComponent,
    Cha1Component,
    Con1Component,
    CardComponent,
    LearnPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
