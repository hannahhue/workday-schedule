// assign vars
var m = moment();
var saveButton = document.querySelector("#save-btn");

var currentTime = moment();
var timeContainer = $("#currentDay");

//up to date time/day
setInterval(function () {
  $("#currentDay").html(moment().format("ddd MM/DD/y H:mm:ss"));
}, 1000);

function init() {
  setInterval(function () {
    timeContainer.text(currentTime.format("MMMM Do, dddd, hh:mm A"));
  }, 1000);
}

init();

//make time blocks here

//save button
$(".saveBtn").click(function () {
  savedText = $(this).siblings(".txt").val();
  console.log(eventText);
  savedTime = $(this).siblings(".hour").text();
  console.log(savedTime);
  localStorage.setItem(savedTime, JSON.stringify(savedText));

  inputText();
  pastPresent();
});

//placing saved text
function inputText() {
  var saved1 = JSON.parse(localStorage.getItem("10:00 am"));
  $("#1").val(saved1);

  var saved2 = JSON.parse(localStorage.getItem("10:00 am"));
  $("#2").val(saved2);

  var saved3 = JSON.parse(localStorage.getItem("10:00 am"));
  $("#3").val(saved3);

  var saved4 = JSON.parse(localStorage.getItem("10:00 am"));
  $("#4").val(saved4);

  var saved5 = JSON.parse(localStorage.getItem("10:00 am"));
  $("#5").val(saved5);

  var saved6 = JSON.parse(localStorage.getItem("10:00 am"));
  $("#6").val(saved6);

  var saved7 = JSON.parse(localStorage.getItem("10:00 am"));
  $("#7").val(saved7);

  var saved8 = JSON.parse(localStorage.getItem("10:00 am"));
  $("#8").val(saved8);

  var saved9 = JSON.parse(localStorage.getItem("10:00 am"));
  $("#9").val(saved9);

  var saved10 = JSON.parse(localStorage.getItem("10:00 am"));
  $("#10").val(saved10);

  var saved11 = JSON.parse(localStorage.getItem("10:00 am"));
  $("#11").val(saved11);

  var saved12 = JSON.parse(localStorage.getItem("10:00 am"));
  $("#12").val(saved12);

  var saved13 = JSON.parse(localStorage.getItem("10:00 am"));
  $("#13").val(saved13);
}

//display colour change
function pastPresent() {
  $(".txt").each(function () {
    var scheduledTime = parseInt($(this).attr("id"));
    console.log(scheduledTime);

    if (currentTime > scheduledTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (currentTime < scheduledTime) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    } else {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    }
  });
}
//when refreshed info stay
