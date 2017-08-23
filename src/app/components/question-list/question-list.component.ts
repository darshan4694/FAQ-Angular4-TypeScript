import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions:Object[] = [
    {
      text: 'What is your name?',
      answer:'My name is Darshan.'
    },
    {
      text: 'What is your school name?',
      answer:'It is Southern Methodist University.'
    },
    {
      text: 'What is your Degree?',
      answer:'It is MS in Software Engineering.'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
