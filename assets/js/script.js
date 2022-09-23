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

//display colour change
function pastPresent() {
  $(".input").each(function () {
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

//save button
saveButton.addEventListener("click", blockClick);

//when refreshed info stays
