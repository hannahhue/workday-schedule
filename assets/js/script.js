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
  sveText = $(this).siblings(".txt").val();
  console.log(sveText);
  sveTime = $(this).siblings(".hour").text();
  console.log(sveTime);
  localStorage.setItem(sveTime, JSON.stringify(sveText));

  inputText();
  pastPresent();
});

//placing saved text
function inputText() {
  var savedSveText1 = JSON.parse(localStorage.getItem("10:00am"));
  $("#1").val("");
  $("#1").val(saveSveText1);

  var savedSveText2 = JSON.parse(localStorage.getItem("11:00am"));
  $("#2").val("");
  $("#2").val(savedSveText2);

  var savedSveText3 = JSON.parse(localStorage.getItem("12:00pm"));
  $("#3").val("");
  $("#3").val(savedSveText3);

  var savedSveText4 = JSON.parse(localStorage.getItem("1:00pm"));
  $("#4").val("");
  $("#4").val(savedSveText4);

  var savedSveText5 = JSON.parse(localStorage.getItem("2:00pm"));
  $("#5").val("");
  $("#5").val(savedSveText5);

  var savedSveText6 = JSON.parse(localStorage.getItem("3:00pm"));
  $("#6").val("");
  $("#6").val(savedSveText6);

  var savedSveText7 = JSON.parse(localStorage.getItem("4:00pm"));
  $("#7").val("");
  $("#7").val(savedSveText7);

  var savedSveText8 = JSON.parse(localStorage.getItem("5:00pm"));
  $("#8").val("");
  $("#8").val(savedSveText8);

  var savedSveText9 = JSON.parse(localStorage.getItem("6:00pm"));
  $("#9").val("");
  $("#9").val(savedSveText9);

  var savedSveText10 = JSON.parse(localStorage.getItem("7:0pam"));
  $("#10").val("");
  $("#10").val(savedSveText10);

  var savedSveText11 = JSON.parse(localStorage.getItem("8:00pm"));
  $("#11").val("");
  $("#11").val(savedSveText11);

  var savedSveText12 = JSON.parse(localStorage.getItem("9:00pm"));
  $("#12").val("");
  $("#12").val(savedSveText12);

  var savedSveText13 = JSON.parse(localStorage.getItem("10:00 pm"));
  $("#13").val("");
  $("#13").val(savedSveText13);
}

//display colour change
// function pastPresent() {
//   $(".txt").each(function () {
//     var scheduledTime = parseInt($(this).attr("id"));
//     console.log(scheduledTime);

//     if (currentTime > scheduledTime) {
//       $(this).removeClass("future");
//       $(this).removeClass("present");
//       $(this).addClass("past");
//     } else if (currentTime < scheduledTime) {
//       $(this).removeClass("present");
//       $(this).removeClass("past");
//       $(this).addClass("future");
//     } else {
//       $(this).removeClass("future");
//       $(this).removeClass("past");
//       $(this).addClass("present");
//     }
//   });
// }
