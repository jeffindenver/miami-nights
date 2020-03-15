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

"use strict";

function Question(question, correctAnswer, possibleAnswers) {
  this.question = question; //string
  this.possibleAnswers = possibleAnswers; //answer object literal (string, string)
  this.correctAnswer = correctAnswer; //string
  this.userAnswer = ""; //string
}

//invocations of this method should be inside a try catch block
Question.prototype.setUserAnswer = function (userAnswer) {
  const validAnswers = "ABCD";
  if (!validAnswers.includes(userAnswer)) {
    throw "Invalid argument when setting user answer.";
  } else {
    this.userAnswer = userAnswer;
  }
};

Question.prototype.isCorrect = function () {
  return this.userAnswer === this.correctAnswer;
}

exports.getData = function () {
  return [new Question(
      "question 1", "A", {
        "A": "Possibility A",
        "B": "Possibility B",
        "C": "Possibility C",
        "D": "Possibility D"
      }),

    new Question(
      "question 2", "A", {
        "A": "Possibility A",
        "B": "Possibility B",
        "C": "Possibility C",
        "D": "Possibility D"
      }),
    new Question(
      "question 3", "A", {
        "A": "Possibility A",
        "B": "Possibility B",
        "C": "Possibility C",
        "D": "Possibility D"
      }),
    new Question(
      "question 4", "A", {
        "A": "Possibility A",
        "B": "Possibility B",
        "C": "Possibility C",
        "D": "Possibility D"
      }),
    new Question(
      "question 5", "A", {
        "A": "Possibility A",
        "B": "Possibility B",
        "C": "Possibility C",
        "D": "Possibility D"
      }),
    new Question(
      "question 6", "A", {
        "A": "Possibility A",
        "B": "Possibility B",
        "C": "Possibility C",
        "D": "Possibility D"
      }),
    new Question(
      "question 7", "A", {
        "A": "Possibility A",
        "B": "Possibility B",
        "C": "Possibility C",
        "D": "Possibility D"
      }),
    new Question(
      "question 8", "A", {
        "A": "Possibility A",
        "B": "Possibility B",
        "C": "Possibility C",
        "D": "Possibility D"
      }),
    new Question(
      "question 9", "A", {
        "A": "Possibility A",
        "B": "Possibility B",
        "C": "Possibility C",
        "D": "Possibility D"
      }),
    new Question(
      "question 10", "A", {
        "A": "Possibility A",
        "B": "Possibility B",
        "C": "Possibility C",
        "D": "Possibility D"
      }),
  ];
}
