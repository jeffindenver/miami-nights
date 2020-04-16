function ResultAnimation(theScore) {

  "use strict";

  const score = theScore;

  let output = evaluateScore();

  function evaluateScore() {
    let message = "";
    if (score > 89) {
      message = "Tubular!";
    } else if (score > 79) {
      message = "Radical!";
    } else if (score > 69) {
      message = "Could be worse.";
    } else if (score > 59) {
      message = "um, not so hot.";
    } else {
      message = "Gag me with a spoon!"
    }
    return message.toUpperCase();
  }

  this.startAnimation = function () {
    const steps = 150;
    const delay = 20;
    let canvas, context, addAngle, addScale, step;

    let rotateText = function () {
      step++;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.save();
      context.translate(canvas.width / 2, canvas.height / 2);
      context.scale(addScale * step, addScale * step);
      context.rotate(addAngle * step);
      context.fillText(output, 0, 0);
      context.restore();
      if (step < steps) {
        let t = setTimeout(rotateText, delay);
      }
      if (step === steps) {
        fadeOut();
      }
    }

    function init() {
      canvas = document.getElementById("summaryCanvas");
      context = canvas.getContext("2d");
      canvas.setAttribute("style", "display: block");

      context.fillStyle = "#fc0af8"
      context.font = "72px Arial";
      context.textAlign = "center";
      context.textBaseLine = "middle";
      addAngle = Math.PI * 2 / steps;
      addScale = 1 / steps;
      step = 0;
      rotateText();
    }

    function fadeOut() {
      setTimeout(function () {
        $(canvas).fadeOut(1000);
      }, 3000)
    }

    init();

  }

}