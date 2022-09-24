// assign vars
var m = moment();

var currentTime = moment();
var timeContainer = $("#currentDay");

var formContainer = $("#formContainer");
var button = $("button");

//up to date time/day
setInterval(function () {
  $("#currentDay").html(moment().format("ddd MM/DD/y H:mm:ss"));
}, 1000);

function init() {
  setInterval(function () {
    timeContainer.text(currentTime.format("MMMM Do, dddd, hh:mm A"));
  }, 1000);
  recall();
  pastPresent();
}

init();

//save function per row
function saveWork(event) {
  event.preventDefault();
  if ($(this).attr("class") === "saveBtn 9") {
    localStorage.setItem("block9", $("#block9").val());
  } else if ($(this).attr("class") === "saveBtn 10") {
    localStorage.setItem("block10", $("#block10").val());
  } else if ($(this).attr("class") === "saveBtn 11") {
    localStorage.setItem("block11", $("#block11").val());
  } else if ($(this).attr("class") === "saveBtn 12") {
    localStorage.setItem("block12", $("#block12").val());
  } else if ($(this).attr("class") === "saveBtn 1") {
    localStorage.setItem("block1", $("#block1").val());
  } else if ($(this).attr("class") === "saveBtn 2") {
    localStorage.setItem("block2", $("#block2").val());
  } else if ($(this).attr("class") === "saveBtn 3") {
    localStorage.setItem("block3", $("#block3").val());
  } else if ($(this).attr("class") === "saveBtn 4") {
    localStorage.setItem("block4", $("#block4").val());
  } else {
    localStorage.setItem("block5", $("#block5").val());
  }
}

//calling new inputs (saved)
function recall() {
  $("#block9").val(localStorage.getItem("block9"));
  $("#block10").val(localStorage.getItem("block10"));
  $("#block11").val(localStorage.getItem("block11"));
  $("#block12").val(localStorage.getItem("block12"));
  $("#block1").val(localStorage.getItem("block1"));
  $("#block2").val(localStorage.getItem("block2"));
  $("#block3").val(localStorage.getItem("block3"));
  $("#block4").val(localStorage.getItem("block4"));
  $("#block5").val(localStorage.getItem("block5"));
}

//display colour change per time
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
