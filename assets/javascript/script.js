var rootEl = $('#root');
var textInputEl = $('.description');
var currentTime = dayjs().format('H');

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    var saveBtn = $('.saveBtn');
    function saveText() {
        var textInput = $(this).siblings('textarea').val();
        var timeTextInput = $(this).parent().attr('id'); 
        console.log(textInput);
        console.log(timeTextInput);
        localStorage.setItem(timeTextInput, textInput);
    };
    saveBtn.on('click', saveText);

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    
    
    
    
    //code that gets any user input that was saved in localStorage and set sets
    // it as the text value for each hours description class
    $('#hour-9 > .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 > .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 > .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 > .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 > .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 > .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 > .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 > .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 > .description').val(localStorage.getItem('hour-17'));



    //code that displays the current date in the header of the page.
    var todaysDate = dayjs().format('dddd, MMMM D')
    $('#currentDay').text(todaysDate);
});


