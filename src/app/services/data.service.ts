import { Injectable } from '@angular/core';
import { Question } from '../../app/models/Question';

@Injectable()
export class DataService {
  questions: Question[] = [];
  constructor() {
    // this.questions = [
    //   {
    //     text: 'What is your name?',
    //     answer: 'My name is Darshan.',
    //     hide: true
    //   },
    //   {
    //     text: 'What is your school name?',
    //     answer: 'It is Southern Methodist University.',
    //     hide: true
    //   },
    //   {
    //     text: 'What is your Degree?',
    //     answer: 'It is MS in Software Engineering.',
    //     hide: true
    //   },
    // ];
  }

  getQuestions() {

    if (localStorage.getItem('questions') == null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  addQuestion(question: Question) {
    this.questions.unshift(question);

    let questions;
    if (localStorage.getItem('questions') == null) {
      questions = [];
      questions.unshift(question);
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      questions.unshift(question);
      localStorage.setItem('questions', JSON.stringify(questions));
    }

  }

  removeQuestion(question: Question) {
    for (var index = 0; index < this.questions.length; index++) {
      if (question == this.questions[index])
        this.questions.splice(index, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
    }
  }

}
