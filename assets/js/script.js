// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
$("#currentDay").text(moment().format("MMM Do YYYY"));

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// Done on HTML

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// TODO: add conditional formatting and setInverval function to audit the time and update the conditional formatting
// shows hour because the time containers change by the hour - console shows hour in 24hr format
let currentMoment = moment().hour();
console.log(currentMoment);

// queries the time-block class, gets the nuber id for each hour/time container and parses it to determine if it is in the future, present or past
function auditTime() {
    $(".time-block").each(function() {
        let timeContainer = parseInt($(this).attr("id"));
        console.log(timeContainer);
        if (timeContainer > currentMoment) {
            $(this).addClass("future");
        } else if (timeContainer === currentMoment) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};
// calls the auditTime function
auditTime();

// WHEN I click into a timeblock
// THEN I can enter an event
// Done on HTML with textarea
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// TODO: add click event to save buttons/icons to save to local storage
$(".saveBtn").on("click", function() {
    var key = $(this).parent().attr("id");
    var value = $(this).siblings("textarea").val();

    localStorage.setItem(key, value)
})

// WHEN I refresh the page
// THEN the saved events persist
// TODO: need to getItem from localStorage for each time container/block
// changed div id's to match 24hr format because conditional formatting wasn't working with 12hr format
$("#9 textarea").val(localStorage.getItem("9"))
$("#10 textarea").val(localStorage.getItem("10"))
$("#11 textarea").val(localStorage.getItem("11"))
$("#12 textarea").val(localStorage.getItem("12"))
$("#13 textarea").val(localStorage.getItem("1"))
$("#14 textarea").val(localStorage.getItem("2"))
$("#15 textarea").val(localStorage.getItem("3"))
$("#16 textarea").val(localStorage.getItem("4"))
$("#17 textarea").val(localStorage.getItem("5"))