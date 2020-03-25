/*
===============================================================================
; Title:  theModel.js
; Author: Jeff Shepherd, Janet Blohn
; Modified By:
; Date:   3/14/2020
; Description: The model (Data) for the JavaScript Quiz.
; Use for data and validation only
;==============================================================================
*/

function QuizModel() {
  "use strict";

  function Question(id, question, correctAnswer, possibleAnswers) {
    this.id = id; //string
    this.question = question; //string
    this.possibleAnswers = possibleAnswers; //answer object literal (string, string)
    this.correctAnswer = correctAnswer; //string
    this.userAnswer = ""; //string
  }

  Question.prototype.setUserAnswer = function (userAnswer) {
    this.userAnswer = userAnswer;
  };

  Question.prototype.isCorrect = function () {
    return this.userAnswer === this.correctAnswer;
  }

  this.getData = function () {
    return [new Question(
        "1", "The kinds of values that can be represented and manipulated in a \
        programming language are known as:", "b", {
          "a": "a) Variables",
          "b": "b) Types",
          "c": "c) Methods"
        }),

      new Question(
        "2", "question 2", "a", {
          "a": "Possibility A",
          "b": "Possibility B",
          "c": "Possibility C"
        }),
      new Question(
        "3", "question 3", "a", {
          "a": "Possibility A",
          "b": "Possibility B",
          "c": "Possibility C"
        }),
      new Question(
        "4", "question 4", "a", {
          "a": "Possibility A",
          "b": "Possibility B",
          "c": "Possibility C"
        }),
      new Question(
        "5", "question 5", "a", {
          "a": "Possibility A",
          "b": "Possibility B",
          "c": "Possibility C"
        }),
      new Question(
        "6", "question 6", "a", {
          "a": "Possibility A",
          "b": "Possibility B",
          "c": "Possibility C"
        }),
      new Question(
        "7", "question 7", "a", {
          "a": "Possibility A",
          "b": "Possibility B",
          "c": "Possibility C"
        }),
      new Question(
        "8", "question 8", "a", {
          "a": "Possibility A",
          "b": "Possibility B",
          "c": "Possibility C"
        }),
      new Question(
        "9", "question 9", "a", {
          "a": "Possibility A",
          "b": "Possibility B",
          "c": "Possibility C"
        }),
      new Question(
        "10", "question 10", "a", {
          "a": "Possibility A",
          "b": "Possibility B",
          "c": "Possibility C"
        }),
    ];
  }
}
