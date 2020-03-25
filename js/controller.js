let model = new QuizModel();
let viewModel = new ViewModel(model);
viewModel.buildHtml();
let observables = viewModel.getObservables();
ko.applyBindings(observables);

$(function () {

  $("#begin").click(() => {
    $(".instructions").hide(400);
    $("#begin").fadeOut(200);
    $("#myCarousel").css("display", "block");
    $("#question1").addClass("active");

  });

  $("#submit").click(function () {
    viewModel.report();
  });
});
