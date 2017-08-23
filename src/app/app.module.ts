import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { DataService } from './services/data.service';
import { QuestionComponent } from './components/question-list/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    QuestionListComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
