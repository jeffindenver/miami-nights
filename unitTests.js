/*
===============================================================================
; Title:  theModel.js
; Author: Jeff Shepherd, Janet Blohn
; Modified By:
; Date:   3/14/2020
; Description: Unit tests, sort of
;==============================================================================
*/

"use strict";

const theModel = require("./theModel.js");
const quiz = theModel.getData();

function testLength() {
  let message = "Quiz length test: ";
  if (quiz.length === 10) {
    message += " passed";
  } else {
    message += " failed";
  }
  console.log(message);
  console.log("");
}

function testAccessibility() {
  let isPassed = false;
  let message = "Accessible by bracket notation test: ";
  for (let i = 0; i < quiz.length; i++) {
    if (!quiz[i].question) {
      isPassed = false;
    } else {
      isPassed = true;
    }
    console.log(message + (isPassed ? "passed" : "failed"));
  }
  console.log("");
}

function setValueTest(value) {
  let isPassed = false;
  let testValue = value;
  let message = "Value test: ";
  for (let i = 0; i < quiz.length; i++) {
    quiz[i].setUserAnswer(testValue);
    if (!quiz[i].setUserAnswer) {
      isPassed = false;
    } else {
      isPassed = true;
    }
    console.log(message + (isPassed ? "passed" : "failed"));
  }
  console.log("");
}

function printQuestions() {
  for (let i = 0; i < quiz.length; i++) {
    let message =
      `Question: ${quiz[i].question}
     Correct Answer: ${quiz[i].correctAnswer}
     -- Possible Answers --
     Answer A: ${quiz[i].possibleAnswers.A}
     Answer B: ${quiz[i].possibleAnswers.B}
     Answer C: ${quiz[i].possibleAnswers.C}
     Answer D: ${quiz[i].possibleAnswers.D}`;
    console.log(message);
    console.log("");
  }
}

testLength();
testAccessibility();

//test values
//setValueTest("A");
//setValueTest("B");
//setValueTest("C");
//setValueTest("D");
//setValueTest("E");

//test printing of possible answers
for (let i = 0; i < quiz.length; i++) {
  console.log(quiz[i].question);
  console.log(quiz[i].possibleAnswers.A);
  console.log(quiz[i].possibleAnswers.B);
  console.log(quiz[i].possibleAnswers.C);
  console.log(quiz[i].possibleAnswers.D);
  console.log("");
}
