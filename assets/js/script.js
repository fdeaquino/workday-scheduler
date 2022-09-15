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

$("#9 textarea").val(localStorage.getItem("9"))

// WHEN I refresh the page
// THEN the saved events persist
// TODO: need to getItem from localStorage for each time container/block
